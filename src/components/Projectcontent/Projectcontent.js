import "./Projectcontent.css"
import Slide from 'react-reveal/Slide';


export default function Projectcontent() {

    let Project_Data = [
        {
            url: "https://urlshortener-fe.netlify.app",
            title: "url shortener app",
            img:"../Images/urlshortener.png"
            },
         {
            url: "https://invoice-fe.netlify.app",
            title: "Invoice Generator app",
            img:"../Images/Invoicegenerator.png"

            },
             {
            url: "https://recipe-task-promise.netlify.app/",
            title: "Receipe search API ",
            img:"../Images/receipe.png"

            }
        ]


    return <>
        <div className="Projectcontent">
            <div className="Project_title">
                <Slide left> <h3>Projects</h3> </Slide>
            </div>
            <Slide left>

                <div className="container-fluid projectCard__container">
                    <div class="row projectCard__container ">
                   
                       { 
                       
                       Project_Data.map((obj)=>{
                           return  <div className="col-4 cardcontainer"> 
                           <a href={obj.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                               <div class="col mb-4">
                                   <div class="card shadow">
                                       <img src={obj.img} class="card-img-top" alt="..." style={{
                                           "-webkit-filter": "blur(2px)",
                                           "filter": "blur(2px)"
                                       }} />
                                       <div class="card-body">
                                           <h5 class="card-title">{obj.title}</h5>
                                           <p class="card-text" ></p>
                                       </div>
                                   </div>
                               </div>
                           </a>
                           </div>
                       })

                    
                       }


                        {/* <div className="col-4">
                            <a href="https://invoice-fe.netlify.app" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                                <div class="col mb-4">
                                    <div class="card shadow">
                                        <img src="../Images/Invoicegenerator.png" class="card-img-top" alt="..." style={{
                                            "-webkit-filter": "blur(2px)",
                                            "filter": "blur(2px)"
                                        }} />
                                        <div class="card-body">
                                            <h5 class="card-title">Invoice Generator app</h5>
                                            <p class="card-text"></p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-4">
                            <a href="https://recipe-task-promise.netlify.app/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                                <div class="col mb-4">
                                    <div class="card shadow">
                                        <img src="../Images/receipe.png" class="card-img-top" alt="..." style={{
                                            "-webkit-filter": "blur(2px)",
                                            "filter": "blur(2px)"
                                        }} />
                                        <div class="card-body">
                                            <h5 class="card-title">Receipe search API</h5>
                                            <p class="card-text"></p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div> */}

                    </div>
                </div>
            </Slide>
        </div>
    </>
}