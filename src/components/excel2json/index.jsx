import { useRef } from 'react'
import { useCore } from '../../store/useCore'
import { useChooseDataDisplay } from '../../store/useChooseDataDisplay.js'

import PButton from '../button'
import RadioGroup from '../radio-group'

export default function Excel2Json() {
  const { currentRadio } = useChooseDataDisplay()
  const { handleExcelToJson } = useCore()
  const input = useRef(null)
  const displayDom = useRef(null)

  const clickButton = () => {
    if (input.current) {
      input.current.click()
    }
  }
  return (
    <div>
      {currentRadio}
      <PButton onClick={() => clickButton()}>点击上传Excel文件</PButton>
      <input
        style={{ display: 'none' }}
        type="file"
        ref={input}
        name="fileUploader"
        onChange={(e) =>
          handleExcelToJson({
            e,
            downloadable: currentRadio === 'download',
            dom: displayDom.current,
          })
        }
        accept=".xls, .xlsx"
      />
      <div className="my-10">
        Excel2Json, 注意仅支持一个工作簿(后续可支持多工作簿)
      </div>
      <div className="flex">
        <RadioGroup />
      </div>
      <div className="my-10" ref={displayDom}></div>
    </div>
  )
}
