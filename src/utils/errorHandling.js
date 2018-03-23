import {notify} from "react-notify-toast";

export function catchError(error) {
    if (error.response.data.username) {
        notify.show('error', error.response.data.username);
    } else if (error.response.data.email) {
        notify.show('error', error.response.data.email);
    } else if (error.response.data.password) {
        notify.show('error', error.response.data.password);
    } else if (error.response.status === 404) {
        notify.show('error', 'That resource does not exist.');
    } else if (error.response.status === 500) {
        notify.show('error', 'We\'re having issues with our servers.');
    } else {
        notify.show('error', 'Something went wrong. Please check your settings.');
    }
}
