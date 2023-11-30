import { processExcelToJson, processJsonToExcel } from './../core/index.js'
import { download } from './../core/util.js'
import { create } from 'zustand'

const handleExcelToJson = async ({ e, downloadable = true, dom }) => {
  const selectedFile = e.target.files[0]
  const { name } = selectedFile
  const res = await processExcelToJson({ file: selectedFile })
  const jsonContent = JSON.stringify(res[0], null, 2)
  if (downloadable) {
    download({
      file: jsonContent,
      fileType: 'application/json',
      fileName: name.split('.')[0],
      outputType: 'json',
    })
  } else {
    dom.innerHTML = jsonContent
  }
}

const handleJsonToExcel = async ({ e }) => {
  const selectedFile = e.target.files[0]
  await processJsonToExcel({ file: selectedFile })
}

export const useCore = create((set, get) => ({
  currentColumns: [],
  currentJson: [],
  handleExcelToJson,
  handleJsonToExcel,
  handleDisplayColumn: async ({ e }) => {
    const selectedFile = e.target.files[0]
    const res = await processExcelToJson({ file: selectedFile })

    set(() => ({
      currentColumns: Object.keys(res[0][0]),
      currentJson: res[0],
    }))
  },
  handleFilterData: ({ dom, downloadable, filterColumns }) => {
    const currentJson = get().currentJson
    const newJson = currentJson.filter((x) =>
      filterColumns.every((t) => {
        if (t.value.split(',').length > 1) {
          return t.value.split(',').includes(String(x[t.key]))
        } else {
          return x[t.key] == t.value
        }
      }),
    )
    if (downloadable) {
      processJsonToExcel({ json: newJson })
    } else {
      dom.innerHTML = JSON.stringify(newJson, null, 2)
    }
  },
}))
