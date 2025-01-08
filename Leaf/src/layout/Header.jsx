import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to ="/">홈</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to ="/boardList">메시지함</Link>
        </header>
        
    )
}

export default Header;