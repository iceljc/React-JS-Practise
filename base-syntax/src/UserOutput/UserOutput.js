import React, { Component } from 'react';
import './UserOutput.css';

class UserOutput extends Component {

	render() {
		return (
			<div className='UserOutput'>
				<p>Username: {this.props.userName}</p>
				<p>I hope this will be overwitten.</p>
			</div>
		);
	}
}

export default UserOutput