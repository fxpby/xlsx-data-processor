import { Outlet, NavLink } from 'react-router-dom'
import { useNav } from '../store/useNav'
import './root.less'
export default function Root() {
  const { navList } = useNav()
  return (
    <div className="processor-wrapper min-h-screen">
      <div className="sidebar">
        <div className="my-10 flex items-center justify-center">
          Excel 数据处理工厂
        </div>
        {navList.length ? (
          <ul>
            {navList.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={`part/${item.id}`}
                  className={({ isActive }) =>
                    isActive
                      ? 'is-nav-active nav-item p-2 bg-white '
                      : 'nav-item p-2 hover:bg-white'
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
      <div className="detail m-10">
        <div className="my-5">请点击切换左侧导航进入不同数据处理工厂</div>
        <Outlet />
      </div>
    </div>
  )
}
