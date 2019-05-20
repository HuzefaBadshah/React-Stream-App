import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
    console.log('FETCH_STREAM before: ', state);
    const y = { ...state, [action.payload.id]: action.payload };
    console.log('FETCH_STREAM after: ', y);
      return y;

    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      return _.omit(state, action.payload);

    case FETCH_STREAMS:
       const x = { ...state, ..._.mapKeys(action.payload, "id") };
      console.log('FETCH_STREAMS: ', x);
      return x;
    default:
      return state;
  }
};
