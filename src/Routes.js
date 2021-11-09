import React from 'react';
import {Route, Switch} from "react-router-dom";
import Main from "./container/Main";
import Secondary from "./container/Secondary";
import Third from "./container/Third";

const Routes = () => {

    return (
        <>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/secondary' exact component={Secondary}/>
                <Route path='/third' exact component={Third}/>
                <Route render={() => <h1>Not found</h1>}/>
            </Switch>
        </>
    );
};

export default Routes;