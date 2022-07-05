import logo from '../images/logo.png'

export default function Header() {
   return (
      <header className='header'>
         <img className='header-logo' src={logo}/>
         <h2 className='header-title'>Memes</h2>
      </header>
   )
}