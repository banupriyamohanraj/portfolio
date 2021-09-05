import { Link } from 'react-scroll'
import './Header.css'

export default function Header() {
    return <>
        <div className="header">
            <div className="header__left">
        BANU
            </div>
            <div className="header__right">
          
               <Link to="about" smooth={true} duration={500} activeClass="active" offset={-70} >
                    <h4>ABOUT</h4>
                </Link>
              
                <Link to="skills" smooth={true} duration={500}  offset={-70} >
                   <h4> SKILLS</h4>
                </Link>
                <Link to="projects" smooth={true} duration={500}  offset={-70}>
                   <h4> PROJECTS</h4>
                </Link>
                <Link to="contact" smooth={true} duration={500}  offset={-70}>
                   <h4> CONTACT</h4>
                </Link>
            
            </div>
        </div>

    </>
}