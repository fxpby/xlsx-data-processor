import { useCore } from '../../store/useCore'

export default function Excel2Json() {
  const { handleExcelToJson } = useCore()
  return (
    <div>
      Excel2Json, 注意仅支持一个工作簿
      <input
        type="file"
        id="fileUploader"
        name="fileUploader"
        onChange={(e) => handleExcelToJson(e)}
        accept=".xls, .xlsx"
      />
    </div>
  )
}
