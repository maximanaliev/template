import React from 'react';
import {Link} from "react-router-dom";

const Secondary = () => {
    return (
        <div>
            Secondary
            <div>
                <Link to='/'>To main</Link>
            </div>
        </div>
    );
};

export default Secondary;