import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import './App.scss'

import Header from '../Header/Header'
import ModalsContainer from '../../containers/ModalsContainer'

const App = ({ history, children }) => (
    <ConnectedRouter history={history}>
        <main className="main" id="main">
            <Header />
            { children }
            <ModalsContainer />
        </main>
    </ConnectedRouter>
);

export default App