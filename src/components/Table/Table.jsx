import React, { useEffect, useState, useCallback } from "react";
import rowSelectPlugin from "./rowSelectPlugin";
import { useTable, useRowSelect, useSortBy } from "react-table";
import {
    ArrowUpDownIcon,
    ChevronUpIcon,
    ChevronDownIcon,
} from "@chakra-ui/icons";

import {
    Table as ChakraTable,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    // Button,
    // VStack,
    // Flex,
    // VStack,
    // Input,
    // chakra,
    // useTheme,
    // useMultiStyleConfig,
} from "@chakra-ui/react";

function Table(props) {
    const {
        rowId,
        columns,
        dataList,
        selectable,
        onSelect,
        // selectedIds,
        hiddenSelected,
        sortable,
        // editable,
        // onSort,
        // rowHeight,
        // loading
    } = props;
    // Use the state and functions returned from useTable to build your UI
    const [data, setData] = useState(dataList);
    const [skipPageReset, setSkipPageReset] = useState(false);

    useEffect(() => {
        setData(dataList);
    }, [dataList]);

    const updateData = (rowIndex, columnId, value) => {
        // We also turn on the flag to not reset the page
        setSkipPageReset(true);
        setData((old) =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    };
                }
                return row;
            })
        );
    };

    useEffect(() => {
        setSkipPageReset(false);
    }, [data]);
    // Let's add a data resetter/randomizer to help
    // illustrate that flow...
    // const resetData = () => setData(dataList)

    const plugins = [];
    if (sortable) {
        plugins.push(useSortBy);
    }
    if (selectable) {
        plugins.push(useRowSelect, rowSelectPlugin);
    }
    //editable也可以改成這樣
    const getRowId = useCallback(
        (row) => {
            return row[rowId];
        },
        [rowId]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setHiddenColumns,

        // selectedFlatRows,
        // state: { selectedRowIds },
    } = useTable(
        {
            columns,
            data,
            autoResetPage: !skipPageReset,
            updateData,
            getRowId,
            onSelect,
        },
        useSortBy,
        ...plugins
    );

    useEffect(() => {
        // const hiddenColumns = columns
        //   .filter((column) => column.hidden)
        //   .map((column) => column.accessor);
        // setHiddenColumns(hiddenColumns);
        setHiddenColumns(hiddenSelected);
    }, [columns, hiddenSelected, setHiddenColumns]);

    // Render the UI for your table
    return (
        <>
            {/* <VStack> */}
            <ChakraTable {...getTableProps()}>
                <Thead>
                    {headerGroups.map((headerGroup) => (
                        <Tr
                            {...headerGroup.getHeaderGroupProps()}
                        // __css={ styles.th }
                        //   {...column.getHeaderProps(
                        //     column.getSortByToggleProps?.(SORTBY_OPTION)
                        //   )}
                        //   onClick={() => handleSort(column)}
                        >
                            {headerGroup.headers.map((column) => (
                                <Th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    isNumeric={column.isNumeric}
                                >
                                    {column.render("Header")}{" "}
                                    {column.canSort ? (
                                        column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <ChevronDownIcon />
                                            ) : (
                                                <ChevronUpIcon />
                                            )
                                        ) : (
                                            <ArrowUpDownIcon />
                                        )
                                    ) : (
                                        ""
                                    )}
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <Tr
                                {...row.getRowProps()}
                                // sx={{ _hover: { bg: "gray.50",transition:{property: 'transform',duration: '5s',easing: 'ease-in-out'} } }}
                                sx={{ _hover: { bg: "gray.50", transition: "0.5s" } }}
                            >
                                {row.cells.map((cell) => {
                                    return (
                                        <Td
                                            {...cell.getCellProps()}
                                            isNumeric={cell.column.isNumeric}
                                        >
                                            {cell.render("Cell")}
                                        </Td>
                                    );
                                })}
                            </Tr>
                        );
                    })}
                </Tbody>
            </ChakraTable>

            {/* <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedRowIds: selectedRowIds,
              "selectedFlatRows[].original": selectedFlatRows.map(
                (d) => d.original
              ),
            },
            null,
            2
          )}
        </code>
      </pre> */}
            {/* </VStack> */}
        </>
    );
}

export default Table;

// Table.propTypes = {
//   total: PropTypes.number,
// };

Table.defaultProps = {
    hiddenSelected: [],
    // onPageClick: () => { },
};