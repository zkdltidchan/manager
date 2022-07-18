import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  PopoverArrow,
  PopoverFooter,
  useDisclosure,
  Stack,
  HStack,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Checkbox from "../../CheckBox/CheckBox";
import SelectableButton from "../SelectableButton";

export default function MultiSelect({title, options, selected: selectedProps, onApply, ...rest}) {
  const [selectedState, setSelectedState] = useState([]);
  const { isOpen, onClose, onToggle } = useDisclosure();
  function handleChange(value) {
    if (selectedState.includes(value)) {
      setSelectedState(selectedState.filter((v) => v !== value));
    } else {
      selectedState.push(value);
      setSelectedState([...selectedState]);
    }
  }

  function handleApply() {
    onClose();
    onApply(selectedState);
  }

  function handleReset(e) {
    e.stopPropagation();
    setSelectedState([]);
    onApply(undefined);
    //     if (applied) {
    //         onClose();
    //     }
  }
  const applied = selectedProps.length > 0;
  let tipText = "";

  if (applied) {
    const selectedTextofOptions = options
      .filter((option) => selectedProps.includes(option.value))
      .map((option) => option.text);
    tipText += `${selectedTextofOptions.join(", ")}`;
  }

  // while popover is opening, initial `selectedState` using `selectedProps`
  useEffect(() => {
    if (isOpen) {
      setSelectedState([...selectedProps]);
    }
  }, [selectedProps, isOpen]);

  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      {...rest}
    >
      <PopoverTrigger>
        <SelectableButton
          onClick={onToggle}
          isOpen={isOpen}
          showTooltip={applied}
          tooltipLabel={tipText}
          badgeNumber={selectedProps.length}
        >
          {title}
        </SelectableButton>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Stack>
            {options.map(({ value, text }) => (
              <Stack key={value}>
                <Checkbox
                  key={value}
                  value={value}
                  isChecked={selectedState.includes(value)}
                  onChange={() => handleChange(value)}
                >
                  {text}
                </Checkbox>
              </Stack>
            ))}
          </Stack>
        </PopoverBody>
        <PopoverFooter>
          <HStack spacing="10px">
            <Button onClick={handleReset}>
              Clear
            </Button>
            <Button onClick={handleApply}>
              Apply
            </Button>
          </HStack>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

MultiSelect.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selected: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  onApply: PropTypes.func,
};

MultiSelect.defaultProps = {
  selected: [],
  onApply: () => { },
};