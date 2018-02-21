import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const mapStateToProps = state => {
  return { users: state.users };
};


const ConnectedList = props => (
  <ul className="list-group list-group-flush">
  <p>Users</p>
    {props.users.map(user => (
      <ListItem
        className="list-group-item"
        key={user.id} user={user}
      />

    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

ConnectedList.propTypes = {
  users: PropTypes.array.isRequired
};

export default List;
