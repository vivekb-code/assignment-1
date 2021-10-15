import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userConstants } from './../../_constants';
import { userActions } from './../../_actions';
import UserProfile from './user-profile';
import { Col } from 'react-bootstrap';
import UsersList from './users-list';

function Home() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user && user.role === userConstants.ROLE_ADMIN) {
            dispatch(userActions.getAll());
        }
    }, []);

    return (
        <Col xs={{ span: 6, offset: 3 }}>
            <h3>Hi {user.name}!</h3>
            { user.role === userConstants.ROLE_EMPLOYEE && <UserProfile user={user} /> }
            { user.role === userConstants.ROLE_ADMIN && <UsersList users={users.list} /> }
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </Col>
    );
}

export { Home };