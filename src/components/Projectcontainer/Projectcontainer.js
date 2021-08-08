import './Projectcontainer.css'
import { Element } from 'react-scroll'
import Projectcontent from '../Projectcontent/Projectcontent'

export default function Projectcontainer(){
    return <>
<Element name="projects" className="Projectcontainer">
    <Projectcontent/>
</Element>
    
    </>

}