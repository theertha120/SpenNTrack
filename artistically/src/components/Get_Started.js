// components/Get_Started.js
import React from 'react';
import Button from '@mui/material/Button';
import ImageGrid from './ImageGrid';

function Get_Started() {
    return (
        <div>
            <main style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '90vh', padding: '0 50px' }}>
                <ImageGrid />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', height: '100%' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'right', maxWidth: '350px', color: '#fff' }}>
                        <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>ArtisticAlly</span> <span style={{ fontFamily: 'Montserrat, sans-serif' }}>: A platform to connect with artists and job opportunities!</span>
                    </div>
                    <Button
                        variant="contained"
                        style={{
                            fontSize: '3rem',
                            background: 'linear-gradient(45deg, #9C27B0 30%, #2196F3 90%)', // Purple to blue gradient
                            color: '#fff',
                            borderRadius: '50px',
                            textTransform: 'capitalize',
                            marginRight: '0',
                            fontFamily: 'Montserrat, sans-serif',
                        }}
                    >
                        Welcome!
                    </Button>
                </div>
            </main>
        </div>
    );
}

export default Get_Started;
