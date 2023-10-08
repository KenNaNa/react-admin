import React, { useState, useEffect, useRef } from 'react'
import RichEditor from '@/components/richTextEditor'
import { ToolkitUseClipboard } from 'toolkit-use/dist/clip/index.min.esm'
import { Button, message } from 'antd'
import PageWithTitle from '@/components/pageWithTitle'
import { driverSteps } from '@/config/driver.steps'
import cDriver from '@/utils/driver'
import MarkdownEditors from '@/components/markdownEditor'

export default function Home() {
  const [value, setValue] = useState('')
  const [msg, setMsg] = useState('真牛逼')
  const mmms = useRef(null)
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

  const openCDriver = () => {
    console.log(mmms, mmms.$$_editor.getHTML())
    cDriver.initDriver(driverSteps.steps, {
      showProgress: true
    })
  }

  const MainHome = () => {
    return (
      <div className='react-quill-text'>
        <h1 style={{ fontSize: '18px' }}>react-quill富文本编辑器</h1>
        <RichEditor value={value} setValue={setValue} />

        <h1 style={{ fontSize: '18px' }}>clipboard复制</h1>
        <div className="copy-text">
          <span className="text">牛逼：{msg}</span>
          <Button type='primary' className="copy" onClick={copyFn}>复制</Button>
        </div>


        <div style={{marginTop: '20px'}}>
          <Button onClick={openCDriver}>打开引导</Button>
        </div>

        <div style={{marginTop: '20px'}}>
          <MarkdownEditors editorRef={mmms} />
        </div>
      </div >
    )
  }

  return (
    <PageWithTitle title='首页' children={<MainHome />} />
  )
}