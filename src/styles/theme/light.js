import _ from 'lodash';
import defaultTheme from './default';

const lightTheme = {
    palette: {
        background: {
            default: '#eee',
        },
        text: {
            primary: '#111',
        },
        primary: {
            main: '#03a9f4',
        },
    },
};

export default _.merge({}, defaultTheme, lightTheme);
