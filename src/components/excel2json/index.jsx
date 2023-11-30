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
      <PButton onClick={() => clickButton()}>点击选择Excel文件</PButton>
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
      <span>选择文件后执行操作：</span>
      <div className="flex my-4">
        <RadioGroup />
      </div>
      <div className="my-10" ref={displayDom}></div>
    </div>
  )
}
