import React from 'react';
import CardContent from '@material-ui/core/CardContent/CardContent';
import styled from 'styled-components';

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

const Price = ({ field, classes }) => (
  <CardContent className={classes.content}>
    <StyledTitle variant="h5" gutterBottom>
      Цена
    </StyledTitle>
    <StyledInfo>
      {field}
      {' '}
      грн.
    </StyledInfo>
  </CardContent>
);

export default Price;
