import React from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Container,
  Form,
  Grid,
  Menu
} from "semantic-ui-react";

export default () => (
    <Grid padded className="tablet computer only">
        <Menu inverted borderless fluid fixed="top">
            <Container>
              <Menu.Item header>Project Name</Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Form>
                            <Form.Group inline>
                                <Form.Input placeholder="Email" type="text" />
                                <Form.Input placeholder="Password" type="password" />
                                <Form.Button content="Sign in" color="green" />
                            </Form.Group>
                        </Form>
                    </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
    </Grid>
);
