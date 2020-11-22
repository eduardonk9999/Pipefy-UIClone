import React from 'react';

import { Container, Label } from './styles';

export default function Card({ data }) {
  return (
    <Container>
      <header>
        {data.labels.map(label =>  <Label color={label} /> )}
       
      </header>
      <p>{data.content}</p>
      <img src="https://avatars2.githubusercontent.com/u/18013936?s=460&u=5a39ab5d8335e38836f55a65aca512eb296a86e5&v=4" alt="Avatar"/>
    </Container>
  );
}