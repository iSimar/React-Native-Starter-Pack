import {LOAD, SAVE} from 'redux-storage';

export default function (state = 0, action) {
    switch(action.type){
        case LOAD:
            console.log('load');
            break;
        case SAVE: 
            console.log('save');
            break;
        case 'ON_UPDATE_COUNTER':
            return action.payload
    }
    return state;
}