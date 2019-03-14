import React from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const StyledViewContainer = styled.div`
  width: 50%;
  height: 40%;
  margin: 0 auto;
  margin-top: 50px;
  display:flex;
  border: 1px solid red;
`;

const ADDRESS = ({full_address}) => <div style={{color: 'green'}}>{full_address}</div>;

function RouteWithSubRoutes({Component}) {
  console.log('comp', Component);
  return (
    <Component />
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
      {data.data.map(dat => (<div>{dat.full_adress}</div>)
        // templates.template.map((item, key) => (
        //   <RouteWithSubRoutes Component={item.component} {...dat} key={key}/>
        // ))
      )}
  </StyledViewContainer>
);

export default View;