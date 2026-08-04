import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'

const boardData = {
    '2025–26': [
        { name: 'Arjun Mehta', role: 'President', initials: 'AM' },
        { name: 'Priya Sharma', role: 'Vice President', initials: 'PS' },
        { name: 'Rahul Dev', role: 'Tech Lead', initials: 'RD' },
        { name: 'Ananya Iyer', role: 'Design Lead', initials: 'AI' },
        { name: 'Vikram Singh', role: 'Events Head', initials: 'VS' },
        { name: 'Sneha Patel', role: 'Marketing Lead', initials: 'SP' },
        { name: 'Karthik Nair', role: 'Open Source Lead', initials: 'KN' },
        { name: 'Meera Joshi', role: 'Content Lead', initials: 'MJ' },
    ],
    '2024–25': [
        { name: 'Rohan Gupta', role: 'President', initials: 'RG' },
        { name: 'Ishita Reddy', role: 'Vice President', initials: 'IR' },
        { name: 'Aditya Kumar', role: 'Tech Lead', initials: 'AK' },
        { name: 'Nisha Verma', role: 'Design Lead', initials: 'NV' },
        { name: 'Saurav Das', role: 'Events Head', initials: 'SD' },
        { name: 'Pooja Rao', role: 'Marketing Lead', initials: 'PR' },
    ],
    '2023–24': [
        { name: 'Amit Saxena', role: 'President', initials: 'AS' },
        { name: 'Divya Menon', role: 'Vice President', initials: 'DM' },
        { name: 'Tarun Bhat', role: 'Tech Lead', initials: 'TB' },
        { name: 'Ritu Kapoor', role: 'Design Lead', initials: 'RK' },
        { name: 'Nikhil Jain', role: 'Events Head', initials: 'NJ' },
        { name: 'Kavya Srinivasan', role: 'Marketing Lead', initials: 'KS' },
    ],
}

const years = Object.keys(boardData)

export default function Boards() {
    const [selectedYear, setSelectedYear] = useState(years[0])

    return (
        <>
            <div className="page-header">
                <span className="page-label">Leadership</span>
                <h1>Our Boards</h1>
                <p>The people who've steered Gradient through the years.</p>
            </div>

            <section className="section">
                <div className="container">
                    <div className="year-selector">
                        {years.map(year => (
                            <button
                                key={year}
                                className={`year-btn ${selectedYear === year ? 'active' : ''}`}
                                onClick={() => setSelectedYear(year)}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    <AnimatedSection key={selectedYear}>
                        <div className="grid-4">
                            {boardData[selectedYear].map((m, i) => (
                                <div key={i} className="card member-card">
                                    <div className="member-avatar">{m.initials}</div>
                                    <div className="member-name">{m.name}</div>
                                    <div className="member-role">{m.role}</div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}
