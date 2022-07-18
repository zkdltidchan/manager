import PropTypes from 'prop-types';
import { Select as ChakraSelect } from '@chakra-ui/react';

export default function Select({ options, onChange, selected, width, ...restProps }) {

    const onValueChange = value => {
        const optionsList = convertOptionsToObject(options);
        onChange(optionsList[value]);
    };

    const convertOptionsToObject = (array) => {
        return array.reduce((obj, item) => {
            const key = item.value ?? item.label;
            return {
                ...obj,
                [key]: item,
            };
        }, {});
    };

    return (
        <ChakraSelect
            width={width}
            value={selected}
            onChange={({ target: { value } }) => onValueChange(value)}
            {...restProps}
        >
            {
                (options && options.length) && options.map(({ value, label, disabled }) => (
                    <option
                        value={value}
                        key={value ?? label}
                        disabled={disabled}
                    >
                        {label}
                    </option>
                ))
            }
        </ChakraSelect>
    );
};

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        disabled: PropTypes.bool,
    })).isRequired,
    onChange: PropTypes.func,
    selected: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    width: PropTypes.string,
    isReadOnly: PropTypes.bool,
};

Select.defaultProps = {
    onChange: () => { },
    selected: undefined,
    width: 'fit-content',
    isReadOnly: undefined,
};