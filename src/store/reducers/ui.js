import { SET_VIEW } from '../actions/ui';

const initialState = {
  view: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEW:
      return {
        ...state,
        view: action.view
      };

    default:
      return state;
  }
};
