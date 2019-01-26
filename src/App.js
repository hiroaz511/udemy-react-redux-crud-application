import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: "Hiroki", age: 26},
    {name: "Bob", age: 20},
    {name: "Noname"},
  ]
  return(
  <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
  </div>
  );
}

const User = (props) => {
  return(
  <React.Fragment>
    <div>Hi, I am {props.name}, and {props.age} years old!</div>
  </React.Fragment>
  );
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
