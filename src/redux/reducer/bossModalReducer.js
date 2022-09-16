const initial_state = {
    modal_state : false
};

const bossModalReducer = (state = initial_state, action) => {
    switch(action.type){
        case 'SET_BOSS_MODAL':
            return {
                ...state, modal_state:action.payload
            };
        default: return state;
    }
}

export default bossModalReducer;