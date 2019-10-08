import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Grid,
  Form,
  Menu,
  Button,
  Icon
} from "semantic-ui-react";

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
  render(){
    return(
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
              onClick={this.handleToggleDropdownMenu}>
              <Icon name="content" />
            </Button>
          </Menu.Item>
        </Menu.Menu>
        <Menu
          borderless
          fluid
          inverted
          vertical
          style={this.state.dropdownMenuStyle}>
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
    )
  }
    
}
  export default App;