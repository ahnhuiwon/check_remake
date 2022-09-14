import dummy_data  from '../../json/union.json';

var initial_state = {};
let entries_data = JSON.parse(localStorage.getItem('union_setting'));

if(entries_data === null) {
    initial_state = {
        union_data : dummy_data
    }
} else {
    initial_state = {
        union_data : entries_data
    }
}

const unionReducer = (state = initial_state, action) => {
    switch(action.type) {
        case 'SET_UNION':
            return {
                ...state, union_data: action.payload
            };
        default: return state;
    }
}

export default unionReducer;