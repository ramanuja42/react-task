import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
function DashBoard(props) {
  const fetchUser = props.user;
  console.log(fetchUser);
  const userList = fetchUser.user.map((list) => {
    return (
      <ul key={list.id}>
        <li>{list.name}</li>
        <li>{list.age}</li>
        <li>{list.gender}</li>
        <li>{list.email}</li>
        <li>{list.phoneNo}</li>
      </ul>
    );
  });
  if (!props.userLogIn) return <Redirect exact to="/" />
  return <div>{userList}</div>;
}
const mapStateToPros = (state) => {
  console.log(state);

  return {
    user: state,
    userLogIn: state.isLoggedIn
  };
};
export default connect(mapStateToPros)(DashBoard);
