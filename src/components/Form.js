import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import uuidv1 from "uuid";
import { addUser } from "../actions/index";

// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: user => dispatch(addUser(user))
//   };
// };

const mapDispatchToProps = dispatch => bindActionCreators({ addUser: addUser }, dispatch);


class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      userName: ""
    };
  }

  handleChange = event => {
    this.setState({ userName: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { userName } = this.state;
    const id = uuidv1();
    this.props.addUser({ userName, id });
    this.setState({ userName: "" });
  }

  render() {
    const { userName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={userName}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

ConnectedForm.propTypes = {
  addUser: PropTypes.func.isRequired
};

export default Form;
