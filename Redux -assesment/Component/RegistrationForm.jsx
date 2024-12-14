// components/RegistrationForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setEmail, setPassword, setConfirmPassword, setPhone, setDob, setAddress, setErrors } from '../Component/slice';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { username, email, password, confirmPassword, phone, dob, address, errors } = useSelector((state) => state.form);

  const [localErrors, setLocalErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (username.length > 4) {
      errors.username = 'Username must be 4 characters or less.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.email = 'Invalid email format.';
    }
    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      errors.phone = 'Phone number must be 10 digits.';
    }
    if (!dob) {
      errors.dob = 'Date of birth is required.';
    }
    if (!address) {
      errors.address = 'Address is required.';
    }
    setLocalErrors(errors);
    dispatch(setErrors(errors));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully!', { username, email, password, phone, dob, address });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="row mb-3">
        <label className="form-label">Username:</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => dispatch(setUsername(e.target.value))}
        />
        {localErrors.username && <span className="text-danger">{localErrors.username}</span>}
      </div>
      <div className="row mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        {localErrors.email && <span className="text-danger">{localErrors.email}</span>}
      </div>
      <div className="row mb-3">
        <label className="form-label">Password:</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
        {localErrors.password && <span className="text-danger">{localErrors.password}</span>}
      </div>
      <div className="row mb-3">
        <label className="form-label">Confirm Password:</label>
        <input
          type="password"
          className="form-control"
          value={confirmPassword}
          onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
        />
        {localErrors.confirmPassword && <span className="text-danger">{localErrors.confirmPassword}</span>}
      </div>
      <div className="row mb-3">
        <label className="form-label">Phone:</label>
        <input
          type="text"
          className="form-control"
          value={phone}
          onChange={(e) => dispatch(setPhone(e.target.value))}
        />
        {localErrors.phone && <span className="text-danger">{localErrors.phone}</span>}
      </div>
      <div className="row mb-3">
        <label className="form-label">Date of Birth:</label>
        <input
          type="date"
          className="form-control"
          value={dob}
          onChange={(e) => dispatch(setDob(e.target.value))}
        />
        {localErrors.dob && <span className="text-danger">{localErrors.dob}</span>}
      </div>
      <div className="row mb-3">
        <label className="form-label">Address:</label>
        <textarea
          className="form-control"
          value={address}
          onChange={(e) => dispatch(setAddress(e.target.value))}
        />
        {localErrors.address && <span className="text-danger">{localErrors.address}</span>}
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default RegistrationForm;