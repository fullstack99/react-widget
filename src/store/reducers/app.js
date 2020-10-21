import { SET_ASSETS_URL } from '../actions/app';

const initialState = {
  assetsUrl: '/assets'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ASSETS_URL:
      return {
        ...state,
        assetsUrl: action.url
      };

    default:
      return state;
  }
};
