import React, {
    useState, useEffect, useCallback,
} from "react";
import { getMemebers } from "../../api/memeber";
import {
    // Flex,
    Stack,
    Heading,
    Box,
    HStack,
    VStack,
    Button,
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
    [SIZE]: 5,
    "page_index": 1,
};


const Member = () => {
    const [data, setData] = useState({});
    const [queryPayload, setQueryPayload] = useState(defaultQueryPayload);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);
    useEffect(() => {
        async function getAPI(queryPayload){
            console.log(queryPayload)
            const response = await getMemebers()
            setData(response);
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
                    // [PAGE]: 1,

                };
        }
        setQueryPayload({ ...queryPayload, ...partialPayload });
        console.log(queryPayload)
    };

    const pageDetail = {
        total: (data.total ? data.total : 0),
        pageIndex: (data.page_index ? data.page_index : 0),
        pageCounts: (data.page_count ? data.page_count : 1),
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
            <Table
                dataList={data.data ? data.data : testData
                }
                columns={columns}
                // rowId="_id"
                rowId="user_id"
                sortable={true}
                onSelect={handleTableSeleclt}
                selectable={true}
            // editable={true}
            // hiddenSelected={"columnHiden"}
            />

            <Box>
                <VStack align="start">
                    <Heading>
                        Test:
                    </Heading>
                    <Heading>
                        Selected Memeber Type: {queryPayload.member_type}
                    </Heading>
                    <Heading>
                        Search Input: {queryPayload.search}
                    </Heading>
                    <Heading>
                        Show Size: {queryPayload.size}
                    </Heading>
                    <Heading>
                        Current Index: {queryPayload.page_index}
                    </Heading>
                </VStack>
            </Box>
        </Box>
    );
};

export default Member;