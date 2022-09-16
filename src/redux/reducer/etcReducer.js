import etc_contents from '../../json/etc.json'

var initial_state = {};
let entries_data = JSON.parse(localStorage.getItem('etc_setting'));

if(entries_data === null) {
    initial_state = {
        etc_data : etc_contents
    }
} else {
    initial_state = {
        etc_data : entries_data
    }
}

const etcReducer = (state = initial_state, action) => {
    switch(action.type) {
        case 'SET_ETC':
            return {
                ...state, etc_data: action.payload
            };
        default: return state;
    }
}

export default etcReducer;