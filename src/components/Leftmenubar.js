import React from "react";
import { ListGroup } from "reactstrap";
import { NavLink } from "react-router-dom";
const Menus = () => {
  return (
    <div>
      <ListGroup>
        <NavLink
          className="list-group-item list-group-item-action"
          tag="a"
          to="/"
          activeclassname="active"
          action
        >
          Home
        </NavLink>

        <NavLink
          className="list-group-item list-group-item-action"
          tag="a"
          to="/add-course"
          action
        >
          Add Course
        </NavLink>

        <NavLink
          className="list-group-item list-group-item-action"
          tag="a"
          to="/view-courses"
          action
        >
          View Courses
        </NavLink>

        <NavLink
          className="list-group-item list-group-item-action"
          tag="a"
          to="/contacts"
          action
        >
          Contacts
        </NavLink>

        <NavLink
          className="list-group-item list-group-item-action"
          tag="a"
          to="/about"
          action
        >
          About
        </NavLink>
      </ListGroup>
    </div>
  );
};
export default Menus;
