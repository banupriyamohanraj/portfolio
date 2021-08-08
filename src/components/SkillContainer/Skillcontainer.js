import { Element } from "react-scroll"
import Skillcontent from "../Skillcontent/Skillcontent"
import './Skillcontainer.css'



export default function Skillcontainer(){
    return <>
    <Element name="skills" className="skillcontainer">
    <Skillcontent/>
    </Element>
    </>
}