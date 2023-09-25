import React from "react";
import UserInfo from "./UserInfo"
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  // JSX
  render() {
    return (
      <div>
        <UserInfo />
        <DisplayInfo name="An" age={18} address={"Thái nguyên"} />
        <DisplayInfo name="Dũng" age={20} address={"Thái nguyên"} />
        <DisplayInfo name="Trường" age={21} address={"Thái nguyên"} />
        <DisplayInfo name="Giang" age={21} address={"Nam Định"} />
      </div>
    );
  }
}

export default MyComponent;
