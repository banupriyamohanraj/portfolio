import { Element } from "react-scroll"
import Resumecontent from "../Resumecontent/Resumecontent"
import './Resumecontainer.css'



export default function Skillcontainer(){
    return <>
    <Element name="resume" className="resumecontainer">
    <Resumecontent/>
    </Element>
    </>
}