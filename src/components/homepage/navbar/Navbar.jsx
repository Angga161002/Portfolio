import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavList from './NavList';

export default function Navbar() {
    const location = useLocation().pathname;

    return (
            <NavList />
    );
}
