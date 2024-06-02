import React, { useState, useEffect } from "react";
import axios from "axios";
import "./registration.css";

export default function Registration() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
        username: "",
        password: "",
        verifyPassword: "",
    });

    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [registrationError, setRegistrationError] = useState("");

    useEffect(() => {
        if (
            formData.password.trim() !== "" &&
            formData.verifyPassword.trim() !== "" &&
            formData.password !== formData.verifyPassword
        ) {
            setPasswordError("Passwords do not match");
        } else {
            setPasswordError("");
        }
    }, [formData.password, formData.verifyPassword]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Validation logic here
        if (name === "phone") {
            if (value.length > 8) {
                setPhoneError("Max of 8 numbers only");
            } else {
                setPhoneError("");
            }
        }

        if (name === "email") {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                setEmailError("Enter in email format");
            } else {
                setEmailError("");
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Form validation checks
        if (phoneError || emailError || passwordError) {
            return;
        }

        try {
            // Send form data to backend server
            const response = await axios.post(
                "http://localhost:3000/register",
                formData
            );

            // Handle successful registration
            console.log(response.data);
            setRegistrationSuccess(true);
        } catch (error) {
            // Handle registration error
            console.error("Error registering user:", error);
            setRegistrationError("Error registering user. Please try again.");
        }
    };

    const handleGoBack = () => {
        // Handle navigation back to homepage
        // For example: window.location.href = '/homepage';
    };

    return (
        <div className="form-container">
            {registrationSuccess ? (
                <div>
                    <h2>Registration successful!</h2>
                    <button onClick={handleGoBack}>Go back to Homepage</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h1>Registration Page</h1>
                    <div className="form-el">
                        <label className="label">First Name:</label>
                        <input
                            type="text"
                            className="input"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-el">
                        <label className="label">Last Name:</label>
                        <input
                            type="text"
                            className="input"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-el">
                        <label className="label">Email ID:</label>
                        <input
                            type="email"
                            className="input"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {emailError && <div style={{ color: "red" }}>{emailError}</div>}
                    </div>
                    <div className="form-el">
                        <label className="label">Phone Number:</label>
                        <input
                            type="tel"
                            className="input"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        {phoneError && <div style={{ color: "red" }}>{phoneError}</div>}
                    </div>
                    <div className="form-el">
                        <label className="label">Date of Birth:</label>
                        <input
                            type="date"
                            className="input"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-el">
                        <label className="label">Username:</label>
                        <input
                            type="text"
                            className="input"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-el">
                        <label className="label">Password:</label>
                        <input
                            type="password"
                            className="input"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-el">
                        <label className="label">Verify password:</label>
                        <input
                            type="password"
                            className="input"
                            name="verifyPassword"
                            value={formData.verifyPassword}
                            onChange={handleChange}
                            required
                        />
                        {passwordError && (
                            <div style={{ color: "red" }}>{passwordError}</div>
                        )}
                    </div>
                    <div>
                        <button type="submit" className="button">
                            Submit
                        </button>
                    </div>
                </form>
            )}
            {registrationError && <p>{registrationError}</p>}
        </div>
    );
}