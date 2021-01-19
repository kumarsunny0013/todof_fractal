import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../Actions/Actions';
import Form from '../Component/Form/Form';

// const FormContainer = props => <div {...props} />;
const FormContainer = props => <Form {...props} />;

const mapDispatchToProps = dispatch => ({
  handleaddTask: (itemValue, bucketName) => dispatch(addTask(itemValue, bucketName)),
});

export default connect(null, mapDispatchToProps)(FormContainer);
