import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const Checkout = props => (
  <span>
    {props.isCompleted ? (
      <FontAwesomeIcon icon={faCheckSquare} color="blue"size="2x" />
    ) : (
      <FontAwesomeIcon icon={faSquare} color="blue"size="2x" />
    )}
  </span>
);


export default Checkout;
