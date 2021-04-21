import React from 'react';
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div>
            Main
            <div>
                <Link to='/secondary'>To secondary</Link>
            </div>
        </div>
    );
};

export default Main;