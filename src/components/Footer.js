import './Footer.css';
import * as React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer>
      <div>
        <img src='https://logodownload.org/wp-content/uploads/2020/11/disney-plus-logo-1.png' title='disney-logo' alt='disney-logo' />
      </div>
      <navbar className='navBar-footer'>
        <ul>
          <li><Link to="/list">Inicio</Link></li>
          <li><Link to="/privacy">Politicas de Privacidad</Link></li>
          <li><Link to="/legals">Acuerdo Subscripcion</Link></li>
          <li><Link to="/cancel">Cancelar Subscripcion</Link></li>
          <li><Link to="/help">Ayuda</Link></li>
          <li><Link to="/originals">Originales</Link></li>
        </ul>
        <p>Disney+ es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad.
         El servicio Disney+ es comercializado por The Walt Disney Company (Argentina) 
         S.A., Tucumán 1, Piso 4º (C1049AAA) Ciudad Autónoma de Buenos Aires, 
         Argentina y número de CUIT 30-63984459-1.
        </p>
        <span>
          © Disney. Todos los derechos reservados.
        </span>
      </navbar>
    </footer>
  );
}

export default Footer;
