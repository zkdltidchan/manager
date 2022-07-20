import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Flex, HStack, Button, Tooltip, Box } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

export const PAGE = "page_index";

export default function Pagination({ pageCounts, page, onApply, ...rest }) {
    // const outerLimit = 2;
    // const innerLimit = 2;

    const [pageIndex, setPageIndex] = useState(page)
    const [isLastPage, setIsLastPage] = useState(false)
    const [isFirstPage, setIsFirstPage] = useState(true)
    // const [inner, setInner] = useState()
    // const [outer, setOuter] = useState()

    const [pageItemList, setPageItemList] = useState([]);
    const createPageList = (active, lastPage) => {
        if (active) {
            if (active === lastPage) {
                setIsLastPage(true)
            } else {
                setIsLastPage(false)
            }
            if (active === 1) {
                setIsFirstPage(true)
            } else {
                setIsFirstPage(false)
            }
            
            let listStop = 5;
            setPageIndex(active)
            if (active > lastPage) {
                active = lastPage;
            }
            
            let listStart = active -2
            

            let list = [];
            for (let i = active - 2; list.length < listStop; i++) {
                if (i >= 1) {
                    list.push(i);
                }
                if (i >= lastPage) { break; }
            }
            setPageItemList(list);
        }
    };
    const onClickPage = (active) => {
        console.log(active)
        createPageList(active, pageCounts);
        onApply(active);
    };

    useEffect(() => {
        console.log(page);
        createPageList(page, pageCounts);
    }, [page, pageCounts]);

    return (
        <Box
            className="pageBar"
            align="center"
            // overflow="initial"
            justify="space-between"
            wrap="wrap"
            w="100%"
            {...rest}
        >
            <HStack 
            >
                <Tooltip hasArrow label="First Page" bg="blue.300" colorScheme="red">
                    <Button
                        colorScheme="blue"
                        variant="outline"
                        onClick={() => {
                            onClickPage(1);
                        }}
                        
                        isDisabled={isFirstPage}
                    >
                        <ArrowLeftIcon />
                    </Button>
                </Tooltip>
                {/* <Button
                    colorScheme="blue"
                    variant="outline"
                    isDisabled={isFirstPage}
                    onClick={() => {
                        onClickPage(page - 1);
                    }}
                >
                    <ChevronLeftIcon />{" "}
                </Button> */}
                {pageItemList &&
                    pageItemList.length &&
                    pageItemList.map((pageItem) => {
                        return (
                            <Button
                                colorScheme="blue"
                                variant={pageIndex === pageItem ? "solid" : "outline"}
                                onClick={() => {
                                    onClickPage(pageItem);
                                }}
                            >
                                {pageItem}
                            </Button>)
                    })}
                {/* <Button
                    colorScheme="blue"
                    variant="outline"
                    isDisabled={isLastPage}
                    onClick={() => {
                        onClickPage(page + 1);
                    }}
                >
                    {" "}
                    <ChevronRightIcon />{" "}
                </Button> */}
                <Tooltip hasArrow label="Last Page" bg="blue.300">
                    <Button
                        colorScheme="blue"
                        variant="outline"
                        isDisabled={isLastPage}
                        onClick={() => {
                            onClickPage(pageCounts);
                        }}
                    >
                        <ArrowRightIcon />
                    </Button>
                </Tooltip>
            </HStack>
        </Box>
    );
}

Pagination.propTypes = {
    total: PropTypes.number,
};

Pagination.defaultProps = {
    total: 0,
    page: 1,
    onPageClick: () => { },
};