import React from 'react';
import { Routes as ROUTES } from '../../../../Routes';
import { Link } from 'react-router-dom';

export default function Logo(props) {

    return (
        <div className="image-cover">
            <Link to={ROUTES.home}>
                <img className="logo-img" {...props} />
            </Link>
        </div>
    )
}