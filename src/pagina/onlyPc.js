import React from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Container,
  Button,
  Grid,
  Menu
} from "semantic-ui-react";

import Image1 from './Images/logo.png'


export default () => (

  <Grid padded className="tablet computer only">
    <Menu inverted borderless fluid fixed="top">
      <Container>
        <Menu.Item header>
          <img src={Image1} className="Logo" alt="imagen" />
          Aincrad</Menu.Item>
        <Menu.Item as='a' active>
          Home
                </Menu.Item>
        <Menu.Item as='a'>Work</Menu.Item>
        <Menu.Item position='right'>
          <Button inverted as='a'>
            Log in
                  </Button>
          <Button inverted as='a'style={{ marginLeft: '0.5em' }}>
            Sign Up
                  </Button>
        </Menu.Item>
      </Container>
    </Menu>
  </Grid>
);
