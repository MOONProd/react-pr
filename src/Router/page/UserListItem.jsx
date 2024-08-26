import React from 'react';
import { useParams } from 'react-router-dom';

function UserListItem(props) {
    const { id } = useParams();
    const { users } = props;
    const user = users.find((item)=>item.id === parseInt(id));

    return (
        <div>
            Name : {user.name}
            Age : {user.age}
        </div>
    );
}

export default UserListItem;