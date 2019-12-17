import React, { Component } from 'react';
import './UserInput.css';

class UserInput extends Component {
	
	render() {
		const style={
			border: '2px solid red'
		};

		return (
			<div id='UserInput'>
				<input 
				type='text'
				style={style}
				onChange={this.props.changed}
				value={this.props.currentName}/>
			</div>
		);
	}
}

export default UserInput