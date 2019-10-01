import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Alert } from 'reactstrap';
import {connect} from 'react-redux';
import fetchPosts from '../components/redux/actions/userAction';


class LoginPage  extends React.Component {

handleSubmit=(e,error,values)=>{
    e.preventDefault();
    this.props.dispatch(fetchPosts(values))
}

render(){
        return (
          <div>          
          <AvForm onSubmit={this.handleSubmit}>
            <AvField name="username" label="UserName" type="text" />
            <AvField name="password" label="password" type="password" />
            <Button color="primary" >Login</Button>
          </AvForm>
          <p>Exist User</p>
          </div>
        );
      }
    }

const mapStateToProps=(state)=>{
  return state;
}

export default connect(mapStateToProps)(LoginPage);