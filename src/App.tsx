import React, { useState } from "react";
import styled, { ThemeConsumer } from "styled-components";

interface DummyProps {
  text: string;
}

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function Dummy({ text }: DummyProps) {
  return <h1>{text}</h1>;
}

function App() {
  return (
    <Container>
      <Dummy text="hello" />
    </Container>
  );
}

export default App;
