import React from "react";
import styled from 'styled-components';
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";

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

// const ComponentsRouter = ({ Component, field, children = false, childData = false, classes }) => (
//   <Component field={field} childData={childData} classes={classes}>
//     {children && children.map((Dat, key) => <Dat.component field={childData[Dat.field]} key={key}/>)}
//   </Component>
// );

const Address = ({ field, classes }) => (
  <CardContent className={classes.content}>
    <StyledTitle>
      Адрес
    </StyledTitle>
    <StyledInfo>
      {field}
    </StyledInfo>
  </CardContent>
);

const Price = ({ field, classes }) => (
  <CardContent className={classes.content}>
    <StyledTitle variant="h5" gutterBottom>
      Цена
    </StyledTitle>
    <StyledInfo>
      {field} грн.
    </StyledInfo>
  </CardContent>
);

const Area = ({ field, classes }) => Boolean(field) && (
  <CardContent className={classes.content}>
    <StyledTitle variant="h5" gutterBottom>
      Площадь
    </StyledTitle>
    <StyledInfo>
      {field} кв.м.
    </StyledInfo>
  </CardContent>
);

const Image = ({ field, children, classes, ...dat }) => {
  const childData = dat;
  return(
    <StyledImgContainer>
      <CardMedia
        className={classes.media}
        component="img"
        alt={field[0]}
        height="140"
        image={field[0]}
        objectfit='cover'
      />
      {children && children.map((f, ind) => (
          <StyledImgPrice key={ind}>
            Цена: {childData[f.field]}
          </StyledImgPrice>
          )
        )
      }
    </StyledImgContainer>
    )
};

const ComponentsRouter = {
  IMAGE: Image,
  ADDRESS: Address,
  PRICE: Price,
  AREA: Area
};

export default ComponentsRouter;
