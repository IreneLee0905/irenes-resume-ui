import React, {Component} from 'react';
import './styles/app.css';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <h1>Hello</h1>

      </div>
    )
  }
}

export default App;