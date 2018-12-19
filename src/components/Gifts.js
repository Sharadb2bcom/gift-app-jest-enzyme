import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
class Gifts extends Component {
  state = {
    person: "",
    present: ""
  };
  render() {
    return (
      <div className="gift">
        <Form>
          <ControlLabel className="person-label">Person</ControlLabel>
          <FormControl
            className="input-person"
            onChange={event => this.setState({ person: event.target.value })}
          />
        </Form>
        <ControlLabel className="present-label">Present</ControlLabel>
        <FormControl
          className="input-present"
          onChange={event => this.setState({ present: event.target.value })}
        />
        <Form />
        <Button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove Gift
        </Button>
      </div>
    );
  }
}

export default Gifts;
