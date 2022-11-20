import React, { useState } from 'react';
import { Button } from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './userForm.scss';

const formInputs = [
    {
        id: 1,
        label: 'name',
        inputType: 'text',
        placeholder: 'Enter your name'
    },
    {
        id: 2,
        label: 'gender',
        inputType: 'text',
        placeholder: 'Enter your gender'
    },
    {
        id: 3,
        label: 'phone',
        inputType: 'text',
        placeholder: 'Enter your phone number'
    },
    {
        id: 4,
        label: 'address',
        inputType: 'text',
        placeholder: 'Enter your address'
    },
]

const UserForm = ({ persons, setPersons, showFormHandler }) => {
    const [input, setInput] = useState({
        name: "",
        gender: "",
        phone: "",
        address: "",
    });

    const inputHandler = (e) => {
        const fieldInput = e.target.name;
        const fieldValue = e.target.value;

        setInput({ ...input, [fieldInput]: fieldValue });
        console.log(input);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 100);
        const newUser = { ...input, id};
        setPersons([...persons, newUser]);
        console.log('Form Submitted');
    };

    return (
        <div className='userForm'>
            <div className='closeIcon' onClick={showFormHandler}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <form className='form' onSubmit={submitHandler}>
                {formInputs.map((obj, index) => (
                    <div className='inputBox' key={obj.id}>
                        <label className='inputLabel' aria-required>{obj.label}</label>
                        <input
                            className='input'
                            name={obj.label}
                            type={obj.inputType}
                            placeholder={obj.placeholder} 
                            onChange={inputHandler}
                        />
                    </div>
                ))}
                <Button btnClass='add' btnType='submit'>Add User</Button>
            </form>
        </div>
    )
}

export default UserForm;
