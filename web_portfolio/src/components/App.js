import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Tutorials from '../pages/Tutorials';
import Contact from '../pages/Contact';
import Profile from '../pages/Profile';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/Profile" component={Profile}/>
            <Route exact path="/Skills" component={Skills}/>
            <Route exact path="/Projects" component={Projects}/>
            <Route exact path="/Tutorials" component={Tutorials}/>
            <Route exact path="/Contact" component={Contact}/>
        </BrowserRouter>
    );
}

export default App;