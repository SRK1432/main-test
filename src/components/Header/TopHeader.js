import React from "react";
import './TopHeader.css';

const TopHeader = () => {
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
                <button className="login">
                    <span className="login-icon">👤</span> Login
                </button>
            </div>

        </>
    );
}

export default TopHeader;
