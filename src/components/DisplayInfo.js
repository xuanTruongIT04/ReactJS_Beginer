import React from 'react';

class DisplayInfo extends React.Component {
    render() {
        // Destructuring array/objectFit

        const { listUsers } = this.props;
        console.log(listUsers);
        return (
            <div>
                {
                    listUsers.map((user) => {
                        return (
                            <div key={user.id}>
                                <p>
                                    My name is <b>{user.name}</b>, <b>{user.age}</b> years old and I'm from <b>{user.address}</b>
                                </p>
                            </div>
                        );
                    })
                }

            </div>
        );
    }
}

export default DisplayInfo