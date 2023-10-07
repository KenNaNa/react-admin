import React from 'react'
import PageWithTitle from '@/components/pageWithTitle'

export default function About() {
  const MainAbout = () => {
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
  return (
    <PageWithTitle title='关于我们' children={<MainAbout />} />
  )
}