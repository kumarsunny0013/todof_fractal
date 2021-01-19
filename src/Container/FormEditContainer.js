import React from 'react';
import { connect } from 'react-redux';
import { cancelEditTask, editTask } from '../Actions/Actions';
import FormEdit from '../Component/FormEdit/FormEdit';

// const FormEditContainer = props => <div {...props} />;
const FormEditContainer = props => <FormEdit {...props} />;

const mapDispatchToProps = {
  handleCanceleditTask: cancelEditTask,
  handleeditTask: editTask,
};

export default connect(null, mapDispatchToProps)(FormEditContainer);
