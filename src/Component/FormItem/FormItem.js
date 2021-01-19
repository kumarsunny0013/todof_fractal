import React, { useState } from 'react';
import './FormItem.css';

import Checkout from '../Checkout/Checkout.js';
import PropertyBarContainer from '../../Container/PropertyBarContainer';

const FormItem = props => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const updateDisplayMenu = bool => {
    if (displayMenu !== bool) {
      setDisplayMenu(bool);
    }
  };

  let liClass = 'form_item__component list-group-item form-control';
  liClass = props.item.completed ? liClass + ' form_item__component-completed' : liClass;

  return (
    <li
      data-testid="form-item-listitem"
      className={liClass}
      onMouseOver={() => updateDisplayMenu(true)}
      onMouseLeave={() => updateDisplayMenu(false)}>
      <div
        className="text-truncate"
        data-testid="form-item-item-completion"
        onClick={() => props.handlecompleteTask(props.item)}>
        <div className="form_item__checkout d-inline-block">
          <Checkout isCompleted={props.item.completed} />
        </div>
        <span className="form_item__text">{props.item.value}</span>
      </div>

      {displayMenu ? <PropertyBarContainer id={props.item.id} /> : null}
    </li>
  );
};


export default FormItem;
