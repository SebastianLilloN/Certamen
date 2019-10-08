import React from "react";

import "semantic-ui-css/semantic.min.css";
import Countdown from 'react-countdown-now';


import {
  Grid,
  Header,
  Checkbox,
  Segment,
  Table,
  Button,
  Container,
  Divider
} from "semantic-ui-react";
import Image1 from './Images/lavadora.jpg'
import Image2 from './Images/secadora.jpg'
export default () => (
  <div className="bg">
    <Container textAlign middle>
      <Grid stackable columns="two">
        <Grid.Column>
          <Header as="h1">Lavadora 1</Header>
          <img src={Image1} className="Lavadora" alt="imagen" />
          <div>
            <Countdown date={Date.now() + 7200000} />
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
          <Header as="h1">Lavadora 2</Header>
          <img src={Image1} className="Lavadora" alt="imagen" />
          <div>
            <Countdown date={Date.now() + 7200000} />
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
          <Divider></Divider>
          <Header as="h1">Secadora 1</Header>
          <img src={Image2} className="Secadora" alt="imagen" />
          <div>
            <Countdown date={Date.now() + 7200000} />
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
          <Divider></Divider>
          <Header as="h1">Secadora 2</Header>
          <img src={Image2} className="Secadora" alt="imagen" />
          <div>
            <Countdown date={Date.now() + 7200000} />
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
      </Grid>
    </Container>
  </div>
);