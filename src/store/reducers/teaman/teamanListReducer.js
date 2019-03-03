import { ADD_TEAMAN } from '../../actions/types';
import { clone } from '../clone';
const state = {
    teamanList: []
}

function teamanList(mState = { ...state }, action) {
    switch (action.type) {
        case ADD_TEAMAN:
            return clone(mState);
        default:
            return clone(mState);
    }
}
export default teamanList;