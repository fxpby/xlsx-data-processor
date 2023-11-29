import './index.less'
export default function PButton(prop) {
  const { children, onClick } = prop

  const handleClick = (e) => {
    e.stopPropagation()
    if (onClick) {
      onClick()
    }
  }
  return (
    <button className="p-button" onClick={(e) => handleClick(e)}>
      {children}
    </button>
  )
}
