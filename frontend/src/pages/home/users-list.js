import { Table } from "react-bootstrap";

function UsersList({ users }) {
    return (
        <>
            <h2>User Details</h2>
            <Table striped bordered hover>
                <thead>
                    <tr style={{
                        'background-color': '#8dd03c',
                        color: '#fff'
                    }}>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default UsersList;