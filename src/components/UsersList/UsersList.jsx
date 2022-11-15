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
                <div className='githubImage'>
                    <a href='https://github.com/Ahmd-Khaled/crud' className='github' target='_blank' rel="noreferrer">
                        <img className='githubIcon' src={process.env.PUBLIC_URL + '/imgs/github.svg'} alt='Github' />
                    </a>
                </div>
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
