import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { toolbarList } from './toolbar-list';
import Logo from './logo';
import { Images } from '../../../Images';
import { Routes as ROUTES } from '../../../../Routes';
import { Link } from 'react-router-dom';

export default function HeaderToolbar ({routeUrl}) {
    
    return (
        <div className="header-toolbar-container">
            <Toolbar className="header-toolbar-flex">
                <div className="header-toolbar-item toolbar-logo-div">
                    <Logo src={Images.src.logo} alt="" />
                </div>
                <div className="header-toolbar-item header-toolbar-link-flex link-cover-flex">
                    <div className="header-toolbar-link-item">
                        <div className={`link-cover-item ${routeUrl == '/' ? 'link-cover-item-active' : null}`}>
                            <Link className={`toolbar-link-a ${routeUrl == '/' ? 'toolbar-link-active' : null}`} to={ROUTES.home}>{toolbarList.home}</Link>
                        </div>
                        <div className={`link-cover-item ${routeUrl == '/about_us' ? 'link-cover-item-active' : null}`}>
                            <Link className={`toolbar-link-a ${routeUrl == '/about_us' ? 'toolbar-link-active' : null}`} to={`#${ROUTES.aboutUs}`}>{toolbarList.about}</Link>
                        </div>
                        <div className={`link-cover-item ${routeUrl == '/services' ? 'link-cover-item-active' : null}`}>
                            <Link className={`toolbar-link-a ${routeUrl == '/services' ? 'toolbar-link-active' : null}`} to={ROUTES.services}>{toolbarList.services}</Link>
                        </div>
                        <div className={`link-cover-item ${routeUrl == '/gallery' ? 'link-cover-item-active' : null}`}>
                            <Link className={`toolbar-link-a ${routeUrl == '/gallery' ? 'toolbar-link-active' : null}`} to={ROUTES.gallery}>{toolbarList.gallery}</Link>
                        </div>
                        <div className={`link-cover-item ${routeUrl == '/contact_us' ? 'link-cover-item-active' : null}`}>
                            <Link className={`toolbar-link-a ${routeUrl == '/contact_us' ? 'toolbar-link-active' : null}`} to={ROUTES.contactUs}>{toolbarList.contact}</Link>
                        </div>
                    </div>
                </div>
                <div className="header-toolbar-item">
                    <div className="menu-icon-cover">

                    </div>
                </div>
            </Toolbar>
        </div>
    )
}
