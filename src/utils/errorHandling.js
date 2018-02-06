import {showToast} from "./helpers";

export function catchError(error) {
    if (error.response.data.username) {
        showToast('error', error.response.data.username);
    } else if (error.response.data.email) {
        showToast('error', error.response.data.email);
    } else if (error.response.data.password) {
        showToast('error', error.response.data.password);
    } else if (error.response.status === 404) {
        showToast('error', 'That resource does not exist.');
    } else if (error.response.status === 500) {
        showToast('error', 'We\'re having issues with our servers.');
    } else {
        showToast('error', 'Something went wrong. Please check your settings.');
    }
}
