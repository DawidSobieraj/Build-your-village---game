import React from 'react';
import {Main} from "./js/Partials/Main";
import {Header} from "./js/Partials/Header";
import './sass/main.css';
import {Footer} from "./js/Partials/Footer";

class App extends React.Component {
  render() {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
  }
}

export default App;
