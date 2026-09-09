import imageio_ffmpeg
import numpy as np
from PIL import Image
import os

input_video = 'samurai_cinematic_edge_to_edge.mp4'
output_video = 'samurai_cinematic_gradient_logo.mp4'

W, H = 1920, 1080
# Sun geometric center and radius
sun_cx, sun_cy = 509, 418
sun_r = 295

# Visual center for logo within the visible red sun orb
logo_cx, logo_cy = 509, 360

logo_full = Image.open('logo_cropped.png').convert('RGBA')
w = 270
h = int(w * logo_full.height / logo_full.width)
logo_resized = logo_full.resize((w, h), Image.Resampling.LANCZOS)

# Perfectly centered both horizontally and vertically
pos_x = int(logo_cx - w / 2)
pos_y = int(logo_cy - h / 2)

overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
overlay.paste(logo_resized, (pos_x, pos_y))
arr_ov = np.array(overlay)
logo_alpha = (arr_ov[:, :, 3].astype(np.float32) / 255.0)

# Circular sun mask
Y, X = np.ogrid[:H, :W]
dist = np.sqrt((X - sun_cx)**2 + (Y - sun_cy)**2)
sun_mask = np.clip(1.0 - (dist - (sun_r - 5)) / 10.0, 0.0, 1.0).astype(np.float32)

static_alpha = logo_alpha * 0.74 * sun_mask

# Setup reader and writer
reader = imageio_ffmpeg.read_frames(input_video)
meta = next(reader)
fps = meta['fps']
size = meta['size']

writer = imageio_ffmpeg.write_frames(
    output_video,
    size=size,
    fps=fps,
    codec='libx264',
    pix_fmt_in='rgb24',
    pix_fmt_out='yuv420p',
    output_params=['-preset', 'slow', '-crf', '17'],
    audio_path=input_video,
    audio_codec='copy'
)
next(writer)

frame_count = 0
logo_color = 12.0 # deep silhouette charcoal

for frame_bytes in reader:
    frame = np.frombuffer(frame_bytes, dtype=np.uint8).reshape((H, W, 3)).copy()
    
    # Mountain, samurai and flying birds have low Red channel (< 90)
    r_channel = frame[:, :, 0].astype(np.float32)
    is_sun = np.clip((r_channel - 90.0) / 60.0, 0.0, 1.0)
    
    tot_alpha = static_alpha * is_sun
    tot_alpha_3d = tot_alpha[:, :, np.newaxis]
    frame_float = frame.astype(np.float32)
    blended = frame_float * (1.0 - tot_alpha_3d) + logo_color * tot_alpha_3d
    
    out_frame = np.clip(blended, 0, 255).astype(np.uint8)
    writer.send(out_frame.tobytes())
    frame_count += 1

writer.close()
reader.close()
print(f'Successfully processed {frame_count} frames into centered {output_video}')
