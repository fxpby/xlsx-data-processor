const download = ({file, fileType, fileName, outputType}) => {
  const blob = new Blob([file], {type: fileType})

  // 创建一个下载链接
  const downloadLink = document.createElement('a')
  downloadLink.href = URL.createObjectURL(blob)
  downloadLink.download = `${fileName}.${outputType}` || 'default'

  // 模拟点击下载链接
  downloadLink.click()
}

export {download}
