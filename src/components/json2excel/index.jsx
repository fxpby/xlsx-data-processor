import { useRef } from 'react'
import { useCore } from '../../store/useCore'
import PButton from '../button'

export default function Json2Excel() {
  const { handleJsonToExcel } = useCore()
  const input = useRef(null)

  const clickButton = () => {
    if (input.current) {
      input.current.click()
    }
  }

  return (
    <div>
      <PButton onClick={() => clickButton()}>点击选择Excel文件</PButton>
      <div className="my-10">Json2Excel, 选择完文件执行下载操作</div>
      <input
        style={{ display: 'none' }}
        type="file"
        name="fileUploader"
        onChange={(e) => handleJsonToExcel({ e })}
        accept=".json"
      />
    </div>
  )
}
