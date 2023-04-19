import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/horizontal">Горизонтальний світлофор</Link>
                    </li>
                    <li>
                        <Link to="/vertical">Вертикальний світлофор</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;