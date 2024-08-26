import { Link } from 'react-router-dom';

function UserList(props) {
    const { users } = props;

    return (
        <div>
            {users.map((user)=>{
                return(<li key={user.id}>
                    <Link to={`/${user.id}`}>{user.name}</Link>
                </li>)
            })}
        </div>
    );
}

export default UserList;