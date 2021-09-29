import React from 'react';

const User = ({ name, surname }) => {
  return (
    <div className='user'>
      <div>Name: {name}</div>
      <div>Surname: {surname}</div>
    </div>
  );
};

export default User;
