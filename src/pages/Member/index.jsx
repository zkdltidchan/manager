import React, {
    useState, useEffect, useCallback,
} from "react";
import {
    // Flex,
    Stack,
    Heading,
    Box,
    HStack,
    VStack,
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
import { getMemebers } from "../../api/memeber";
const defaultQueryPayload = {
    [MEMBER_TYPE]: undefined,
    [SEARCH]: undefined,
    [SIZE]: 5,
    "page_index": 1,
};


const Member = () => {
    // const dispatch = useDispatch();
    // const { data } = useSelector((state) => state.listReducer);
    // const data = {
    //     page_index: 0,
    //     page_count: 100,
    //     total: 10000,
    //     size: 10,
    // }
    const [data, setData] = useState({});
    useEffect(() => {
        setData(getMemebers());
        // console.log(data)
      }, []);

    
    const [queryPayload, setQueryPayload] = useState(defaultQueryPayload);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);
    const removeUserVocabulary = (e) => {
        console.log(e)
        setIsLoading(true)
        // dispatch(
        //     removeToUserVocabularyList({
        //         user_id: user_id,
        //         vocabulary_id: e,
        //     })
        // ).then(() => {
        //     console.log("done")
        //     getVocabularyList()

        //     // updateTable()
        // });

    }

    // const [isLoading,setIsLoading] = useState(false)

    const addUserVocabulary = (e) => {
        setIsLoading(true)
        // dispatch(
        //     addToUserVocabularyList({
        //         vocabulary_id: e,
        //     })
        // ).then(() => {
        //     console.log("done")
        //     setIsLoading(false)
        //     getVocabularyList()
        //     // updateTable()
        // })
    }

    const columns = getColumns(addUserVocabulary, removeUserVocabulary, isLoading);

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
        pageCounts: (data.page_count ? data.page_count : 0),
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
                dataList={data.data_list ? data.data_list : testData
                }
                columns={columns}
                rowId="_id"
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