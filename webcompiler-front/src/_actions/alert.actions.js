import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    warning,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function warning(message) {
    return { type: alertConstants.warning, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}
