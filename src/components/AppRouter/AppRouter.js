import React, {Component} from 'react';
import './AppRouter.css';
import { Switch, Route } from 'react-router-dom';


import Search from '../Search';
import ShowPage from '../ShowPage';

class AppRouter extends Component{

    render() {

        return (
            <>
                <div className="App"> 
                    <Switch>
                        <Route path="/shows/:id" component={ShowPage} exect/>
                        <Route path="*" component={Search}/>
                    </Switch>
                </div>
            </>
        )
        
    }
}

export default AppRouter;