import * as React from 'react';
import { Container, Header1, SubHeadline, Button } from '@cebus/react-components';

const Error = () => {
  return (
    <Container>
      <Header1 color="danger">Error</Header1>
      <SubHeadline>Oops you shouldn't be here. Here is a magical button to go back home.</SubHeadline>
      <Button as="a" size="large" href="/">
        Go back home 🏠
      </Button>
    </Container>
  );
};

export default Error;
