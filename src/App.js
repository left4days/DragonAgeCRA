import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import routes from './routes';
import './App.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {routes.map(route => {
                        const { path, exact, component } = route;
                        return <Route key={path} path={path} exact={exact} component={component} />;
                    })}
                </div>
            </Router>
        );
    }
}

export default App;
