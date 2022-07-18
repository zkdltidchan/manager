import { useState } from "react";
import { Input, IconButton, Flex } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'

export const SEARCH = "search";
export const PAGE = "page_index";

const SearchBar = ({ onApply, ...rest }) => {
    const [searchValue, setSearchValue] = useState();

    const handleKeyDown = (e) => {
        // enter press
        if (e.keyCode === 13) {
            e.preventDefault();
            onApply(SEARCH)(searchValue ? searchValue : undefined);
        }
    };
    const onClick = () => {
        onApply(SEARCH)(searchValue ? searchValue : undefined);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    };
    return (
        <>
            <Flex {...rest}>
                <Input
                    w={{ base: "80px", md: "200px" }}
                    placeholder={`Search By ...`}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    borderRightRadius="0px"
                    borderLeftRadius="xl"
                />
                <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<SearchIcon />}
                    onClick={onClick}
                    borderLeftRadius="0px"
                    borderRightRadius="xl"
                />
            </Flex>
        </>
    );
};

export default SearchBar;