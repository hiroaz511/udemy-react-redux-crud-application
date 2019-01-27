import { combileReducers, combineReducers } from 'redux'
import count from './count'
import { combineLatest } from 'rxjs';

export default combineReducers({ count })