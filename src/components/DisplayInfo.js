import React from "react";
import "./DisplayInfo.scss";
// import Logo from "./../logo.svg";

class DisplayInfo extends React.Component {
  constructor(props) {
    console.log("call constructor: 1");
    super(props);
    this.state = {
      isShow: true,
    };
  }

  handleShowHide() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }

  componentDidMount() {
    console.log("Call me did mount");
  }

  componentDidUpdate() {
    console.log("Call me did update");
  }

  handleDeleteUser = (user) => {
    this.props.handleDeleteUser(user.id);
  };

  render() {
    // Destructuring array/objectFit
    console.log("Call me render")
    const { listUsers } = this.props;

    return (
      // Show object or array in template => JSON.stringify(object)
      /* {JSON.stringify(listUsers)} */
      <>
        <div className="display-info-container">
          {/* <div className="logo">
            <img src={Logo} className="img" />
          </div> */}
          <hr className="my-20" />
          <button
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShow ? "Hide list users" : "Show list users"}
          </button>
          {this.state.isShow && (
            <>
              {listUsers.map((user) => {
                return (
                  <div key={user.id} className="user-info">
                    <p className={user.age > 18 ? "blue" : "red"}>
                      My name is <b>{user.name}</b>, <b>{user.age}</b> years old
                      and I'm from <b>{user.address}</b>
                    </p>
                    {/* {console.log(user)} */}
                    <button onClick={() => this.handleDeleteUser(user)}>
                      Delete
                    </button>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </>
    );
  }
}

export default DisplayInfo;
