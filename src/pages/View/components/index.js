import React from "react";
import styled from 'styled-components';
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";

const StyledTitle = styled.div`
  font-weight: bold;
  font-style: italic;
`;

const StyledInfo = styled.div`
  font-size: 1.1rem;
  font-weight: bold
  @media screen and (max-width: 850px) {
    font-size: 0.8rem;
  }
`;

const StyledImgContainer = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
`;

const ComponentsRouter = ({ Component, field, children = false, childData = false, classes }) => (
  <Component field={field} childData={childData} classes={classes}>
    {children && children.map((Dat, key) => <Dat.component field={childData[Dat.field]} key={key}/>)}
  </Component>
);

const ADDRESS = ({ field, classes }) => (
  <CardContent className={classes.content}>
    <StyledTitle>
      Адрес
    </StyledTitle>
    <StyledInfo>
      {field}
    </StyledInfo>
  </CardContent>
);

const PRICE = ({ field, classes }) => (
  <CardContent className={classes.content}>
    <StyledTitle variant="h5" gutterBottom>
      Цена
    </StyledTitle>
    <StyledInfo>
      {field} грн.
    </StyledInfo>
  </CardContent>
);

const AREA = ({ field, classes }) => Boolean(field) && (
  <CardContent className={classes.content}>
    <StyledTitle variant="h5" gutterBottom>
      Площадь
    </StyledTitle>
    <StyledInfo>
      {field} кв.м.
    </StyledInfo>
  </CardContent>
);

const StyledImgPrice = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
`;

const IMAGE = ({ field, children, classes }) => (
  <StyledImgContainer>
      <CardMedia
      className={classes.media}
      component="img"
      alt={field[0]}
      height="140"
      image={field[0]}
      objectfit='cover'
      />
    {children && children.map((f, ind) => {
          return (
            <StyledImgPrice key={ind}>
              Цена: {f.props.field}
            </StyledImgPrice>
          )
        })
    }
  </StyledImgContainer>
);


export { ADDRESS, PRICE, AREA, IMAGE, ComponentsRouter }
