// Import Actions
import {
    IS_FETCHING,
} from './actions';

// Initial State
const initialState = {
    isFetching: false,
    solutions: [],
    solutionsById: {},
    reasons: [],
    voteCount: 0,
    userCount: 0,
    faqs: [],
    faqsById: {},
    resourceTypes: [],
    themes: [],
    user: undefined,
    notificationsById: {},
    notifications: []
};

export default function isFetching(state = initialState, action) {
    switch (action.type) {
        case IS_FETCHING:
        action.payload
        default:
        return state;
    }
};
