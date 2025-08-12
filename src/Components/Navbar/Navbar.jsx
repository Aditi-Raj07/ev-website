import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
    <div className='nav-logo'>EV-olution</div>
    <ul className='nav-menu'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact' >Contact</li>

    </ul>
{/* When someone says “mount this NavBar to the App.jsx file”, they mean:

📍 “Add your <NavBar /> component inside the App.jsx so it becomes part of the app’s main UI.” */}




    </div>
  )
}

export default Navbar