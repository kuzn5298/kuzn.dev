import _ from 'lodash';
import defaultTheme from './default';

const lightTheme = {
    palette: {
        background: {
            default: '#fff',
        },
        text: {
            primary: '#000',
        },
        primary: {
            main: '#B3E5FC',
        },
    },
};

export default _.merge({}, defaultTheme, lightTheme);
