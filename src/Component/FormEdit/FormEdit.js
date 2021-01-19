import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import './FormEdit.css';

const FormEdit = props => {
  const [itemValue, setItemValue] = useState(props.item.value);

  const handleItemChange = e=> setItemValue(e.target.value);

  const handleEditAndResetForm = e => {
    e.preventDefault();

    props.handleeditTask({
      ...props.item,
      value: itemValue,
    });

    setItemValue('');
  };

  return (
    <li className="form_edit__component list-group-item">
      <form method="POST" onSubmit={handleEditAndResetForm}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="input-edit-todo-item"
              name="edit-todo-item"
              value={itemValue}
              onChange={handleItemChange}
              autoFocus
            />
          </div>

          <div className="col-auto">
            <button
              data-testid="form-edit-submit-button"
              type="submit"
              id="submit-edit-todo-item"
              className="btn btn-primary form_edit__button--first"
              disabled={!itemValue}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
              data-testid="form-edit-cancel-edit-button"
              id="cancel-edit-todo-item"
              type="button"
              className="btn btn-danger"
              onClick={props.handleCanceleditTask}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      </form>
    </li>
  );
};


export default FormEdit;
