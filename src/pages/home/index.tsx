import React, { useState } from 'react'
import RichEditor from '@/components/editor'
import { ToolkitUseClipboard } from 'toolkit-use/dist/clip/index.min.esm'
import { Button, message } from 'antd'

export default function Home() {
  const [value, setValue] = useState('')
  const [msg, setMsg] = useState('真牛逼')
  const copyFn = () => {
    new ToolkitUseClipboard({
      message: msg,
      className: '.copy',
      onSuccess: () => {
        message.success('复制成功了！！！')
      },
      onError: () => {
        message.error('复制失败了！！！')
      }
    }).copy()
  }
  return (
    <div>
      <h1 style={{fontSize: '18px'}}>react-quill富文本编辑器</h1>
      <RichEditor value={value} setValue={setValue} />

      <h1 style={{fontSize: '18px'}}>clipboard复制</h1>
      <div className="copy-text">
        <span className="text">牛逼：{msg}</span>
        <Button type='primary' className="copy" onClick={copyFn}>复制</Button>
      </div>
    </div >
  )
}