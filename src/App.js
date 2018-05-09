import React from 'react';
import {Main} from "./js/Partials/Main";
import {Header} from "./js/Partials/Header";
import './sass/main.css';

class App extends React.Component {
  render() {
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    );
  }
}

export default App;
