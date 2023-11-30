import XLSX from 'xlsx'

const generateExcelBySheet = (sheet) => {
  return XLSX.utils.sheet_to_json(sheet)
}

const processExcelToJson = ({ file }) => {
  return new Promise((resolve, reject) => {
    if (file instanceof File) {
      const reader = new FileReader()

      reader.onloadend = () => {
        const arrayBuffer = reader.result
        const workbook = XLSX.read(arrayBuffer, { type: 'array' })
        const sheetNames = workbook.SheetNames
        const result = sheetNames.map((sheetName) => workbook.Sheets[sheetName])
        resolve(result)
      }

      reader.readAsArrayBuffer(file)
    } else {
      reject(new Error('传入的不是 File'))
    }
  }).then((result) => {
    return result.map((x) => generateExcelBySheet(x))
  })
}

const writeXLSXFile = ({ data, fileName = 'output.xlsx' }) => {
  // 创建工作簿
  const workbook = XLSX.utils.book_new()
  // 创建工作表
  const worksheet = XLSX.utils.json_to_sheet(data)
  // 将工作表添加到工作簿中
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
  // 导出 Excel 文件
  XLSX.writeFile(workbook, fileName)
}

const processJsonToExcel = ({ file, json }) => {
  if (file) {
    const { name } = file

    return new Promise((resolve, reject) => {
      if (file instanceof File) {
        const reader = new FileReader()

        reader.onload = () => {
          const jsonData = JSON.parse(reader.result)
          resolve(jsonData)
        }

        reader.readAsText(file)
      } else {
        reject(new Error('传入的不是 File'))
      }
    }).then((result) => {
      writeXLSXFile({ data: result, fileName: `${name.split('.')[0]}.xlsx` })
    })
  } else {
    writeXLSXFile({ data: json })
  }
}

export { processExcelToJson, processJsonToExcel }
