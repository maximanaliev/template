import React from 'react';
import {Link} from "react-router-dom";
import One from '../assets/images/one.png';
import description from '../static';
import MetaDecorator from "../component/metaDecorator";

const Main = () => {
    return (
        <div>
            <MetaDecorator
                title={description.mainTitle}
                description={description.mainDescription}
            />
            <h1>{description.mainTitle}</h1>
            <div>
                <Link to='/secondary'>To secondary</Link>
            </div>
            <div>
                <Link to='/third'>To Third</Link>
            </div>
            <div>
                <img src={One} alt=""/>
                <div>{description.mainDescription}</div>
            </div>
        </div>
    );
};

export default Main;