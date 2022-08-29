import dummy_contents from '../../json/contents.json'

const initial_state = {
    contents_data : dummy_contents
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