import React from 'react';

import { loadLists } from '../../services/api';

import List from '../List';

import { Container } from './styles';

const lists = loadLists();

export default function Board() {
  return (
    <Container>
      {lists.map(list => <List keuy={list.title} data={list} />)}
    </Container>
  );
}