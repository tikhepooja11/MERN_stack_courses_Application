import React from "react";
import { ListGroup } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

//  we are going to use Link/Navlink instead of anchor tag to redirect to another page to avoid page refresh

const Menus = () => {
  //  To read/ write data to store use selector hook - SO Subscring to store portion using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="mt-3">
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
          to="/my-cart"
          action
        >
          My Cart - {cartItems.length}
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
          to="/placement-facility"
          action
        >
          Placement Facility
        </NavLink>

        <NavLink
          className="list-group-item list-group-item-action"
          tag="a"
          to="/contactus"
          action
        >
          Contact Us
        </NavLink>

        <NavLink
          className="list-group-item list-group-item-action"
          tag="a"
          to="/aboutus"
          action
        >
          About
        </NavLink>
      </ListGroup>
    </div>
  );
};
export default Menus;
