
/*
 * User Messages
 *
 * This contains all the text for the User page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Sidebar.Mainmenu';

export default defineMessages({
    operation: {
        id: `${scope}.operation`,
        defaultMessage: 'operation',
    },
    service: {
        id: `${scope}.service`,
        defaultMessage: 'service',
    },
    configuration: {
        id: `${scope}.configuration`,
        defaultMessage: 'configuration',
    },
    data: {
        id: `${scope}.data`,
        defaultMessage: 'data',
    },
    administrator: {
        id: `${scope}.administrator`,
        defaultMessage: 'administrator',
    },
    alarm: {
        id: `${scope}.alarm`,
        defaultMessage: 'alarm',
    },
});
