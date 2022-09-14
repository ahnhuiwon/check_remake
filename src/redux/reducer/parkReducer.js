import dummy_data  from '../../json/park.json';

var initial_state = {};
let entries_data = JSON.parse(localStorage.getItem('park_setting'));

if(entries_data === null) {
    initial_state = {
        park_data : dummy_data
    }
} else {
    initial_state = {
        park_data : entries_data
    }
}

const parkReducer = (state = initial_state, action) => {
    switch(action.type) {
        case 'SET_PARK':
            return {
                ...state, park_data: action.payload
            };
        default: return state;
    }
}

export default parkReducer;