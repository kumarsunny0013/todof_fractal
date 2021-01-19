import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, selectEditTask } from '../Actions/Actions';
import PropertyBar from '../Component/PropertyBar/PropertyBar';


const PropertyBarContainer = props => <PropertyBar {...props} />;

const mapDispatchToProps = {
  handledeleteTask: deleteTask,
  handleSelecteditTask: selectEditTask,
};

export default connect(null, mapDispatchToProps)(PropertyBarContainer);
