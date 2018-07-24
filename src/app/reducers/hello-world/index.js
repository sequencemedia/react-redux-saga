import {
  HELLO_WORLD_SUCCEEDED,
  HELLO_WORLD_FAILED
} from 'app/actions/hello-world';

const initialState = {};

export const helloWorld = (state, { message }) => ({ ...state, message });

export default function (state = initialState, { type, ...action }) {
  switch (type) {
    case HELLO_WORLD_SUCCEEDED:
      return helloWorld(state, action);
    case HELLO_WORLD_FAILED:
      return helloWorld(state, action);
    default:
      return state;
  }
}
