import React from 'react';
import { connect } from 'react-redux';
import { completeTask } from '../Actions/Actions';
import FormItem from '../Component/FormItem/FormItem';

// const FormItemContainer = props => <div {...props} />;
const FormItemContainer = props => <FormItem {...props} />;

const mapDispatchToProps = {
  handlecompleteTask: completeTask,
};

export default connect(null, mapDispatchToProps)(FormItemContainer);
