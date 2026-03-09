import { NavLink, Outlet } from 'react-router-dom';
import '../assets/css/ReactPractice.css'
import '../assets/css/Practice.css'
import { reactPractice } from '../data/routes';

function ReactPractise() {

  return (
    <div className='reactCon'>
      <ul className='reactMenu'>
        {reactPractice.map(({path}) => {
          return <li key={path}><NavLink to={`/reactPractice/${path}`}>{path}</NavLink></li>
        })}
      </ul>
      <div className='reactContainer'>
          <Outlet />
      </div>
    </div>
  )
}

export default ReactPractise