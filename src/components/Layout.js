import { Outlet } from "react-router-dom";

import React from 'react'

console.log('Layout component is being executed');


const Layout = () => {
  return (
    <main>
        <Outlet/>
    </main>
  )
}

export default Layout