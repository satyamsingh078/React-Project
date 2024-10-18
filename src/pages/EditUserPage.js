import React from 'react';
import UserForm from '../components/UserForm';
import { useParams, useNavigate } from 'react-router-dom';
import './styles.css'; // Ensure the CSS file is properly imported

const EditUserPage = ({ users, setUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((user) => user.id === parseInt(id));

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === parseInt(id) ? updatedUser : user
    );
    setUsers(updatedUsers);
    navigate('/users');
  };

  return (
    <div>
      {/* <h2>Edit</h2> */}
      {user ? (
        <UserForm initialUser={user} onSubmit={handleUpdateUser} />
      ) : (
        <p className="error-message">User not found</p>
      )}
    </div>
  );
};

export default EditUserPage;
