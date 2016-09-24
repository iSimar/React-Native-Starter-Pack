import {LOAD, SAVE} from 'redux-storage';
import { handleActions } from 'redux-actions';

const initialState = {
}

export default handleActions({
  [LOAD]:  (state, action) => {
    console.log('load - template.reducer');
    console.log(state);
    return state;
  },
  [SAVE]: (state, action) => {
    console.log('save - template.reducer');
    console.log(state);
    return state;
  },
  ['ACTION_NAME']: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
  },
}, initialState);