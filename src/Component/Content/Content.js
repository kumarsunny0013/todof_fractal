import React from 'react';

import './Content.css';
import FormEditContainer from '../../Container/FormEditContainer';
import FormItemContainer from '../../Container/FormItemContainer';
import FormContainer from '../../Container/FormContainer';

const Content = props => {
    return (
        <div className='container main__content'>
            <div className='row row__head'>
                <h5 className="header__span text-center">{props.value}</h5>
                <div className="d-inline-block form__content">
                    <FormContainer bucketName={props.value} />
                </div>
            </div>
            {props.items.length ? (
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl content__todos">
            <ul className="list-group content__todos__ul">
              <div>
                {props.items.map((item, index) => (
                  <div key={index} className="content__todos__li">
                    {props.editingItem && props.editingItem.id === item.id && props.value === item.bucketName ? (
                      <FormEditContainer item={item} />
                    ) : (
                        <div>{props.value === item.bucketName ? <FormItemContainer item={item} /> : null}</div>
                      )}
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </div>
      ) : null}
        </div>
    )
}

export default Content;