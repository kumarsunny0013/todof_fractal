import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Form = props => {

    const [itemValue, setItemValue] = useState  ('');

    const handleChange = (e) => {
        setItemValue(e.target.value);
    }

    const handleSubmitAndResetForm = e => {
        e.preventDefault();
        props.handleaddTask(itemValue, props.bucketName);
        setItemValue('');
    };

    return (
        <div>
            <form autoComplete="on" onSubmit={handleSubmitAndResetForm}>
                <div className="form row">
                    <div className="col">
                        <input type="text"
                            className="form-control"
                            id="new-todo-item"
                            name="new-todo-item"
                            placeholder="Please add Notes"
                            aria-label="Todo item description"
                            value={itemValue}
                            onChange={handleChange}
                            autoFocus
                        />
                    </div>
                    <div className="col-auto">
                        <button
                            type="submit"
                            data-testid="form-submit"
                            className="btn btn-primary"
                            disabled={!itemValue}
                            aria-label="Add todo item">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;