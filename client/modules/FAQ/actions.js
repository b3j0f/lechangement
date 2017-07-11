export const GET_FAQS = 'GET_FAQS';
export const ADD_FAQ = 'ADD_FAQ';
export const UPDATE_FAQ = 'UPDATE_FAQ';
export const REMOVE_FAQ = 'REMOVE_FAQ';

export function getFAQs(faqs) {
    return {
        type: GET_FAQS,
        payload: faqs,
        success: true
    }
}

export function getFAQsRequest(filter) {
  return (dispatch) => {
    return callApi('faqs', 'get', filter).then(res => dispatch(getFAQs(res.faqs)));
  };
}

export function addFAQ(faq) {
    return {
        type: ADD_FAQ,
        payload: faq,
        success: true
    }
}

export function addFAQRequest(faq) {
  return (dispatch) => {
    return callApi('faqs', 'post', {
      faq: {
        author: faq.author,
        question: faq.question,
        answer: faq.answer
      },
  }).then(res => dispatch(addFAQ(res.faq)));
  };
}

export function updateFAQ(faq) {
    return {
        type: UDPATE_FAQ,
        payload: faq,
        success: true
    }
}

export function updateFAQRequest(faq) {
  return (dispatch) => {
    return callApi(`faqs/${faq.cuid}`, 'put', {
      faq: {
        message: faq.message,
        author: faq.author,
      },
  }).then(res => dispatch(updateFAQ(res.faq)));
  };
}

export function removeFAQ(cuid) {
    return {
        type: ADD_FAQ,
        payload: cuid,
        success: true
    }
}

export function deleteFAQRequest(cuid) {
  return (dispatch) => {
    return callApi(`faqs/${cuid}`, 'delete').then(res => dispatch(removeFAQ(res.payload)));
  };
}
