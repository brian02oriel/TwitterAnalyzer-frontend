import { createContext } from 'react'
export const initialState = {
    loading: false,
    data: {},
    keywords: '',
    scrollPosition: window.pageYOffset
}

// Contexts
// will be used to pass down the dispatch method and our 
// application state via the Context Provider and consumed 
// in child components using the useContext Hook
export const stateContext = createContext(null) // Contains State
export const dispatchContext = createContext(null) // Contains app Dispatch

// Action constants
// we will import this object and use the various properties 
// in child objects when calling the dispatch method
export const actions = {
    searchTweets: 'searchTweets',
    findTweets: 'findTweets',
    isLoading: 'isLoading',
    autoScroll: 'autoScroll'
}

// This is a simple helper function that will take a type 
// (from the constants above) and a payload, which will be the 
// value which needs to be affected in state it returns 
// a simple object that will be passed to our dispatch function
export const createAction = (type, payload) => {
    return {
    type,
    payload
    };
};


export const reducer = (state, {type, payload}) =>{
    switch(type){
        case actions.searchTweets: {
            return {
                ...state,
                keywords: payload
            }
        }
        case actions.findTweets:{
            return{
                keywords: state.keywords,
                data: payload,
                loading: state.loading // Initial State
            }
        }

        case actions.isLoading:{
            return{
                ...state,
                loading: !state.loading
            }
        }

        case actions.autoScroll:{
            return{
                ...state,
                scrollPosition: payload
            }
            
        }

        default:
            return {
                ...state
            }
    }

}








