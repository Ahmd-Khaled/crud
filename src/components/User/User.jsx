import React from 'react';
import { Button } from '..';
import './user.scss';

const User = ({ item, deleteUser }) => {
    const deleteHandler = () => {
        deleteUser(item.id);
    };

    const editHandler = () => {

    };

    return (
        <div className='user'>
            <div className='userContainer'>
                <ul className='userData'>
                    <li className='item'>
                        <span>Name:</span>
                        <span>{item.name}</span>
                    </li>
                    <li className='item'>
                        <span>Gender:</span>
                        <span>{item.gender}</span>
                    </li>
                    <li className='item'>
                        <span>Phone:</span>
                        <span>{item.phone}</span>
                    </li>
                    <li className='item'>
                        <span>Address:</span>
                        <span>{item.address}</span>
                    </li>
                </ul>
                <div className='btn-group'>
                    {/* <button className='delBtn' onClick={deleteHandler}>Delete</button> */}
                    <Button clickHandler={editHandler} btnClass='edit'>Edit</Button>
                    <Button clickHandler={deleteHandler} btnClass='delete'>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default User;
