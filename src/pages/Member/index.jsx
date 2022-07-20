import React, {
    useState, useEffect, useCallback,
} from "react";
import { getMemebers } from "../../api/memeber";
import {
    // Flex,
    Stack,
    Text,
    Box,
    HStack,
    VStack,
    Button,
    Spinner,
    Skeleton,
    Flex,
    // SkeletonCircle,
    // SkeletonText,
    // Center,
} from "@chakra-ui/react";
import Table from "../../components/Table/Table";
import FilterBar, {
    MEMBER_TYPE,
} from "./FilterBar";
import SearchBar, { SEARCH } from "./SearchBar";
import PageBar, { PAGE, SIZE } from "./PageBar";
import getColumns from "./getColumns";
import { testData } from "./testData";
const defaultQueryPayload = {
    [MEMBER_TYPE]: undefined,
    [SEARCH]: undefined,
    [SIZE]: 1,
    "page_index": 1,
};


const Member = () => {
    const [data, setData] = useState({});
    const [queryPayload, setQueryPayload] = useState(defaultQueryPayload);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);
    useEffect(() => {
        async function getAPI(queryPayload) {
            console.log(queryPayload)
            setIsLoading(true)
            const response = await getMemebers(queryPayload)
            setData(response);
            setIsLoading(false)
        }

        getAPI(queryPayload)

        console.log(data)
    }, [queryPayload]);

    const removeUser = (e) => {
        console.log(e)
        setIsLoading(true)
        // TODO
        setIsLoading(false)
    }

    const addUser = (e) => {
        console.log(e)
        setIsLoading(true)
        // TODO
        setIsLoading(false)
    }

    const columns = getColumns(addUser, removeUser, isLoading);

    const handleTableSeleclt = (values) => {
        setSelectedIds(values);
        console.log(values)
    };

    const handleApply = (type) => (value) => {
        console.log("log", type, value)
        let partialPayload = {};
        switch (type) {
            // case FILTER_EMAIL:
            case PAGE:
                partialPayload = {
                    [type]: value,

                };
                break;
            default:
                partialPayload = {
                    [type]: value,
                    [PAGE]: 1,

                };
        }
        setQueryPayload({ ...queryPayload, ...partialPayload });
        console.log(queryPayload)
    };

    const pageDetail = {
        total: (data.total ? data.total : 0),
        pageIndex: (data.page_index ? data.page_index : 0),
        pageCounts: (data.page_counts ? data.page_counts : 1),
        size: data.size,
    };

    const pageOnSelect = (page) => {
        setQueryPayload({
            ...queryPayload,
            "page_index": page
        });
    };

    const onChange = (type) => (value) => {
        setQueryPayload(() => ({
            ...queryPayload,
            [type]: value.value,
        }));
    };

    return (
        <Box w="full" p={3}>
            <Stack
                spacing={3}
            >
                <HStack
                    justify="space-between"
                >
                    <FilterBar
                        onApply={handleApply}
                        defaultSettings={queryPayload}
                    />
                    <SearchBar
                        onApply={handleApply}
                    />
                </HStack>
                <HStack
                >
                    <PageBar
                        w="full"
                        onPageSelected={pageOnSelect}
                        onSelectChange={onChange}
                        onApply={handleApply}
                        total={data.total}
                        currentPageData={pageDetail}
                    />
                </HStack>


            </Stack>
            <Flex pt={2} align="start" justify="start">
                {/* TODO */}
                <Button disabled={!selectedIds.length}>Edit</Button>
            </Flex>
            <Table
                dataList={data.data ? data.data : testData
                }
                columns={columns}
                // rowId="_id"
                rowId="user_id"
                sortable={true}
                onSelect={handleTableSeleclt}
                selectable={true}
                loading={isLoading}
            // editable={true}
            // hiddenSelected={"columnHiden"}
            />
            <Box>
                <VStack align="start">
                    <Text>
                        Test:
                    </Text>
                    <Text>
                        Selected Memeber Type: {queryPayload.member_type}
                    </Text>
                    <Text>
                        Search Input: {queryPayload.search}
                    </Text>
                    <Text>
                        Show Size: {queryPayload.size}
                    </Text>
                    <Text>
                        Current Index: {queryPayload.page_index}
                    </Text>
                    <Text>
                        Select Items: {selectedIds.map((item, index) =>
                            <Text key={index}>{item}</Text>
                        )}
                    </Text>
                </VStack>
            </Box>
        </Box>
    );
};

export default Member;