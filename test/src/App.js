import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {
  state = {
    persons: [
      {id: 'a', name: 'Max', age: 28}, 
      {id: 'b', name: 'Manu', age: 29}, 
      {id: 'c', name:'Frank', age: 28}
    ],
    showPersons: false
  }

  swithchNameHandler = (newName) => {
    // alert("clicked");
    // Don't: this.state.persons[0].name = "aaa";
    this.setState(
      {
        persons: [
          {name: newName, age: 2}, 
          {name: 'ccc', age: 3},
          {name: 'ddd', age: 3}
        ]
      });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
    // console.log(doesShow);
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working! {Math.random()}</p>
        <button style={style} onClick={this.toggleNameHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  };
}

// function App() {
//   return (
//     <div className="App">
//       // <h1>Hi I am a react app</h1>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
