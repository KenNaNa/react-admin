import React from 'react'
import PageWithTitle from '@/components/pageWithTitle'

export default function Add() {
  const MainAdd = () => {
    return (
      <div>
        <h1>添加销售公司列表</h1>
      </div>
    )
  }
  return (
    <PageWithTitle title='添加销售公司列表' children={<MainAdd />} />
  )
}