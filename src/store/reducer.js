import { GET_TABLE_DATA_SOURCE } from '@/store/actionType.js';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_TABLE_DATA_SOURCE:
      return action.data;
    default:
      return state;
  }
};
export default reducer;
