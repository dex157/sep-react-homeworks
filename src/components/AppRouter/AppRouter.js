import React, {Component} from 'react'
import { Route} from 'react-router-dom'
import './AppRouter.css'
import Search from '../Search'
import ShowPage from '../ShowPage'

class AppRouter extends Component{
    render(){
        return (
            <div className="App">
                <Route path="/" component={Search} exact/>
                <Route path="/shows/:id" component={ShowPage}/>
            </div>);
    }
}

export default AppRouter;