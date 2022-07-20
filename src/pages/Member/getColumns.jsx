export default function getColumns(add, remove, isLoading) {
    // const handleRemoveMember = (e) => {
    //     remove(e)
    // }
    // const handleAddMember = (e) => {
    //     add(e)
    // }
    return [
        {
            Header: "Member",
            accessor: "user_name",
        },
        {
            Header: "User Nick",
            accessor: "user_nick",
        },
        {
            Header: "Phone",
            accessor: "user_phone",
        },
        {
            Header: "Kbank",
            accessor: "user_kbank",
        },
    ]
}

