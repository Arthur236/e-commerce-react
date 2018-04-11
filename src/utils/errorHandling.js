import _ from 'lodash';
import {notify} from "react-notify-toast";

export function catchError(error) {
    if (error.response) {
        if (error.response.data) {
            _.forIn(error.response.data, function(value, key) {
                notify.show(value[0], 'error');
            });
        } else if (error.response.status === 404) {
            notify.show('That resource does not exist.', 'error');
        } else if (error.response.status === 500) {
            notify.show('Our servers are currently under maintenance.', 'error');
        } else {
            notify.show('Something went wrong. We\'re working to fix it.', 'error');
        }
    }
}
