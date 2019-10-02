import React from 'react';
import {Redirect} from 'react-router';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Alert } from 'reactstrap';
import {connect} from 'react-redux';
import {gettingUserToken,registerUser, loginPage} from '../components/redux/actions/userAction';
import PostAdd from './posts/PostAdd';
import * as userAction from '../components/redux/actions/index';
 
class RegistrationPage  extends React.Component {
  
handleSubmit=(e,error,values)=>{
    e.preventDefault();
     if(this.props.userGettingToken.isLoging){
 // this.props.dispatch(gettingUserToken(values))
 this.props.dispatch(userAction.gettingUserToken(values))
 
}else{
   //this.props.dispatch(registerUser(values))
   this.props.dispatch(this.action.registerUser(values));
}
}

loginPage=(e)=>{
  //e.preventDefault();
 // this.props.dispatch(loginPage(this.props.userGettingToken.isLoging))
 this.props.dispatch(userAction.loginPage(this.props.userGettingToken.isLoging));
}
render(){
  //const {isLoging, showAlert,message,color}=this.props.userGettingToken;
        return (
          <div>
          {this.props.userGettingToken.showAlert && <Alert color={this.props.userGettingToken.color}>{this.props.userGettingToken.message}</Alert> }
          <AvForm onSubmit={this.handleSubmit}>
            <AvField name="username" label="UserName" type="text" />
            <AvField name="password" label="password" type="password" />
            <Button color="primary" >{this.props.userGettingToken.isLoging?"Login":"Register"}</Button>
          </AvForm>
          <br/>
          <p onClick={this.loginPage}>{!this.props.userGettingToken.isLoging?'Exist User':'New User'}</p>
          { this.props.userGettingToken.showAlert && <Redirect to="/posts/add" />}
          </div>
        );
      }
    }

const mapStateToProps=(state)=>{
  return state;
}

export default connect(mapStateToProps)(RegistrationPage);