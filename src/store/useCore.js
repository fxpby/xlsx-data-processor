import { processExcelToJson, processJsonToExcel } from './../core/index.js'
import { download } from './../core/util.js'
import { create } from 'zustand'

const handleExcelToJson = async ({ e, downloadable = true, dom }) => {
  console.log('%c Line:6 🍇 downloadable', 'color:#33a5ff', downloadable)
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
    console.log('%c Line:20 🍕 jsonContent', 'color:#fca650', dom, jsonContent)

    dom.innerHTML = jsonContent
  }
}

const handleJsonToExcel = async (e) => {
  const selectedFile = e.target.files[0]
  await processJsonToExcel({ file: selectedFile })
}

export const useCore = create(() => ({
  handleExcelToJson,
  handleJsonToExcel,
}))
