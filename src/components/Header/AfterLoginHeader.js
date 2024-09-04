import React, { useState } from "react";
import AddMovie from '../Movies/AddMovie';
import ShowtimeManagement from '../Movies/ShowtimeManagement';
import BookedMovies from '../Movies/BookedMovies';
import AddCategory from "../Movies/AddCategory";
import './AfterLoginHeader.css';

const AfterLoginHeader = ({ setIsLoggedIn }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const logoutHandler = () =>{
        setIsLoggedIn(false);
    };

    const toggleSidebarHandler = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <div className="main">
                <div className="vip-section">
                    <span className="vip-icon">🏆</span>
                    <span className="vip-text">VIP SWEEPSTAKES</span>
                </div>
                <div className="promo-section">
                    <h4 className="heading">$5000 SHOPPING SPREE</h4>
                    <p>Join Movies VIP for a chance to win. Don't forget to join during checkout</p>
                </div>
                <button className="logout" onClick={logoutHandler}>
                    <span className="logout-icon">Logout</span>
                </button>
                <div className="hamburger-icon" 
                onClick={toggleSidebarHandler}>
                    &#9776;
                </div>
            </div>

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <h2>Menu</h2>
                <ul>
                    <li><a href="#" onClick={() => setActiveSection('AddCategory')}>Add Category</a></li>
                    <li><a href="#" onClick={() => setActiveSection('AddMovie')}>Add Movie</a></li>
                    <li><a href="#" onClick={() => setActiveSection('ShowtimeManagement')}>Showtime Management</a></li>
                    <li><a href="#" onClick={() => setActiveSection('BookedMovies')}>Booked Movies</a></li>
                </ul>
            </div>

            <div className="content">
                {activeSection === 'AddCategory' && <AddCategory />}
                {activeSection === 'AddMovie' && <AddMovie />}
                {activeSection === 'ShowtimeManagement' && <ShowtimeManagement />}
                {activeSection === 'BookedMovies' && <BookedMovies />}
            </div>
        </>
    );
};

export default AfterLoginHeader;
