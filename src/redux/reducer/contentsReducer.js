import dummy_contents from '../../json/contents.json'

var initial_state = {};
let entries_data = JSON.parse(localStorage.getItem('user_setting'));

if(entries_data === null) {
    initial_state = {
        contents_data : dummy_contents
    }
} else {
    initial_state = {
        contents_data : entries_data
    }
}

const contentsReducer = (state = initial_state, action) => {
    switch(action.type) {
        case 'SET_CONTENTS':
            return {
                ...state, contents_data: action.payload
            };
        default: return state;
    }
}

export default contentsReducer;