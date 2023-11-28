import { useCore } from '../../store/useCore'

export default function Json2Excel() {
  const { handleJsonToExcel } = useCore()

  return (
    <div>
      Json2Excel
      <input
        type="file"
        id="fileUploader"
        name="fileUploader"
        onChange={(e) => handleJsonToExcel(e)}
        accept=".json"
      />
    </div>
  )
}
