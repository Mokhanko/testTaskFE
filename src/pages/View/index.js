import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import Card from "@material-ui/core/Card/Card";
import Grid from '@material-ui/core/Grid';
import ComponentsRouter from './components';

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

const StyledViewText = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  padding-right: 10px;
`;

let Element;

const View = ({ changeTemplateId, templateId, templates, templatesAll, data, classes }) => (
  <Grid container style={{flexGrow: 1}} spacing={24}>
    <Grid container
          item lg={12} md={12} sm={12} xs={12}
          direction="row"
          justify="flex-start"
          alignItems="center"
    >
      <StyledViewText>View Templates</StyledViewText>
      {templatesAll.map((templ) => (
        <Radio
          checked={templateId === templ.id}
          onChange={() => changeTemplateId(templ.id)}
          name="radio"
          key={templ.id}
          color="secondary"
        />
      ))}
    </Grid>
    {data.map((dat, ind) => (
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="stretch"
          key={ind}
          item lg={4} md={6} sm={12} xs={12}>
          <Card className={classes.card}>
            {templates.template.map((item, key) => {
              Element = ComponentsRouter[item.component];
              return (
                <CardActionArea key={key}>
                 <Element
                    field={dat[item.field]}
                    children={item.children}
                    {...dat}
                    classes={classes}
                  />
                </CardActionArea>
              )
            })
            }
          </Card>
        </Grid>
      )
    )
    }
  </Grid>
);

export default withStyles(styles)(View);