import React from 'react';
import Button from '@mui/material/Button';

function HomePage() {
    return (
        <main style={{ padding: '0 50px', backgroundColor: '#f2f2f2', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', color: '#333', fontFamily: 'Montserrat, sans-serif' }}>
                <h1 style={{ fontWeight: 'bold' }}>Welcome to the Home Page!</h1>
                <h2>You have successfully logged in!</h2>
                <p>Our landing page is currently under works, but feel free to enjoy these fun graphics!</p>
            </div>
        </main>
    );
}

export default HomePage;
