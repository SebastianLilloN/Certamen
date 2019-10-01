import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import Countdown from 'react-countdown-now';


import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Menu,
  Message,
  Checkbox,
  Segment,
  Table
} from "semantic-ui-react";
import Image1 from './Images/lavadora.jpg'


import "./App.css";

class App extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };
  render() {
    return (
      <div className="App">
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
        <Grid padded className="mobile only">
          <Menu borderless fluid inverted fixed="top" size="huge">
            <Menu.Item header>Project Name</Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  basic
                  inverted
                  icon
                  toggle
                  onClick={this.handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              borderless
              fluid
              inverted
              vertical
              style={this.state.dropdownMenuStyle}
            >
              <Menu.Item>
                <Form>
                  <Form.Input placeholder="Email" type="text" />
                  <Form.Input placeholder="Password" type="password" />
                  <Form.Button content="Sign in" color="green" />
                </Form>
              </Menu.Item>
            </Menu>
          </Menu>
        </Grid>
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
        <Container>
          <Grid stackable columns="four">
            <Grid.Column>
              <Header as="h1">Lavadora</Header>
              <Countdown date={Date.now() + 7200000} />
              <img src={Image1} className="Lavadora" alt="imagen" />
            <div>
             <Segment compact>
              <Checkbox toggle />
             </Segment>
           </div>
           <Header as='h3'>Lista de espera</Header>
           <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Residente</Table.HeaderCell>
        <Table.HeaderCell>Departamento</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>22</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>15</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>12</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>11</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  <Button>Agregar a la lista</Button>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">Lavadora</Header>
              <img src={Image1} className="Lavadora" alt="imagen" />
              <div>
             <Segment compact>
              <Checkbox toggle />
             </Segment>
             <Header as='h3'>Lista de espera</Header>
             <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Residente</Table.HeaderCell>
        <Table.HeaderCell>Departamento</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>22</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>15</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>12</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>11</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  <Button>Agregar a la lista</Button>
           </div>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">Secadora</Header>
              <img src={Image1} className="Lavadora" alt="imagen" />
            <div>
             <Segment compact>
              <Checkbox toggle />
             </Segment>
             <Header as='h3'>Lista de espera</Header>
             <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Residente</Table.HeaderCell>
        <Table.HeaderCell>Departamento</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>22</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>15</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>12</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>11</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  <Button>Agregar a la lista</Button>
           </div>            </Grid.Column>
            <Grid.Column>
              <Header as="h1">Secadora</Header>
              <img src={Image1} className="Lavadora" alt="imagen" />
            <div>
             <Segment compact>
              <Checkbox toggle />
             </Segment>
             <Header as='h3'>Lista de espera</Header>
             <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Residente</Table.HeaderCell>
        <Table.HeaderCell>Departamento</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>22</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>15</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>12</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>11</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  <Button>Agregar a la lista</Button>
           </div>
          </Grid.Column>
          </Grid>
          <Divider hidden />
          <Divider />
          <footer>&copy; 2017 Company, Inc.</footer>
        </Container>
      </div>
    );
  }
}

export default App;
