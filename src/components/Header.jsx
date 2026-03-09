import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div id="header">
            <h1><Link to='/'>LOGO</Link></h1>
            <menu>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/reactPractice'>React Practice</NavLink></li>
            </menu>

            <div>
              <a href="http://localhost:8000/" id='go_to_php'><p>Php Practice</p></a>
            </div>
        </div>
    </header>
  )
}

export default Header