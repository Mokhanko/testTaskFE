import React from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';

const StyledViewContainer = styled.div`
  width: 50%;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
  display:flex;
  flex-direction: column;
  border: 1px solid red;
`;

const StyledElementContainer = styled.div`
  width: 80%;
  min-height: fit-content;
  margin: 0 auto;
  margin-top: 50px;
  display:flex;
  flex-direction: column;
  border: 1px solid black;
`;

function RouteWithSubRoutes({Component, ...dat}) {
  return (
    <Component {...dat}/>
  );
}

const View = ({ changeTemplateId, templateId, templates, data }) => (
  <StyledViewContainer>
    <div>
      <Radio
        checked={templateId === "0"}
        onChange={e => changeTemplateId(e.target.value)}
        value="0"
        name="radio-button-demo"
        aria-label="A"
      />
      <Radio
        checked={templateId === "1"}
        onChange={e => changeTemplateId(e.target.value)}
        value="1"
        name="radio-button-demo"
        aria-label="B"
      />
      <Radio
        checked={templateId === "2"}
        onChange={e => changeTemplateId(e.target.value)}
        value="2"
        name="radio-button-demo"
        aria-label="C"
      />
    </div>
    {data.map(dat => (<StyledElementContainer> {templates.template.map((item, key) => (
        <RouteWithSubRoutes Component={item.component} {...dat} key={key}/>
        ))}</StyledElementContainer>)


      )}
  </StyledViewContainer>
);

export default View;