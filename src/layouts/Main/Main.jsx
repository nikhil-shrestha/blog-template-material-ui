import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { Header, Footer } from './components';

export default function Main(props) {
  const { children } = props;

  const sections = [
    { title: 'Case Graphs', url: '#' },
    { title: 'Death Graphs', url: '#' },
    { title: 'Countries', url: '#' },
    { title: 'Death Rate', url: '#' },
    { title: 'Incubation', url: '#' },
    { title: 'Age', url: '#' },
    { title: 'Symptoms', url: '#' },
    { title: 'News', url: '#' }
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Corona Count" sections={sections} />
        <main>{children}</main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
