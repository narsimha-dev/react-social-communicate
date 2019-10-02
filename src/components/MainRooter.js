import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import PostAdd from './posts/PostAdd';
import PostDelete from './posts/PostDelete';
import Posts from './posts/Posts';
import RegistrationPage from './RegistrationPage';
import MainNavbar from './MainNavbar';
import { postAdd } from './redux/actions';

class MainRooter extends Component {
    render() { 
        return (  
            <div>           
           <Switch>
           <Route exact path="/" component={RegistrationPage}/>     
          <Route exact path="/signup" component={RegistrationPage}/>
          <Route exact path="/posts/add" component={postAdd}/>
        </Switch>           
       </div>
          );
    }
}
 
export default MainRooter;