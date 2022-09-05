import dummy_contents from '../../json/item.json';

var initial_state = {};
let entries_data = JSON.parse(localStorage.getItem('item_setting'));

if(entries_data === null){
    initial_state = {
        item_data : dummy_contents
    };
} else {
    initial_state = {
        item_data : entries_data
    };
}

const itemReducer = ( state = initial_state, action) => {
    switch(action.type) {
        case 'SET_ITEM':
            return {
                ...state, item_data: action.payload
            };
        default: return state;
    }
}

export default itemReducer;