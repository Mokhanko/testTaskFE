import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose, lifecycle, setPropTypes } from 'recompose';
import { startRetrieveData, changeTemplateId } from '../reducers/houseReducer';
import { makeSelectData, selectTemplateId, makeSelectTemplate } from '../reducers/houseReducer'
import View from './View';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const App = ({ templates, templateId, data, changeTemplateId }) => {
  console.log('dat', data);
  return (
    <StyledWrapper>
      <View templateId={templateId} changeTemplateId={changeTemplateId} templates={templates} data={data}/>
    </StyledWrapper>
    )
};

export default compose(
  connect(
    state => ({
      data: makeSelectData(state),
      templateId: state.getIn(['house', 'templateId']),
      templates: makeSelectTemplate(state)
    }),
    {
      startRetrieveData,
      changeTemplateId
    }
  ),
  lifecycle({
    componentDidMount(){
      this.props.startRetrieveData();
    }
  }),
  setPropTypes({
    data: PropTypes.array.isRequired,
    templateId: PropTypes.number.isRequired,
    templates: PropTypes.array.isRequired,
    startRetrieveData: PropTypes.func.isRequired,
    changeTemplateId: PropTypes.func.isRequired
  })
)(App);
