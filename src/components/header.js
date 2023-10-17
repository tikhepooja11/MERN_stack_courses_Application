import React from "react";
import { Card, CardBody } from "reactstrap";
import useOnlineStatus from "../utilities/useOnlineStatus";

function Header() {
  const onlineStatus = useOnlineStatus();
  return (
    <div>
      <Card className="my-2 bg-warning">
        <CardBody className="bg-warning">
          <h1 className="text-center my-2">Welcome to Courses Application</h1>
          <div
            class="online-status"
            style={{
              position: "fixed",
              top: "60px",
              right: "10%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h5>Online Status : {onlineStatus ? "✅" : "🔴"}</h5>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Header;
