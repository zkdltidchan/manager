import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Button,
    Badge,
    Tooltip,
    ScaleFade,
} from '@chakra-ui/react';

function SelectableButton(props, ref) {
    const { onClick, isOpen, children, showTooltip, tooltipLabel, badgeNumber,...rest } = props;

    return (
        <Button
            ref={ref}
            colorScheme="blue"
            rightIcon={<Arrow isOpen={isOpen} />}
            onClick={onClick}
            {...rest}
        >
            {children}
            <ScaleFade
                style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '0px',
                }}
                initialScale={.4}
                in={showTooltip}
                reverse
            >
                <Tooltip
                    placement="top"
                    label={tooltipLabel}
                    hasArrow
                >
                    <Badge variant="solid" bg="blue.300" borderRadius="15px">{badgeNumber}</Badge>
                </Tooltip>
            </ScaleFade>
        </Button>
    );
}

export default forwardRef(SelectableButton);

SelectableButton.propTypes = {
    onClick: PropTypes.func,
    isOpen: PropTypes.bool,
    showTooltip: PropTypes.bool,
    tooltipLabel: PropTypes.string,
    badgeNumber: PropTypes.number,
};

SelectableButton.defaultProps = {
    onClick: undefined,
    isOpen: false,
    showTooltip: false,
    tooltipLabel: undefined,
    badgeNumber: undefined,
};

function Arrow({ isOpen }) {
    return (
        <Box transform={`rotate(${isOpen ? 180 : 0}deg)`}>
            {/* <ArrowSVG /> */}
        </Box>
    );
}

Arrow.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};