// Import External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { store } from "./state/store";
import { Provider } from 'react-redux';

// Import Components
import App from './app.jsx';
import CrumbRoute from './crumb-route.jsx';

// Define element and render method
let element = document.getElementById('app'),
	render = Root => {
		ReactDOM.render((
			<Provider store={store}>
                <BrowserRouter>
                    <CrumbRoute title="Home" path="/" component={ Root } />
                </BrowserRouter>
			</Provider>
		), element);
	}

// Initial render
render(App)

// Subsequent HMR renders
if ( module.hot ) {
	module.hot.accept('./app.jsx', () => {
		render(App)
	})
}
