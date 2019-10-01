import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import PostAdd from './posts/PostAdd';
import PostDelete from './posts/PostDelete';
import Posts from './posts/Posts';
import RegistrationPage from './RegistrationPage';
import MainNavbar from './MainNavbar';

class MainRooter extends Component {
    render() { 
        return (  
            <div>           
            <Router>  
       <Route exact path="/registration-page" Component={RegistrationPage}/>
       <Route exact path="/posts/add" Component={PostAdd}/>
       <Route exact path="/posts/update" Component={PostDelete}/>
       <Route exact path="/posts/delete" Component={PostDelete}/>
       <Route exact path="/posts" Component={Posts}/>
       </Router>
       <MainNavbar/>           
       </div>
          );
    }
}
 
export default MainRooter;