import './Contactcontainer.css'
import { Element } from 'react-scroll'

import Contactcontent from '../Contactcontent/Contactcontent';

export default function Contactcontainer() {
    return <>
        <Element name="contact" className="Contactcontainer">
         
            <Contactcontent></Contactcontent>
       

        </Element>
    </>
}