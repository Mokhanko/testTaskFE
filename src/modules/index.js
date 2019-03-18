import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  setPropTypes,
  branch,
  renderComponent
} from 'recompose';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import Radio from '@material-ui/core/Radio/Radio';
import Card from '@material-ui/core/Card/Card';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import ComponentsRouter from './components';
import {
  makeSelectData,
  makeSelectTemplate,
  startRetrieveData,
  changeTemplateId,
  startRetrieveTemplates
} from './reducer';
import Loader from './components/Loader';

const StyledWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const StyledViewText = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  padding-right: 10px;
`;

const styles = {
  card: {
    width: '100%',
    marginBottom: 50,
    padding: 10
  },
  media: {
    objectFit: 'cover',
    marginBottom: 10,
    width: '100%',
    height: 400
  },
  content: {
    maxWidth: '100%',
    height: 50
  }
};

const Index = ({
  changeTemplateId, templateId, templates, templatesAll, data, classes
}) => (
  <StyledWrapper>
    <Grid container style={{ flexGrow: 1 }} spacing={24}>
      <Grid
        container
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <StyledViewText>View Templates</StyledViewText>
        {templatesAll.map(templ => (
          <Radio
            checked={templateId === templ.id}
            onChange={() => changeTemplateId(templ.id)}
            name="radio"
            key={templ.id}
            color="secondary"
          />
        ))}
      </Grid>
      {data.map(dat => (
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="stretch"
          key={dat.id}
          item
          lg={4}
          md={6}
          sm={12}
          xs={12}
        >
          <Card className={classes.card}>
            {templates.template.map((item) => {
              const Element = ComponentsRouter[item.component];
              return (
                <CardActionArea key={item.component}>
                  <Element
                    field={dat[item.field]}
                    child={item.children}
                    childData={dat}
                    classes={classes}
                  />
                </CardActionArea>
              );
            })}
          </Card>
        </Grid>
      ))}
    </Grid>
  </StyledWrapper>
);

export default compose(
  connect(
    state => ({
      data: makeSelectData(state),
      templateId: state.getIn(['house', 'templateId']),
      templates: makeSelectTemplate(state),
      templatesAll: state.getIn(['house', 'templates']).toJS(),
      dataLoading: state.getIn(['house', 'dataLoading'])
    }),
    {
      startRetrieveData,
      changeTemplateId,
      startRetrieveTemplates
    }
  ),
  lifecycle({
    componentDidMount() {
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
    changeTemplateId: PropTypes.func.isRequired,
    dataLoading: PropTypes.bool.isRequired
  }),
  withStyles(styles),
  branch(
    props => props.dataLoading,
    renderComponent(Loader)
  )
)(Index);
