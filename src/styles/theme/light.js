import _ from 'lodash';
import defaultTheme from './default';

const lightTheme = {
    palette: {
        background: {
            default: '#f2f2f2',
        },
        text: {
            primary: '#1D1C1C',
        },
        primary: {
            main: '#03a9f4',
        },
    },
};

export default _.merge({}, defaultTheme, lightTheme);
