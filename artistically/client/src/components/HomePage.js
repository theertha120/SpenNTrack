import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import EventsDiscovery from './EventsDiscovery';
import Messages from './Messages';
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';

function HomePage({ user }) {
    const [currentPage, setCurrentPage] = useState(null);
    const [contactId, setContactId] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);

    const handleEventsClick = () => {
        setCurrentPage('events');
    };

    const handleMessagesClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleConnectionsClick = () => {
        setCurrentPage('connections');
    };

    const handleJobClick = () => {
        setCurrentPage('job');
    };

    const handleSendMessage = () => {
        setCurrentPage('messages');
        handleClose();
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // Function to render current page based on state
    const renderPage = () => {
        switch (currentPage) {
            case 'events':
                return (<EventsDiscovery />);
            case 'messages':
                return (
                    <Messages userId={user.id} contactId={contactId} />
                );
            default:
                return (
                    <>
                        console.log(user);
                        <div style={{ backgroundColor: 'white', minHeight: '100vh', borderRadius: '10px', padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Montserrat, sans-serif' }}>
                            <div style={{ textAlign: 'center', color: '#333', display: 'flex', alignItems: 'center' }}>
                                <Avatar
                                    src="/avatar.png"
                                    sx={{
                                        height: '250px',
                                        width: '250px',
                                        marginRight: '10vw',
                                    }} />

                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '80px' }}>
                                    <h1 style={{ fontWeight: 'bold', fontSize: '2.75rem' }}>Welcome back {user ? `${user.firstName} ${user.lastName}` : ''}! </h1>
                                    <h2 style={{ fontSize: '1.7rem' }}>You have successfully logged in!</h2>
                                    <p style={{ fontSize: '1.2rem' }}>Feel free to enjoy the following fun features.</p>
                                    <br /> <br /> <br />
                                </div>
                            </div>
                            <hr color="#c1acd9" width="90%" style={{ marginBottom: "80px" }} />
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '170px', justifyContent: 'center', marginBottom: '50px', paddingLeft: '40px' }}>
                                <img src="/events.png" alt="Events" style={{ width: '120px', height: '120px' }} />
                                <img src="/jobs.png" alt="Jobs" style={{ width: '120px', height: '120px' }} />
                                <img src="/messages.png" alt="Messages" style={{ width: '120px', height: '120px' }} />
                                <img src="/connections.png" alt="Connections" style={{ width: '120px', height: '120px' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center' }}>
                                <Button
                                    variant='outlined'
                                    style={{
                                        fontSize: '1.7rem',
                                        borderRadius: '50px',
                                        fontFamily: 'Montserrat, sans-serif',
                                        color: '#3900FF',
                                        borderColor: '#3900FF',
                                        padding: '20px',
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                                    }}
                                    onClick={handleEventsClick}
                                >
                                    Events Discovery
                                </Button>
                                <Button
                                    variant='outlined'
                                    style={{
                                        fontSize: '1.7rem',
                                        borderRadius: '50px',
                                        fontFamily: 'Montserrat, sans-serif',
                                        color: '#9C27B0',
                                        borderColor: '#9C27B0',
                                        padding: '20px',
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                                    }}
                                    onClick={handleJobClick}
                                >
                                    Job Openings
                                </Button>
                                <Button
                                    variant='outlined'
                                    style={{
                                        fontSize: '1.7rem',
                                        borderRadius: '50px',
                                        fontFamily: 'Montserrat, sans-serif',
                                        color: '#9200FF',
                                        borderColor: '#9200FF',
                                        padding: '20px',
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                                    }}
                                    onClick={handleMessagesClick}
                                    aria-describedby={id}
                                >
                                    Messages
                                </Button>
                                <Button
                                    variant='outlined'
                                    style={{
                                        fontSize: '1.7rem',
                                        borderRadius: '50px',
                                        fontFamily: 'Montserrat, sans-serif',
                                        color: '#FF0097',
                                        borderColor: '#FF0097',
                                        padding: '20px',
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                                    }}
                                    onClick={handleConnectionsClick}
                                >
                                    Connections
                                </Button>
                            </div>
                            <br /><br /><br />
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', fontFamily: 'Montserrat, sans-serif' }}>
                                <p> Here is where you can customize your profile, or add relevant skills. Do remember this profile will be displayed to other users and could potentially affect your hireability.</p>
                            </div>
                        </div>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <div style={{ padding: '20px' }}>
                                <TextField
                                    label="Contact ID"
                                    variant="outlined"
                                    value={contactId}
                                    onChange={(e) => setContactId(e.target.value)}
                                    fullWidth
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ marginTop: '10px' }}
                                    onClick={handleSendMessage}
                                >
                                    Send Message
                                </Button>
                            </div>
                        </Popover>
                    </>
                );
        }
    };

    return (
        <main style={{ padding: '0 20px' }}>
            {renderPage()}
        </main>
    );
}

export default HomePage;
