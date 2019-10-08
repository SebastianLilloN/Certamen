import React from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Container,
  Header,
  Grid,
  List,
  Divider,
  Segment
} from "semantic-ui-react";
export default () => (
<Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Edificio ANKAREM' fluid size="large" />
            <h4>
              Siguenos en nuestras redes sociales.
            </h4>
          </Grid.Column>

          <Grid.Column width={3}>
            <Header inverted as='h4' content='Facebook' color="purple"/>
            <List link inverted>
              <List.Item as='a'>facebook.com/ankarem</List.Item>

            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Instagram' color="red" />
            <List link inverted>
              <List.Item as='a'>instagram.com/ankarem</List.Item>

            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Twitter' color="blue" />
            <List link inverted>
              <List.Item as='a'>@ankarem</List.Item>

            </List>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <footer>&copy; 2019 DevLords21, Inc.</footer>
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
);