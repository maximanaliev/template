import React from 'react';
import {Link} from "react-router-dom";
import Three from "../assets/images/three.jpeg";
import description from '../static';
import MetaDecorator from "../component/metaDecorator";

const Third = () => {
    return (
        <div>
            <MetaDecorator
                title={description.thirdTitle}
                description={description.thirdDescription}
            />
            <h1>{description.thirdTitle}</h1>
            <div>
                <Link to='/'>To main</Link>
            </div>
            <div>
                <Link to='/secondary'>To secondary</Link>
            </div>
            <div>
                <img src={Three} alt=""/>
                <div>{description.thirdDescription}</div>
            </div>
        </div>
    );
};

export default Third;