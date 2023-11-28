import { Outlet, NavLink } from 'react-router-dom'
import { useNav } from '../store/useNav'
import './root.less'
export default function Root() {
  const { navList } = useNav()
  return (
    <div className="processor-wrapper">
      <div className="sidebar">
        {navList.length ? (
          <ul>
            {navList.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={`part/${item.id}`}
                  className={({ isActive }) =>
                    isActive ? 'is-nav-active nav-item' : 'nav-item'
                  }>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>error</i>
          </p>
        )}
      </div>
      <div className="detail">
        <Outlet />
      </div>
    </div>
  )
}
