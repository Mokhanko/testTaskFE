import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

const initialState = fromJS({
  data: [],
  templateId: 1,
  templates: [],
  dataLoading: false
});

export const startRetrieveData = createAction('START_RETRIEVE_DATA');

export const startRetrieveTemplates = createAction('START_RETRIEVE_TEMPLATES');

export const changeData = createAction('CHANGE_DATA', data => ({ data }));

export const changeTemplateId = createAction('CHANGE_TEMPLATE_ID', value => ({ value }));

export const changeTemplates = createAction('CHANGE_TEMPLATES', templates => ({ templates }));

export const changeDataLoading = createAction('CHANGE_DATA_LOADING', value => ({ value }));

const selectData = state => state.getIn(['house', 'data']);

const selectTemplate = state => state.getIn(['house', 'templates']);

export const selectTemplateId = state => state.getIn(['house', 'templateId']);

export const makeSelectData = createSelector(selectData, data => data.toJS());

export const makeSelectTemplate = createSelector(
  [selectTemplate, selectTemplateId],
  (templates, templateId) => {
    const arr = templates.toJS();
    return arr[templateId - 1];
  }
);

export default handleActions({
  [changeData]: (state, { payload }) => state.set('data', fromJS(payload.data)),
  [changeTemplates]: (state, { payload }) => state.set('templates', fromJS(payload.templates)),
  [changeTemplateId]: (state, { payload }) => state.set('templateId', payload.value),
  [changeDataLoading]: (state, { payload }) => state.set('dataLoading', payload.value)
}, initialState);
