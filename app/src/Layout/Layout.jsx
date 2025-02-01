import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>

        <div>
            {/* Navbar */}
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
