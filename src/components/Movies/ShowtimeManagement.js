import React, { useState } from 'react';
import './ShowtimeManagement.css';

const ShowtimeManagement = () => {
    const [showtime, setShowtime] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to manage showtimes (e.g., API call)
        console.log("Showtime Added:", date, showtime);
        setShowtime('');
        setDate('');
    };

    return (
        <div className="showtime-management">
            <h2 className="showtime-management__title">Showtime Management</h2>
            <form className="showtime-management__form" onSubmit={handleSubmit}>
                <input 
                    className="showtime-management__input showtime-management__input--date"
                    type="date" 
                    placeholder="Date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                />
                <input 
                    className="showtime-management__input"
                    type="text" 
                    placeholder="Showtime" 
                    value={showtime} 
                    onChange={(e) => setShowtime(e.target.value)} 
                />
                <button className="showtime-management__button" type="submit">Add Showtime</button>
            </form>
        </div>
    );
};

export default ShowtimeManagement;
