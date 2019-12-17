import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

axios.interceptors.request.use(request => {
	console.log(request);
	// edit request config
	return request;
}, error => {
	console.log(error);
	return Promise.reject(error);
});

axios.interceptors.response.use(respons => {
	console.log(respons);
	return respons;
}, error => {
	console.log(error);
	return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
