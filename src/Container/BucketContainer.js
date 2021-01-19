import React from 'react';
import { connect } from 'react-redux';

import { addBucket } from '../Actions/Actions';
import BucketList from '../Component/BucketList/BucketList';

const BucketContainer=(props)=><BucketList {...props}/>

const mapStateToProps = state => ({
    bucketName: state.bucketName,
});

const mapDispatchToProps = dispatch => ({
    handleaddBucket: bucketValue => dispatch(addBucket(bucketValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BucketContainer);
