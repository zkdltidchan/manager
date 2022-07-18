import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';
// import { CheckIcon } from '@chakra-ui/icons'

export default function Checkbox(props) {
    const { variant, defaultChecked, isChecked, onChange, ...restProps } = props;
    const [containerClassName, setContainerClassName] = useState('');

    // defaultChecked only be used at first time render
    const defaultCheckedRef = useRef(defaultChecked);
    useEffect(() => {
        if (defaultCheckedRef.current) {
            setContainerClassName('checked');
        }
    }, []);

    useEffect(() => {
        if (isChecked) {
            setContainerClassName('checked');
        }
        else {
            setContainerClassName('');
        }
    }, [isChecked]);

    function handleChange(e) {
        onChange(e);

        if (e.target.checked) {
            setContainerClassName('checked');
        }
        else {
            setContainerClassName('');
        }
    }

    return (
        // <Flex>
        <ChakraCheckbox
            variant={ variant }
            className={ containerClassName }
            defaultChecked={ defaultChecked }
            isChecked={ isChecked }
            spacing={ variant === 'multi-select-checkbox' ? '0px' : undefined }
            onChange={ handleChange }
            // icon={<CheckIcon height="120px"/>}
            { ...restProps }
        />

    );
}

Checkbox.propTypes = {
    variant: PropTypes.string,
    defaultChecked: PropTypes.bool,
    isChecked: PropTypes.bool,
    onChange: PropTypes.func,
};

Checkbox.defaultProps = {
    variant: undefined,
    defaultChecked: undefined,
    isChecked: undefined,
    onChange: () => {},
};