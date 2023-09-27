import React from "react";
import './DisplayInfo.scss'
class DisplayInfo extends React.Component {
  handleShowHide() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  state = {
    isShow: true
  }

  render() {
    // Destructuring array/objectFit
    const { listUsers } = this.props;

    return (
      <div className="display-info-container">
        <hr className="my-20" />
        <button
          onClick={() => {
            this.handleShowHide();
          }}
        >
          {this.state.isShow ? "Hide list users" : "Show list users"}
        </button>
        {this.state.isShow && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id}>
                  <p className={user.age > 18 ? "blue" : "red"}>
                    My name is <b>{user.name}</b>, <b>{user.age}</b> years old
                    and I'm from <b>{user.address}</b>
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
