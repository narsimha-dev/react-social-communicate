import React, { Component } from 'react';
import {connect} from 'react-redux';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, FormGroup } from 'reactstrap';
import {postAdd, getToken} from '../redux/actions/postAction';


class PostAdd extends Component {

    handleSubmit=(e,error,values)=>{
        e.preventDefault();
      // this.props.dispatch(postAdd(values))
      this.props.dispatch(getToken(values));
       }

      render() {
        return (
          <AvForm onSubmit={this.handleSubmit}>
            <AvField name="title" label="Title" required />
            <AvField name="content" label="Content" required />
             <AvField name="description" label="Description" required />
              <FormGroup>
              <Button  color="primary" >Post</Button>&nbsp;
              <Button  color="danger" >Cancel</Button>
            </FormGroup>
          </AvForm>
        );
      }
    }

    
const mapStateToProps=(state)=>{
    return state;
  }
  
  export default connect(mapStateToProps)(PostAdd);