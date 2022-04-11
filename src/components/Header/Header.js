import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to='/' >Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                <img width={'30 %'} style={{ borderRadius: '50%' }} src={user?.photoURL && user.photoURL} alt="" />
                {
                    user?.uid
                        ?
                        <button onClick={handleSignOut}>Signout</button>
                        :
                        <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;