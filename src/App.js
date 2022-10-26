import React from 'react';
import Pages from './pages/Pages';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Container>
        <Pages />
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 8rem;
  display: flex;
`;

export default App;
