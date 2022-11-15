import Link from 'next/link'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div style={{height:'100vh'}}>
        <nav>
            <ul style={{display:'flex',justifyContent:'center', listStyle:'none'}}>
               <li style={{marginRight:'20px'}}>
                    <Link href={'/'}>Home</Link>
                </li> 
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                
            </ul>
        </nav>
        {children}
    </div>
  )
}

export default Layout