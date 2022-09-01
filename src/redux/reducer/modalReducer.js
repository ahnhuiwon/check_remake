const initial_state = {
    modal_state : false
};

const modalReducer = (state = initial_state, action) => {
    switch(action.type){
        case 'SET_MODAL':
            return {
                ...state, modal_state:action.payload
            };
        default: return state;
    }
}

export default modalReducer;