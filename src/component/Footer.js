import React from 'react';
import './Footer.css';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return(
        <footer className="mt-auto footer">
            <div className="footer_row"></div>
            <div className="container py-3">
                <div className="row footer_space">
                    <div className="col">
                        <span className="mx-auto">Copyright AliceWu216</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;