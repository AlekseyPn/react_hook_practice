import {HIDE_ALERT, SHOW_ALERT} from "../action-types";

const handlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    DEFAULT: state => state,
}


export function alertReducer(state, action) {
    const handler = handlers[action.type] || handlers.DEFAULT;

    return handler(state, action)
}