import boss_contents from '../../json/boss.json'

var initial_state = {};
let entries_data = JSON.parse(localStorage.getItem('boss_setting'));

if(entries_data === null) {
    initial_state = {
        boss_data : boss_contents
    }
} else {
    initial_state = {
        boss_data : entries_data
    }
}

const bossReducer = (state = initial_state, action) => {
    switch(action.type) {
        case 'SET_BOSS':
            return {
                ...state, boss_data: action.payload
            };
        default: return state;
    }
}

export default bossReducer;