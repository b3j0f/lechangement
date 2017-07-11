// Export Constants
export const IS_FETCHING = 'IS_FETCHING';

// Export Actions
export function isFetching(fetching) {
    return {
        type: IS_FETCHING,
        payload: fetching,
        success: true
    }
};
