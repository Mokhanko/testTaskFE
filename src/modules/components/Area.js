import React from 'react';
import styled from 'styled-components';
import CardContent from '@material-ui/core/CardContent/CardContent';

const StyledTitle = styled.div`
  font-weight: bold;
  font-style: italic;
  margin-bottom: 5px;
  @media screen and (max-width: 425px) {
    font-size: 0.6rem;
  }
`;

const StyledInfo = styled.div`
  font-size: 1.1rem;
  font-weight: bold
  @media screen and (max-width: 850px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

const Area = ({ field, classes }) => Boolean(field) && (
  <CardContent className={classes.content}>
    <StyledTitle variant="h5" gutterBottom>
      Площадь
    </StyledTitle>
    <StyledInfo>
      {field}
      {' '}
      кв.м.
    </StyledInfo>
  </CardContent>
);

export default Area;
