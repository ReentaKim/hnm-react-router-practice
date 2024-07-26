import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    const menuList = [
        '여성',
        'Divided',
        '남성',
        '신생아/유아',
        '아동',
        'H&M Home',
        'Sale',
        '지속가능성',
    ];
    return (
        <div>
            <div>
                <div className={'login-button'}>
                    <FontAwesomeIcon icon={faUser}/>
                    <div>로그인</div>
                </div>

            </div>
            <div className={'nav-section'}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSWOhkrtrLKgKz35SOCEsZV-v2q_yeKpMgw&s"
                     alt="logo" width={100}/>
            </div>
            <div className={'menu-area'}>
                <ul className={'menu-list'}>
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
                <div className="search-container">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input type="text" placeholder="제품검색" className="search-input"/>
                </div>
            </div>
        </div>
    )
        ;
};

export default Navbar;