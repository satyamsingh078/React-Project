//src/App.js
import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import CreateUserPage from './pages/CreateUserPage';
import EditUserPage from './pages/EditUserPage';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        // Add 'status' field manually since it's not in the API
        const usersWithStatus = data.map(user => ({
          ...user,
          status: Math.random() > 0.5, // Randomly assign active/inactive for demo purposes
        }));
        setUsers(usersWithStatus);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <Router>
      <Routes>
        {/* Redirect the default path to the users page */}
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<UserListPage users={users} setUsers={setUsers} />} />
        <Route path="/users/create" element={<CreateUserPage users={users} setUsers={setUsers} />} />
        <Route path="/users/edit/:id" element={<EditUserPage users={users} setUsers={setUsers} />} />
      </Routes>
    </Router>
  );
}

 export default App;
