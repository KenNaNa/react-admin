import React from 'react';
import PageWithTitle from '@/components/pageWithTitle';
export default function UserAdd() {
    const MainUserAdd = () => {
        return (
            <h1>UserAdd</h1>
        )
    }
    return (
        <PageWithTitle title='添加用户' children={<MainUserAdd />} />
    )
}