import React from 'react';
import styled from 'styled-components';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';

const StyledImgContainer = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
`;

const StyledImgPrice = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
    @media screen and (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

const Image = ({ field, child, classes, childData }) => (
  <StyledImgContainer>
    <CardMedia
      className={classes.media}
      component="img"
      alt={field[0]}
      height="140"
      image={field[0]}
      objectfit="cover"
    />
    {child && child.map(f => (
      <StyledImgPrice key={f.field}>
        Цена:
        {' '}
        {childData[f.field]}
      </StyledImgPrice>
    ))}
  </StyledImgContainer>
);

export default Image;
