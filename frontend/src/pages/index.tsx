import React from 'react';
import { PageProps } from 'gatsby';
import '../css/app.css'

import Title from '@/components/Title';
import { List, ListItem } from '@material-ui/core';

const Home: React.FC<PageProps> = () => (
  <main>
    <Title title="Home"/>
    <a href="/productlist">Product List</a>
  </main>
);

export default Home;
