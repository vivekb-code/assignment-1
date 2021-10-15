import { Table } from "react-bootstrap";

function UserProfile({ user }) {
    return (
        <>
            <h2>Profile</h2>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Role</td>
                        <td>{user.role}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default UserProfile;