import { useChooseDataDisplay } from '../../store/useChooseDataDisplay'

export default function RadioGroup() {
  const { currentRadio, radioOptions, setRadioOption } = useChooseDataDisplay()
  return (
    <>
      {radioOptions.map((x, i) => (
        <div key={x.id} className={i === 0 ? '' : 'mx-4'}>
          <input
            type="radio"
            id={x.id}
            name="group"
            value={x.id}
            onChange={() => setRadioOption(x.id)}
            checked={currentRadio === x.id}
          />
          <label htmlFor={x.id}>{x.label}</label>
        </div>
      ))}
    </>
  )
}
