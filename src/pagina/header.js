import React from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Header,
  Message
} from "semantic-ui-react";
export default () => (
 <Message size="massive">
        <Container>
            <Header size="huge" as="h1">
              Hello, world!
            </Header>
            <p>
              This is a template for a simple marketing or informational
              website. It includes a large callout called a jumbotron and three
              supporting pieces of content. Use it as a starting point to create
              something more unique.
            </p>
            <Button size="large" primary>
              Learn more &raquo;
            </Button>
        </Container>
</Message>
);