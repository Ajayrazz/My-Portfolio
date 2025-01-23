import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/ARLogo.png';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className='mx-2' width={50} height={33} alt="Logo" />
            </a>
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/ajay-razz/"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Linkedin'>
                    <FaLinkedin />
            </a>

            <a href="https://github.com/Ajayrazz"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'>
                    <FaGithub />
            </a>

            <a href="https://www.instagram.com/arav_ajay_pratap/"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'>
                    <FaInstagram />
            </a>

            <a href="https://x.com/AjayRaz18514034"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'>
                    <FaSquareXTwitter />
            </a>

        </div>
    </nav>
  )
}

export default Navbar