import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useACtions } from '../hooks/useActions';
import { userTypedSelector } from '../hooks/userTypedSelector';
import { fetchUsers } from '../store/action-creators/user';

const UserList: React.FC = () => {

    const {users, loading, error} = userTypedSelector((state) => state.user)

   const {fetchUsers} = useACtions()
  
    useEffect(() => {
        fetchUsers()
    }, [])

    if(loading) {
        return <h1>Идет загрузка...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map((user) => {
                return (
                    <div key={user.id}>{user.name}</div>
                )
            })}
        </div>
    );
};

export default UserList;