import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/ui/NewLoadingScreen'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Products from './pages/Products'
import Achievements from './pages/Achievements'
import Boards from './pages/Boards'
import Contact from './pages/Contact'

function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

export default function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [isRevealed, setIsRevealed] = useState(false)

    return (
        <BrowserRouter>
            {isLoading && (
                <LoadingScreen
                    onReveal={() => setIsRevealed(true)}
                    onComplete={() => setIsLoading(false)}
                />
            )}

            <div className={`${isRevealed ? 'app-revealed' : 'app-hidden'} ${isLoading ? 'is-loading' : ''}`}>
                <ScrollToTop />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/achievements" element={<Achievements />} />
                        <Route path="/boards" element={<Boards />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
