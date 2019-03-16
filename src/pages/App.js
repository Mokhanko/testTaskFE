import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose, lifecycle, setPropTypes } from 'recompose';
import {
  makeSelectData,
  makeSelectTemplate,
  startRetrieveData,
  changeTemplateId,
  startRetrieveTemplates
} from '../reducers/houseReducer'
import View from './View';

const StyledWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const App = (props) => {
  return (
    <StyledWrapper>
      <View {...props}/>
    </StyledWrapper>
    )
};

export default compose(
  connect(
    state => ({
      data: makeSelectData(state),
      templateId: state.getIn(['house', 'templateId']),
      templates: makeSelectTemplate(state),
      templatesAll: state.getIn(['house', 'templates']).toJS()
    }),
    {
      startRetrieveData,
      changeTemplateId,
      startRetrieveTemplates
    }
  ),
  lifecycle({
    componentDidMount(){
      this.props.startRetrieveData();
      this.props.startRetrieveTemplates();
    }
  }),
  setPropTypes({
    data: PropTypes.array.isRequired,
    templateId: PropTypes.number.isRequired,
    templates: PropTypes.object,
    templatesAll: PropTypes.array.isRequired,
    startRetrieveData: PropTypes.func.isRequired,
    startRetrieveTemplates: PropTypes.func.isRequired,
    changeTemplateId: PropTypes.func.isRequired
  })
)(App);
