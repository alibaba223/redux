import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { deleteUser } from "../actions/index";
import { updateUser } from "../actions/index";

const mapDispatchToProps = dispatch => bindActionCreators({ deleteUser: deleteUser, updateUser: updateUser }, dispatch);

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      editReason: this.props.user.userName,
    }
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  };

  onInputChange = event => {
    this.setState({
      editReason: event.target.value,
    })
  }

  handleUpdateUser = () => {
    let updated = {
      userName: this.state.editReason,
      id: this.props.user.id
    }
    console.log(this.props.user);
    console.log(updated);
    this.props.updateUser(updated)

    this.toggleEdit();
  }

  handleDeleteUser = () => {
    this.props.deleteUser(this.props.user.id)
  }

  render() {
    let { isEditing } = this.state
    let name = this.state.isEditing ? <input type='text' onChange={this.onInputChange} value={this.state.editReason} /> : <p>{this.props.user.userName}< /p>
    let update = this.state.isEditing ? <button onClick={this.handleUpdateUser}>Update</button> : <button onClick={this.toggleEdit}>Edit</button>

    return (
      <div>
        {name}
        <button onClick={this.handleDeleteUser}>Delete</button>
        {update}
      </div>
    )
  }
}

const User = connect(null, mapDispatchToProps)(ListItem);

ListItem.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired
};

export default User
