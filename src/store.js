import { createStore } from 'redux';

//! Actions
const feelingFeedback = 'SET_FEELING'
const understandingFeedback = 'SET_UNDERSTANDING'

//! Action Creator
export const setFeelingFeedback = (selectedValue) => ({
    type: feelingFeedback,
    payload: selectedValue
})

export const setUnderstandingFeedback = (selectedValue) => ({
    type: understandingFeedback,
    payload: selectedValue
})

//! Initial State
const initialState = {
    feeling: '',
    understanding: ''
}


//! Reducer
const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case feelingFeedback:
            return{...state, feeling: action.payload}
        case understandingFeedback:
            return{...state, feeling: action.payload}
            default:
                return state;
    }
}

//! Redux Store
const store = createStore(feedbackReducer);

export default store;

