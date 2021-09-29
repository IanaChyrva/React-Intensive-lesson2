import React, { useState } from 'react';
import useInput from '../../../custom-hooks/useInput';
import './styles.css';
import User from './User';

const Users = () => {
  const [userName, onChangeName] = useInput('');
  const [userSurname, onChangeSurname] = useInput('');
  const [userInfo, setUserInfo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName || !userSurname) return;

    setUserInfo([...userInfo, { userName, userSurname, id: +new Date() }]);
    console.log(userInfo);
    onChangeName('');
    onChangeSurname('');
  };

  const onChangeNameInput = (e) => {
    onChangeName(e.target.value);
  };

  const onChangeSurnameInput = (e) => {
    onChangeSurname(e.target.value);
  };

  return (
    <div>
      <div>Using custom hook for inputs:</div>
      <form action='' onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              type='text'
              placeholder='Enter name'
              value={userName}
              onChange={onChangeNameInput}
            />
          </div>
        </div>

        <div>
          <div>
            <input
              type='text'
              placeholder='Enter surname'
              value={userSurname}
              onChange={onChangeSurnameInput}
            />
          </div>
        </div>
        <button>Submit</button>
      </form>

      {userInfo.map((user) => {
        return (
          <User key={user.id} name={user.userName} surname={user.userSurname} />
        );
      })}
    </div>
  );
};

export default Users;
