import React from 'react';
import PageWithTitle from '@/components/pageWithTitle';
export default function UserList() {
    const MainUserList = () => {
        return (
            <h1>UserList</h1>
        )
    }
    return (
        <PageWithTitle title='用户列表' children={<MainUserList />} />
    )
}