import React from 'react';
import './App.css';

// class App extends Component {
//   render() {
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("I am clicked");}}/>
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return(
  <div>
    <Cat />
    <Dog />
  </div>
  );
}

const Cat = () => {
  return(<div>Meow!!</div>);
}
const Dog = () => {
  return(<div>Bow!!</div>);
}

export default App;
