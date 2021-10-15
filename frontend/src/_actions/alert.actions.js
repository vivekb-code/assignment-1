import { alertConstants } from '../_constants';

export const alertActions = {
    success: (message) => {
        return { type: alertConstants.SUCCESS, message };
    },
    error: (message) => {
        return { type: alertConstants.ERROR, message };
    },
    clear: () => {
        return { type: alertConstants.CLEAR };
    }
};