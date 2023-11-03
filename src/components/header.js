import React, { useContext } from "react";
import { Card, CardBody } from "reactstrap";
import UserContextData from "../utilities/UserContextData";
import useOnlineStatus from "../utilities/useOnlineStatus";

function Header() {
  const { loggedInUserName } = useContext(UserContextData);
  const onlineStatus = useOnlineStatus();
  console.log(loggedInUserName);
  return (
    <div>
      <Card className="my-2">
        <CardBody className="bg-yellow-500 bg-opacity-100 shadow-xl">
          <h1 className="text-center my-2">Welcome to Courses Application</h1>
          <div className="top-14 text-right">
            <h5>Online Status : {onlineStatus ? "✅" : "🔴"}</h5>
          </div>
          <h6>LoggedIn User : {loggedInUserName}</h6>
        </CardBody>
      </Card>
    </div>
  );
}

export default Header;
