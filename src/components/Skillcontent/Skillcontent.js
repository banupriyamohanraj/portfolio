import './Skillcontent.css'
import Slide from 'react-reveal/Slide';


export default function Skillcontent(){
    return <>
   
    <div className="Skillcontainer_skillset">
    <Slide top> <h2>Skills</h2></Slide>
    <Slide left>
    <div className="row Skillcontainer_skillicon">
        <div class="skill">
        <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" alt=""/>
    <p>HTML</p>
        </div>
    <div className="skill">
    <img src="https://img.icons8.com/color/96/000000/css3.png" alt=""/>
    <p>CSS</p>
    </div>
   <div className="skill">
   <img src="https://img.icons8.com/color/96/000000/javascript--v2.png" alt=""/>
   <p>javascript</p>
   </div>
   <div className="skill">
   <img src="https://img.icons8.com/color/96/000000/c-plus-plus-logo.png" alt=""/>
       <p>C++</p>
   </div>
  <div className="skill">
  <img src="https://img.icons8.com/color/96/000000/react-native.png" alt=""/>
      <p>React</p>
  </div>
   
</div>
</Slide>
<Slide right>
<div className="row Skillcontainer_skillicon">
    <div className="skill">
    <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt=""/>
        <p>Nodejs</p>
    </div>
   <div className="skill">
   <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt=""/>
       <p>Bootstrap</p>
   </div>
   <div className="skill">
   <img src="https://img.icons8.com/color/96/000000/mongodb.png" alt=""/>
       <p>Mongo DB</p>
   </div>
    <div className="skill">
    <img src="https://img.icons8.com/color/96/000000/sql.png" alt=""/>
        <p>My SQl</p>
    </div>
   <div className="skill">
   <img src="https://img.icons8.com/color/96/000000/git.png" alt=""/>
   <p>Git</p>
   </div>
   
    </div>
    </Slide>
    </div>

    
    
    
    </>
}