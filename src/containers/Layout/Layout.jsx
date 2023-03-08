import Navbar from '@/components/Navbar/Navbar'
import React, { Fragment } from 'react'

function Layout(props) {
  return (
    <Fragment>
    <Navbar/>
    <main>{props.children}</main>
    {/* <footer>hi</footer> */}
    </Fragment>
  )
}

export default Layout
