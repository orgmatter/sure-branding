import React from 'react';
import Pages from '../../components/Pages';


export default function PageController (props) {

    const { match } = props;

    return (
        <div className="page-controller-container">
            <Pages routeProps={match} />
        </div>
    )
}