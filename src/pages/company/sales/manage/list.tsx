import React from 'react'
import PageWithTitle from '@/components/pageWithTitle'

export default function List() {
  const MainList = () => {
    return (
      <div>
        <h1>销售管理列表</h1>
      </div>
    )
  }
  return (
    <PageWithTitle title='销售管理列表' children={<MainList />} />
  )
}