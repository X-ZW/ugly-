import { createStore, applyMiddleware } from 'redux';

//引入react-redux
import { connect } from 'react-redux';
//异步action
import reduxThunk from 'redux-thunk';
//引入reducer

import allReducers from '../reducer';

//创建store
export let store = applyMiddleware(reduxThunk)(createStore)(allReducers);


//拓展方法
let mapStateToProps = state => ({ state });
let mapDispatchToProps = dispatch => ({ dispatch });

export const dealFn = connect(mapStateToProps, mapDispatchToProps);