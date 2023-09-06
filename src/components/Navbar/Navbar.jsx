import { Link } from 'react-router-dom';
import { CartWidget } from "../CartWidget/CartWidget";
import Nav from 'react-bootstrap/Nav';
import "./navbar.css";


export const Navbar = () => {
	return (
		<Nav className="container--navbar">
			
			<Link to="/" className="navbar--logo">
			<img src="https://th.bing.com/th/id/R.beff8d5b256f2731d6b462a53093702e?rik=sgvZFGlVVIPXRw&riu=http%3a%2f%2fappletechtalk.com%2fwp-content%2fuploads%2f2018%2f08%2fLogitech-G-Logo.jpg&ehk=3%2bOE3KSQLpOZmgZilFugag3As3EhXtKTGUH4qmbYVQU%3d&risl=&pid=ImgRaw&r=0" alt="Logo" />
			</Link>

			
			<ul className="navbar--ul">
				<li className="navbar--ul--li">
          <Link to="/category/teclados" className="navbar--ul--li--a">TECLADOS</Link>
				</li>
				<li className="navbar--ul--li">
					
          <Link to="/category/mouse" className="navbar--ul--li--a">MOUSE</Link>
				</li>
				<li className="navbar--ul--li">
					
          <Link to="/category/audio" className="navbar--ul--li--a">AURICULARES</Link>
				</li>
        <li className="navbar--ul--li">
					
          <Link to="/category/accesorios" className="navbar--ul--li--a">ACCESORIOS</Link>
				</li>
			</ul>

		
			<CartWidget />
		</Nav>
	);
};
