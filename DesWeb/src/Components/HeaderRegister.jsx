
import Logo from '../Img/Header_Logo.png'; // Ajusta la ruta según corresponda
import { Link} from 'react-router-dom';
import "../Styles/Header.css";

function HeaderAdministracion() { 

    return (
      <header className='HeaderPrincipal '>
      <img src={Logo} alt="Logo" className="logo" />
      <nav className= "NavbarPrincipal">
        <Link to="/" className="nav-linkPrincipal">INICIO</Link>
      </nav>
    </header>
    );
  }
  
  export default HeaderAdministracion;
  