import React, { useState } from 'react';
import '../pages/styles.css'; // Make sure to import your CSS file

const UserForm = ({ onSubmit, initialUser = {} }) => {
  const [name, setName] = useState(initialUser.name || '');
  const [email, setEmail] = useState(initialUser.email || '');
  const [phone, setPhone] = useState(initialUser.phone || '');
  const [status, setStatus] = useState(initialUser.status || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...initialUser, name, email, phone, status };
    onSubmit(user);
  };

  return (
    <div className="form-container">
      <h2>{initialUser.id ? 'Edit User' : 'Create New User'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter user name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter user email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status ? 'active' : 'inactive'}
            onChange={(e) => setStatus(e.target.value === 'active')}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          {initialUser.id ? 'Update User' : 'Create User'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;

