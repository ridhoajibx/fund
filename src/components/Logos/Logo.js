import React from 'react';
import Brands from '../../assets/img/Logo.svg';

const Logo = ({logoColor}) => {
    return (
        <div className="flex items-center">
            <img className="w-6 h-6 mr-2" src={Brands} alt="logo"/>
            <span className={logoColor}>FUN</span>D
        </div>
    );
}

export default Logo;
