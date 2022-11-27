import React, { useRef, useState } from 'react';
import { Button, Overlay, User, UserForm, SearchInput } from '..';
import listOfUsers from './list.js';
import './usersList.scss';


const UsersList = () => {
    const [search, setSearch] = useState("");
    const [persons, setPersons] = useState(listOfUsers);
    const [isFormDisplayed, setIsFormDisplayed] = useState(false);

    const selectedUser = useRef("");

    const deleteUser = (id) => {
        setPersons((prevState) => prevState.filter((el) => el.id !== id));
    };

    const showFormHandler = () => {
        setIsFormDisplayed(!isFormDisplayed);
        selectedUser.current = "";
    };

    const returnPersons = () => {
        if (search.length > 0) {
            return persons.filter(
                (el) => el.name.toLowerCase().includes(search.toLowerCase())
                    || el.address.toLowerCase().includes(search.toLowerCase())
            );
        }
        return persons;
    };

    const clearSearchHandler = () => {
        setSearch("");
    };

    const getUserDataHandler = (data) => {
        selectedUser.current = data;
        setIsFormDisplayed(true);
    };

    const saveUser = (data) => {
        const userExist = persons.find((el) => el.id === data.id);
        if (userExist) {
            setPersons(
                persons.map((el) => {
                if (el.id === data.id) {
                    return { ...data };
                } else {
                    return el;
                }
                })
            );
        } else {
            setPersons((prev) => [...prev, data]);
        }
    
        setIsFormDisplayed(false);
    };

    return (
        <div className='users'>
            {isFormDisplayed && 
                <Overlay showFormHandler={showFormHandler}>
                    <UserForm
                        persons={persons}
                        setPersons={setPersons}
                        showFormHandler={showFormHandler} 
                        saveUser={saveUser}
                        selectedUser={selectedUser.current}
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
                <SearchInput
                    name="filter"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                    clearSearch={clearSearchHandler}
                />
                <div className='usersList'>
                    {returnPersons().map((item, index) => (
                        <User
                            key={item.id}
                            item={item}
                            deleteUser={deleteUser} 
                            getUserData={getUserDataHandler}
                        />
                    ))}
                    {returnPersons().length < 1 && <p className='errTxt'>There is no users.</p>}
                </div>
            </div>
        </div>
    )
}

export default UsersList;
