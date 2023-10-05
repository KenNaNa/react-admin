import React, { useState } from 'react'
import RichEditor from '@/components/editor'

export default function Home() {
  const [value, setValue] = useState('')
  return (
    <div>
      <RichEditor value={value} setValue={setValue} />
    </div>
  )
}