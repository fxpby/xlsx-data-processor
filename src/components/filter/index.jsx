import { useRef, useState } from 'react'
import { useCore } from '../../store/useCore'
import { useChooseDataDisplay } from '../../store/useChooseDataDisplay.js'
import PButton from '../button'
import RadioGroup from '../radio-group'

export default function Filter() {
  const { currentRadio } = useChooseDataDisplay()
  const { handleDisplayColumn, currentColumns, handleFilterData } = useCore()
  const input = useRef(null)
  const displayColumns = useRef(null)
  const displayResult = useRef(null)

  const [checkbox, setCheckbox] = useState([])
  const [filterMap, setFilterMap] = useState([])
  const clickButton = () => {
    if (input.current) {
      input.current.click()
    }
  }
  const handleChangeCheckbox = (e) => {
    const { checked, name } = e.target
    setFilterMap((pre) => {
      console.log('pre: ', pre, currentColumns)
      if (checked) {
        const col = currentColumns.filter((x) => pre.includes(x) || x === name)
        console.log('col: ', col)
        return col.map((x) => {
          return {
            key: x,
            value: null,
          }
        })
      } else {
        return pre.filter((x) => x.key !== name)
      }
    })
  }
  const handleChangeInput = (e) => {
    const { value, name } = e.target
  }
  return (
    <div>
      <PButton className="my-5" onClick={() => clickButton()}>
        点击选择Excel文件
      </PButton>
      <input
        style={{ display: 'none' }}
        type="file"
        ref={input}
        name="fileUploader"
        onChange={(e) =>
          handleDisplayColumn({
            e,
            dom: displayColumns.current,
          })
        }
        accept=".xls, .xlsx"
      />
      <div ref={displayColumns}>
        {currentColumns.length ? (
          <>
            <div>选择的文件列名如下，请勾选筛选项，未勾选项不做筛选处理</div>
            <div>
              输入框内为列对应的目标值,可以是<b>单个值</b>
              或者<b>多个值以英文逗号分割</b>（如 233 或 233,666,999）
            </div>
          </>
        ) : (
          <></>
        )}
        {currentColumns.length ? (
          currentColumns.map((x, i) => (
            <div className="my-2" key={i}>
              <input
                onChange={(e) => handleChangeCheckbox(e)}
                type="checkbox"
                id={i}
                name={x}
              />
              {x}, 筛选值：{' '}
              <input
                onChange={(e) => handleChangeInput(e)}
                name={x}
                type="text"
              />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <PButton
        className="my-5"
        onClick={() =>
          handleFilterData({
            dom: displayResult.current,
            downloadable: currentRadio === 'download',
          })
        }>
        开始处理数据
      </PButton>
      <div className="flex my-4">
        <RadioGroup />
      </div>
      <div className="my-10" ref={displayResult}></div>
    </div>
  )
}
