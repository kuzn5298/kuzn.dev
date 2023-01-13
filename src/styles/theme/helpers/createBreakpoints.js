const STEP = 5 / 100;

const createBreakpoints = (values, unit = 'px') => {
    const keys = Object.keys(values);

    const up = (key) => {
        const value = values[key] ?? key;
        return `@media (min-width: ${value}${unit})`;
    };

    const down = (key) => {
        const value = values[key] ?? key;
        return `@media (max-width: ${value - STEP}${unit})`;
    };

    return {
        keys,
        values,
        up,
        down,
        unit,
    };
};

export default createBreakpoints;
