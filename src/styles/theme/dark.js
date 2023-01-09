import _ from 'lodash';
import defaultTheme from './default';

const darkTheme = {
    palette: {
        background: {
            default: '#1D1C1C',
        },
        text: {
            primary: '#F2F2F2',
        },
        primary: {
            main: '#B3E5FC',
        },
    },
};

export default _.merge({}, defaultTheme, darkTheme);
