import React from 'react';
import UserForm from '../components/UserForm';
import { useNavigate } from 'react-router-dom';

const CreateUserPage = ({ users, setUsers }) => {
  const navigate = useNavigate();

  const handleCreateUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    navigate('/users');
  };

  return (
    <div>
     
      <UserForm onSubmit={handleCreateUser} />
    </div>
  );
};

export default CreateUserPage;
