import React, { useState, useEffect } from 'react';
import './BookedMovies.css';

const BookedMovies = () => {
    const [bookedMovies, setBookedMovies] = useState([]);

    useEffect(() => {
        // Fetch booked movies (e.g., API call)
        const fetchBookedMovies = async () => {
            // Mock data
            const data = [
                { userName: "John Doe", email: "john@example.com", movieName: "Inception", showtime: "7:00 PM" },
                { userName: "Jane Smith", email: "jane@example.com", movieName: "Titanic", showtime: "5:00 PM" },
            ];
            setBookedMovies(data);
        };
        fetchBookedMovies();
    }, []);

    return (
        <div className="booked-movies">
            <h2 className="booked-movies__title">Booked Movies</h2>
            <ul className="booked-movies__list">
                {bookedMovies.map((booking, index) => (
                    <li className="booked-movies__item" key={index}>
                        <span className="booked-movies__movie-name">{booking.movieName}</span>
                        <span className="booked-movies__showtime"> - {booking.showtime}</span> <br />
                        <span className="booked-movies__user-details">
                            {booking.userName} ({booking.email})
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookedMovies;
