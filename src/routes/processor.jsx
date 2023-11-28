import { useParams } from 'react-router-dom'
import { useNav } from '../store/useNav'
export default function Processor() {
  const { navList } = useNav()
  const { id } = useParams()
  const Component = navList.find((x) => x.id === id).component
  return (
    <div id="processor">
      <Component />
    </div>
  )
}
