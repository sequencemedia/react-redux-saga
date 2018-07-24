/* eslint import/prefer-default-export: "off" */

/*
 *  Action type constants
 */
export const HELLO_WORLD_REQUESTED = 'HELLO_WORLD_REQUESTED';
export const HELLO_WORLD_SUCCEEDED = 'HELLO_WORLD_SUCCEEDED';
export const HELLO_WORLD_FAILED = 'HELLO_WORLD_FAILED';

/*
 *  Action creators
 */
export const requestHelloWorld = text => ({ type: HELLO_WORLD_REQUESTED, text });
export const helloWorldSuccess = text => ({ type: HELLO_WORLD_SUCCEEDED, text });
export const helloWorldFailure = message => ({ type: HELLO_WORLD_FAILED, message });
