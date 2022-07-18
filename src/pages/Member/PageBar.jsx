import { useState } from "react";
import { Input, Flex, Text, Button, HStack, Badge, Box, VStack, Stack } from "@chakra-ui/react";
import Select from "../../components/Select/Select";
import Pagination from "../../components/Pagination";
export const SIZE = "size";
export const PAGE = "page_index";

const PageBar = (props) => {
    const { currentPageData, onSelectChange, onApply, onPageSelected, ...rest } = props;

    const sizeOptions = [
        { value: 5, label: "5" },
        { value: 10, label: "10" },
        { value: 20, label: "20" },
        { value: 30, label: "30" },
    ];

    const [pageIndex, setPageIndex] = useState();
    const handleKeyDown = (e) => {
        // enter press
        if (e.keyCode === 13) {
            e.preventDefault();
            onApply(PAGE)(pageIndex ? pageIndex : undefined);
        }
    };
    const onClick = () => {
        onApply(PAGE)(pageIndex);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setPageIndex(value);
    };

    const onPageClick = (e) => {
        setPageIndex(e);
        onPageSelected(e)
        // onApply(PAGE)(e);
    };

    return (
        <>
            <Stack
                spacing={3}
                {...rest}
            >
                <Stack
                    justify={["center", "center", "center", "space-between"]}
                    direction={["column", "row", "row", "row"]}
                >
                    <Flex>
                        <Input
                            // width="120px"
                            minW="120px"
                            placeholder={`To Page ...`}
                            onKeyDown={handleKeyDown}
                            onChange={handleChange}
                            borderLeftRadius="xl"
                            borderRightRadius="0px"
                        />
                        <Button
                            aria-label="Go Page"
                            onClick={onClick}
                            borderLeftRadius="0px"
                            borderRightRadius="xl"
                        >
                            <Text>Go</Text>
                        </Button>
                    </Flex>
                    <HStack>
                        <Text fontSize="20px">SHOW </Text>
                        <Select w="80px" options={sizeOptions} onChange={onSelectChange(SIZE)} />
                    </HStack>
                    <HStack>
                        {/* <Box w="100px" align="start" variant="outline"> */}
                        <Text fontSize="sm"> Total: {currentPageData.total} </Text>
                        <Text fontSize="sm"> Page Counts: {currentPageData.pageCounts} </Text>
                        {/* </Box> */}
                    </HStack>
                </Stack>
                <Pagination
                    w="full"
                    justify="center"
                    align="center"
                    display={{ base: 'none', md: 'flex' }}
                    pageCounts={currentPageData.pageCounts}
                    page={currentPageData.pageIndex}
                    onApply={onPageClick}
                    {...rest}
                />
            </Stack>
        </>
    );
};

export default PageBar;