import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';
// useEffect: combine componentDidUpdate and componentDidMount
// run after render

const Cockpit = (props) => {

	const toggleBtnRef = useRef(null);
	const authContext = useContext(AuthContext);

	// console.log(authContext.authenticated);

	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		// Http request...
	    // const timer = setTimeout(() => {
	    //   alert('Saved data to cloud!');
	    // }, 1000);
	    toggleBtnRef.current.click();
	    return () => {
	    	// clearTimeout(timer);
	      	console.log('[Cockpit.js] cleanup work in useEffect');
	    };
	}, []); // put something in [], e.g. [props.aaa] -> when props.aaa change, the alert will pop out


	useEffect(() => {
	    console.log('[Cockpit.js] 2nd useEffect');
	    return () => {
	      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
	    };
	});



	const assignedClasses = [];
	let btnClass = '';

	if (props.showPersons) {
		btnClass = classes.Red;
	}
	
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

	return (
		<div className={classes.Cockpit}>
			<h1>Hi, I'm a React App</h1>
	        <p className={assignedClasses.join(' ')}>This is really working!</p>
	        <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
	          Toggle Persons
	        </button>
	        <button onClick={authContext.login}>Log in</button>
		</div>
	);
};



export default React.memo(Cockpit);

// <AuthContext.Consumer>
// 	{(context) => <button onClick={context.login}>Log in</button>}
// </AuthContext.Consumer>












