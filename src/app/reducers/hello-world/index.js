import { HELLO_WORLD } from 'app/actions/hello-world';

const initialState = {};

export const helloWorld = (state, action) => ({ ...state, ...action });

export default function (state = initialState, { type, ...action }) {
  switch (type) {
    case HELLO_WORLD:
      return helloWorld(state, action);
    default:
      return state;
  }
}
