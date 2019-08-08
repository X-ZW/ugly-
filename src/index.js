import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//引入element 样式
import 'element-theme-default';

import { Provider } from 'react-redux';
import { store, dealFn } from './store';
import { HashRouter, Route } from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<Route path="/" component={dealFn(App)}></Route>
		</HashRouter>
	</Provider>
	, document.getElementById('root'));

