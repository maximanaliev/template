import React from 'react';
import {Link} from "react-router-dom";
import Two from "../assets/images/two.png";
import description from '../static';
import MetaDecorator from "../component/metaDecorator";

const Secondary = () => {
    return (
        <div>
            <MetaDecorator
                title={description.secondaryTitle}
                description={description.secondaryDescription}
            />
            <h1>{description.secondaryTitle}</h1>
            <div>
                <Link to='/'>To main</Link>
            </div>
            <div>
                <Link to='/third'>To third</Link>
            </div>
            <div>
                <img src={Two} alt=""/>
                <div>{description.secondaryDescription}</div>
            </div>
        </div>
    );
};

export default Secondary;