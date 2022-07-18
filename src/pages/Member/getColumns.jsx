import { Button, Input, Badge } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons'
import React, {
    useEffect,
    useState,
} from "react";

const statusBtnCss = {
    borderWidth: "1.2px",
    backgroundColor: "blue.500",
    _hover: { "svg": { color: "gray.200", transition: '0.8s' }, backgroundColor: "#0066CC", borderColor: "#FFDC35", color: "gray.200", transition: '0.8s' },
    // color: "yellow.100"
}
const statusBtnDisableCss = {
    border: "1px",
    backgroundColor: "blue.500",
    color: "gray.200",
    _hover: { "svg": { color: "#FFDC35", transition: '0.8s' }, backgroundColor: "#0066CC", borderColor: "#FFD306", color: "white", transition: '0.8s' }
}


export default function getColumns(add, remove, isLoading) {
    const handleRemoveMember = (e) => {
        remove(e)
    }
    const handleAddMember = (e) => {
        add(e)
    }

    return [
        {
            Header: "Button Cell Example",
            accessor: "status",
            Cell: ({ row: { original } }) => {
                let buttonStatus
                if (original.status) {
                    buttonStatus = (<Button sx={statusBtnCss} isLoading={isLoading} onClick={() => { handleRemoveMember(original._id) }} colorScheme="blue" variant="solid" leftIcon={<StarIcon color="#FFDC35" />}> Cancel </Button>)
                } else {
                    buttonStatus = (<Button sx={statusBtnDisableCss} isLoading={isLoading} colorScheme="blue" variant="solid" onClick={() => { handleAddMember(original._id) }} leftIcon={<StarIcon color="gray.200" />}> Save </Button>)
                }
                return buttonStatus
            },
        },
        {
            Header: "Member",
            accessor: "name",
        },
        {
            Header: "Input Example",
            accessor: "inputExample",
            hidden: true,
            editable: true,
            Cell: EditableCellText
        },
    ]
}



export const EditableCellText = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateData, // This is a custom function that we supplied to our table instance
}) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = useState(initialValue)

    const onChange = e => {
        setValue(e.target.value)
    }

    // We'll only update the external data when the input is blurred
    const onBlur = () => {
        updateData(index, id, value)
    }

    // If the initialValue is changed external, sync it up with our state
    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return <Input value={value} onChange={onChange} onBlur={onBlur} />
}
