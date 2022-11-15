import React, { useState } from 'react';
import { User } from '..';
import listOfUsers from './list.js';
import './usersList.scss';

const UsersList = () => {
    const [persons, setPersons] = useState(listOfUsers);

    const deleteUser = (id) => {
        setPersons((prevState) => prevState.filter((el) => el.id !== id));
    };

    return (
        <div className='users'>
            <div className='usersContainer'>
                <div className='usersList'>
                    {persons.map((item, index) => (
                        <User key={item.id} item={item} deleteUser={deleteUser} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UsersList;
