import React, {PureComponent} from 'react';
import Person from './Person/Person';

// PureComponent: check all the props, if any of them don't change, it will not update.

class Persons extends PureComponent {

	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Persons.js] getDerivedStateFromProps');
	// 	return state;
	// }

	// componentWillReceiveProps(props) {
	// 	console.log('[Persons.js] componentWillReceiveProps', props);
	// }

	// shouldComponentUpdate(nextProps, nextState) {
	// 	// return a Boolean value that specifies whether React should continue with the rendering or not.
	// 	console.log('[Persons.js] shouldComponentUpdate');
	// 	if (
	// 		nextProps.persons !== this.props.persons
	// 	) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	getSnapshotBeforeUpdate(prevProps, prevState) {
		// you have access to the props and state before the update, 
		// meaning that even after the update, you can check what the values were before the update.
		console.log('[Persons.js] getSnapshotBeforeUpdate');
	    return { message: 'Snapshot!' };
	}

	// componentWillUpdate() {

	// }

	componentDidUpdate(prevProps, prevState, snapshot) {
		// called after the component is updated in the DOM
		console.log('[Persons.js] componentDidUpdate');
    	console.log(snapshot);
	}

	componentWillUnmount() {
		// called when the component is about to be removed from the DOM
		console.log('[Persons.js] componentWillUnmount');
	}



	render() {
		console.log('[Persons.js] rendering...');
		// console.log(this.props.isAuthenticated);

		return this.props.persons.map((person, index) => {
		    return (
		      <Person
		        click={() => this.props.clicked(index)}
		        name={person.name}
		        age={person.age}
		        key={person.id}
		        changed={event => this.props.changed(event, person.id)}
		        isAuth={this.props.isAuthenticated}
		      />
		    );
		  });
	}
}


export default Persons;







