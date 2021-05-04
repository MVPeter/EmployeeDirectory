export const Columns = [
    {
        Header: 'Picture',
        accessor: 'picture.thumbnail',
        maxWidth:70,
        minWidth:70,
        Cell: ({ cell: {value }}) => (
            <img src={value} width={60} alt={""}
            />)
            
    },
    {
        Header: 'First Name',
        accessor: 'name.first'
    },
    {
        Header: 'Last Name',
        accessor: 'name.last'
    },
    {
        Header: 'Phone Number',
        accessor: 'phone'
    },
    {
        Header: 'Email',
        accessor: 'email'
    },
    {
        Header: 'State',
        accessor: 'location.state'
    }
]
