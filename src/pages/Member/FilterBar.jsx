import React, { useState } from "react";
import PropTypes from "prop-types";
import MultiSelect from "../../components/Select/MultiSelect/MultiSelect";
import {
    HStack,
    Flex,
} from "@chakra-ui/react";

//select type
export const MEMBER_TYPE = "member_type";

const FilterBar = ({ defaultSettings, onApply, ...rest}) => {
    const memberTypeOptions = [
        { value: 0, text: "Verify" },
        { value: 1, text: "UnVerify" },
    ]

    return (
        <>
            <Flex {...rest}>
                <HStack
                >
                    <MultiSelect
                        title={"Member Type"}
                        options={memberTypeOptions}
                        onApply={onApply(MEMBER_TYPE)}
                        selected={defaultSettings[MEMBER_TYPE]}
                    />
                </HStack>
            </Flex>
        </>
    );
};

FilterBar.propTypes = {
    defaultSettings: PropTypes.shape().isRequired,
    onApply: PropTypes.func.isRequired,
};

export default FilterBar;