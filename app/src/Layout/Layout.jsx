import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'

export const Layout = () => {
  return (
    <div>

        <div>
            <Navbar/>
        </div>

        <div>
            <Outlet/>
        </div>

        <div>
            {/* Footer */}
        </div>

    </div>
  )
}
