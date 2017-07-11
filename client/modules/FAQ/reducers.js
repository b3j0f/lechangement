import GET_FAQS, ADD_FAQ, UPDATE_FAQ, REMOVE_FAQ from './actions';

import { combinereducers } from 'redux';

function faqsById(state, action) {
    switch(action.type) {
        case GET_FAQS:
        const faqs = {};
        action.payload.forEach((faq) => { faqs[faq.cuid] = faq });
        return {
            ...faqs
        };
        case ADD_FAQ:
        return {
            ...state,
            action.payload.cuid: action.payload
        );
        case UPDATE_FAQ:
        const result = Object.assign(
            {}, ...state
        );
        result[action.payload.cuid] = action.payload;
        return result;
        case REMOVE_FAQ:
        const result = Object.assign(
            {}, ...state
        );
        delete result[action.payload.cuid];
        return result;
        default:
        return state;
    }
}

function faqs(state, action) {
    switch (action.type) {
        case GET_FAQS:
            return [...action.payload];
            break;
        case ADD_FAQ:
            return [...state, action.payload];
            break;
        case REMOVE_FAQ:
        return state.filter(
            (faq => action.payload !== faq.cuid)
        );
        default:
        return state;
    }
}

export default reducer = combinereducers({faqs, faqsById});
