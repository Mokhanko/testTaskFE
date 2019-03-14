import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import React from "react";

const ADDRESS = ({ full_address }) => <div style={{color: 'green'}}>{ full_address }</div>

const IMAGE = () => <div style={{color: 'green'}}>Image</div>

const PRICE = () => <div style={{color: 'green'}}>PRICE</div>

const AREA = () => <div style={{color: 'green'}}>AREA</div>

const initialState = fromJS({
  data: [],
  templateId: "0",
  templates: [
    {
      "id": 1,
      "template": [
        {
          "component": IMAGE,
          "field": "images"
        },
        {
          "component": ADDRESS,
          "field": "full_address"
        },
        {
          "component": PRICE,
          "field": "price"
        },
        {
          "component": AREA,
          "field": "area"
        }
      ]
    },
    {
      "id": 2,
      "template": [
        {
          "component": ADDRESS,
          "field": "full_address"
        },
        {
          "component": IMAGE,
          "field": "images"
        },
        {
          "component": PRICE,
          "field": "price"
        },
        {
          "component": AREA,
          "field": "area"
        }
      ]
    },
    {
      "id": 3,
      "template": [
        {
          "component": ADDRESS,
          "field": "full_address"
        },
        {
          "component": IMAGE,
          "field": "images",
          "children": [
            {
              "component": PRICE,
              "field": "price"
            }
          ]
        },
        {
          "component": AREA,
          "field": "area"
        }
      ]
    }
  ]
});

export const startRetrieveData = createAction('START_RETRIEVE_DATA');

export const changeData = createAction('CHANGE_DATA', data => ({ data }));

export const changeTemplateId = createAction('CHANGE_TEMPLATE_ID', value => ({ value }) );

const selectData = (state) => state.getIn(['house', 'data']);

const selectTemplate = (state) => state.getIn(['house', 'templates']);

export const selectTemplateId = (state) => state.getIn(['house', 'templateId']);

export const makeSelectData = createSelector(
  selectData,
  data => data.toJS()
);

export const makeSelectTemplate = createSelector(
  [selectTemplate, selectTemplateId],
  (templates, templateId) => {
    const arr = templates.toJS();
    return arr[templateId];
  }
);

export default handleActions({
  [changeData]: (state, { payload }) => state.set('data', fromJS(payload.data)),
  [changeTemplateId]: (state, { payload }) => state.set('templateId', payload.value)
},
  initialState
)