import React, { useState } from 'react';
import { Button, Overlay, User, UserForm } from '..';
import listOfUsers from './list.js';
import './usersList.scss';


const UsersList = () => {
    const [persons, setPersons] = useState(listOfUsers);
    const [isFormDisplayed, setIsFormDisplayed] = useState(false);

    const deleteUser = (id) => {
        setPersons((prevState) => prevState.filter((el) => el.id !== id));
    };

    const showFormHandler = () => {
        setIsFormDisplayed(!isFormDisplayed);
    };

    return (
        <div className='users'>
            {isFormDisplayed && 
                <Overlay showFormHandler={showFormHandler}>
                    <UserForm
                        persons={persons}
                        setPersons={setPersons}
                        showFormHandler={showFormHandler} 
                    />
                </Overlay>
            }
            <div className='usersContainer'>
                <div className='topHead'>
                    <a href='https://github.com/Ahmd-Khaled/crud' className='github' target='_blank' rel="noreferrer">
                        <img className='githubIcon' src={process.env.PUBLIC_URL + '/imgs/github.svg'} alt='Github' />
                    </a>
                    <Button clickHandler={showFormHandler} btnClass='add'>Add User</Button>
                </div>
                <div className='usersList'>
                    {persons.map((item, index) => (
                        <User key={item.id} item={item} deleteUser={deleteUser} />
                    ))}
                    {persons.length < 1 && <p className='errTxt'>There is no users.</p>}
                </div>
            </div>
        </div>
    )
}

export default UsersList;
