import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './table.css';
import { useNavigate } from 'react-router-dom';

const Table = () => {
    const [isToken, setIsToken] = useState(false);
    const navigate = useNavigate();
    const users = [
        { id: 1, name: 'Michael Hotz', dateCreated: '04/10/2013', role: 'Admin', status: 'Active', img: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { id: 2, name: 'Paula Wilson', dateCreated: '05/08/2014', role: 'Publisher', status: 'Active', img: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { id: 3, name: 'Antonio Moreno', dateCreated: '11/05/2015', role: 'Publisher', status: 'Suspended', img: 'https://randomuser.me/api/portraits/men/4.jpg' },
        { id: 4, name: 'Mary Saveley', dateCreated: '06/09/2016', role: 'Reviewer', status: 'Active', img: 'https://randomuser.me/api/portraits/women/8.jpg' },
        { id: 5, name: 'Martin Sommer', dateCreated: '12/08/2017', role: 'Moderator', status: 'Inactive', img: 'https://randomuser.me/api/portraits/men/7.jpg' },
    ];

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsToken(true);
        } else {
            navigate('/signin')
        }
    }, [navigate]);

    return (
        <div>
            {
                isToken && (
                    <div className='container my-4'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date Created</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td className='name'>
                                        <img className='me-3 rounded-circle' src={user.img} alt="image not found" />
                                        <span><strong>{user.name}</strong></span>
                                    </td>
                                    <td>{user.dateCreated}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        {user.status=="Active" && (<i className="bi bi bi-circle-fill text-success"></i>)}
                                        {user.status=="Suspended" && (<i className="bi bi bi-circle-fill text-danger"></i>)}
                                        {user.status=="Inactive" && (<i className="bi bi bi-circle-fill text-warning"></i>)}
                                        
                                        <span className='ms-2 status'>{user.status}</span>
                                    </td>
                                    <td className='action'>
                                        <i className="bi bi-gear-fill text-primary"></i>
                                        <i className="bi bi-x-circle-fill text-danger ms-3"></i>
                                    </td>
                                </tr>
                            ))}
                               
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    )
}

export default Table
