import React from "react";
import "./DisplayInfo.scss";
// import Logo from "./../logo.svg";

// class DisplayInfo extends React.Component {

//   render() {
//     // Destructuring array/objectFit
//     console.log("Call me render")
//     const { listUsers } = this.props;

//     return (
//       // Show object or array in template => JSON.stringify(object)
//       /* {JSON.stringify(listUsers)} */
//       <>
//         <div className="display-info-container">
//           {true && (
//             <>
//               {listUsers.map((user) => {
//                 return (
//                   <div key={user.id} className="user-info">
//                     <hr />
//                     <p className={user.age > 18 ? "blue" : "red"}>
//                       My name is <b>{user.name}</b>, <b>{user.age}</b> years old
//                       and I'm from <b>{user.address}</b>
//                     </p>
//                   </div>
//                 );
//               })}
//             </>
//           )}
//         </div>
//       </>
//     );
//   }
// }


const DisplayInfo = (props) => {
  const { listUsers } = props;
  // Destructuring array/objectFit
  console.log("Call me render");

  return (
    // Show object or array in template => JSON.stringify(object)
    /* {JSON.stringify(listUsers)} */
    <>
      <div className="display-info-container">
        {true && (
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className="user-info">
                  <hr />
                  <p className={user.age > 18 ? "blue" : "red"}>
                    My name is <b>{user.name}</b>, <b>{user.age}</b> years old
                    and I'm from <b>{user.address}</b>
                  </p>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
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
};

export default DisplayInfo;
