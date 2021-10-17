import { ADD } from "./type";

const initState = {
  loading: false,
  data: {
    name: 'haiah',
    age: 23,
  },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
