import React from "react";

import "semantic-ui-css/semantic.min.css";

import { Button, Container, Header, Message, HeaderSubheader, Divider } from "semantic-ui-react";


export default () => (
    <Message size="massive">
      <Container>
        <Header size="huge" as="h1">
          Edificio Ankarem
        <HeaderSubheader as="h2">
            Dirección: 5 1/2 Oriente, Viña del mar
        </HeaderSubheader>
        </Header>
        <p>
          Sistema que gestiona el uso de lavadoras y secadoras dentro del edificio,
          para lo cual, los usuarios se deben registrar, unirse a la cola y esperar por su turno,
          para el uso de las instalaciones.
            </p>
        <Button size="large" primary>
          Ver mapa &raquo;
            </Button>
      </Container>
    </Message>
);