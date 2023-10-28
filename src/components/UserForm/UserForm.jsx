import React, { useEffect, useState } from 'react';
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

const UserForm = ({ persons, setPersons, showFormHandler, saveUser, selectedUser, file }) => {
    const [input, setInput] = useState({ name: "", gender: "", phone: "", address: ""});

    useEffect(() => {
        if (selectedUser) {
            console.log('selectedUser:', selectedUser);
            setInput((prev) => ({ ...prev, ...selectedUser }));
            // setInput(selectedUser)
        } else {
            setInput((prev) => ({
                ...prev,
                id: Math.floor(Math.random() * 100),
            }));
        }
    }, [selectedUser]);
    console.log('input: ', input);

    const inputHandler = (e) => {
        const fieldInput = e.target.name;
        const fieldValue = e.target.value;

        setInput({ ...input, [fieldInput]: fieldValue });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        saveUser(input);
        // const id = Math.floor(Math.random() * 100);
        // const newUser = { ...input, id};
        // setPersons([...persons, newUser]);
        setInput({ name: "", gender: "", phone: "", address: ""});
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
                            value={input[obj.label]}
                        />
                    </div>
                ))}
                <Button btnClass='add' btnType='submit'>Save User</Button>
            </form>
            <div className='imgBox'>
                <img
                    src={file
                        ? URL.createObjectURL(file)
                        : '/imgs/no-image-icon-0.jpg'
                    }
                    alt=''
                />
            </div>
        </div>
    )
}

export default UserForm;
