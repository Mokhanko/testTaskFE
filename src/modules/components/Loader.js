import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Progress = styled(CircularProgress)`
  flex-direction: column;
`;

const Loader = () => (
  <Wrapper>
    <Progress disableShrink />
  </Wrapper>
);

export default Loader;
