import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";


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

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    }

    const search = (event) => {
        if (event.key === 'Enter') {
            // console.log('We Click This Key :', event.key);
            // 입력한 검색어를 읽어와서
            let keyword = event.target.value;
            // url을 바꿔준다.
            navigate(`/?q=${keyword}`)
        }
    }

    return (
        <div>
            <div>
                <div className={'login-button'}>
                    <FontAwesomeIcon icon={faUser} onClick={goToLogin}/>
                    <div onClick={goToLogin}>로그인</div>
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
                    <FontAwesomeIcon icon={faSearch} className="search-icon"/>
                    <input type="text" placeholder="제품검색" className="search-input"
                           onKeyDown={(event) => search(event)}/>
                </div>
            </div>
        </div>
    )
        ;
};

export default Navbar;