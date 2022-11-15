import React from 'react';
import './user.scss';

const User = ({ item, deleteUser }) => {
    const deleteHandler = () => {
        deleteUser(item.id);
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
                <div className='btns'>
                    <button className='delBtn' onClick={deleteHandler}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default User;
