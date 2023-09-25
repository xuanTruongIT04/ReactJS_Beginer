import React from 'react';

class DisplayInfo extends React.Component {
    render() {
        // Destructuring array/objectFit

        const { name, age } = this.props;
        return (
            <div>
                <p>
                    My name is <b>{name}</b>, <b>{age}</b> years old and I'm from <b>{this.props.address}</b>
                </p>
            </div>
        );
    }
}

export default DisplayInfo