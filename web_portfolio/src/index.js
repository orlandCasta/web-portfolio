
/*Libraries of react*/

/*These two libraries work together, react is the analog of the create element 
and dom of the appendchill */
import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Tutorials from './pages/Tutorials';
import Contact from './pages/Contact';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';


//ReactDOM.render () takes two arguments: What do we want to render and where do we want to render it.
//Whenever you write JSX it is a requirement to import React.

const container = document.getElementById('app')

//ReactDOM(__what__,__where);
ReactDOM.render(<Contact/>,container);