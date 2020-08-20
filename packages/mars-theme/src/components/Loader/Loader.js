import React from 'react';
import { styled } from 'frontity';
import Loader from 'react-spinners/ClipLoader';

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  & > div {
    margin-top: 24px;
    transform: scale(1.5);
  }
`;

const Loading = () => (
  <Container>
    <div>
      <Loader
        color="#282828"
        radius={0}
        margin="3px"
        width={4}
        height={24}
      />
    </div>
  </Container>
);

export default Loading;
