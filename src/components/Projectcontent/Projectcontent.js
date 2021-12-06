import "./Projectcontent.css"
// import { useState } from "react";

export default function Projectcontent() {



    let Project_Data = [
        {
            url: "https://urlshortener-fe.netlify.app",
            title: "url shortener app",
            img:"../Images/urlshortener.png",
            githublink : "https://github.com/banupriyamohanraj/urlShortener-FE"
            },
         {
            url: "https://invoice-fe.netlify.app",
            title: "Invoice Generator app",
            img:"../Images/Invoicegenerator.png",
            githublink : "https://github.com/banupriyamohanraj/invoice-fe"

            },
             {
            url: "https://recipe-task-promise.netlify.app/",
            title: "Receipe search ",
            img:"../Images/receipe.png",
            githublink : "https://github.com/banupriyamohanraj/recipe-task"

            },
            {
                url: "https://cloudapp-mern.netlify.app",
                title: "Cloud App ",
                img:"../Images/cloud.png",
                githublink : "https://github.com/banupriyamohanraj/cloudapp"
               
                },
                {
                    url: "https://cakes-site.netlify.app/",
                    title: "E-commerce site",
                    img:"../Images/E-comm.png",
                    githublink : "https://github.com/banupriyamohanraj/cake-site"

                }
        ]



    return <>
        <div className="Projectcontent">
            <div className="Project_title">
               <h2>Projects</h2> 
            </div>
         










         

            {/* <div class="container">
                <div class="row people d-flex justify-content-center"> */}

        {/* {
            Project_Data.map((obj)=>{

return   <div class="col-md-5 col-lg-4 item">
<div class="box" style={{"background-image":`url(${obj.img})`}}>
    <div class="cover">
        <h3 class="name">{obj.title}</h3>
        
        <div class="social">
            <a href={obj.url} target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a>
          
            </div>
    </div>
</div>
</div>


            })
        } */}
                    
           
{/*                    
                       { 
                       
                       Project_Data.map((obj)=>{
                           return  <div className="col-4 cardcontainer"> 
                         
                               <div class="col mb-4">
                                   <div class="card shadow">
                                       <div className="myDIV">
                                   <a href={obj.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                                       <img src={obj.img} class="card-img-top" alt="..." style={{
                                           "-webkit-filter": "blur(2px)",
                                           "filter": "blur(2px)"
                                       }} />
                                         </a>
                                         </div>
                                       <div class="hide">
                                           <h5 class="card-title">{obj.title}&emsp;&emsp; <a href={obj.githublink} target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/fluency/40/000000/github.png" alt="github" />
                  </a></h5>
                                          
                                       </div>
                                   </div>
                               </div>
                         
                           </div>
                       })

                    
                       } */}


                        

                    {/* </div>
                </div> */}





<div class="team-grid">
     <div class="container-fluid">
         <div class="row people d-flex justify-content-center">
  {
            Project_Data.map((obj)=>{

return   <div class="col-md-4  item p-3 ">
<div class="box" style={{"background-image":`url(${obj.img})`}}>
    <div class="cover">
        <h3 class="name">{obj.title}</h3>
        
        <div class="social">
            <a href={obj.githublink} target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a>
            <a href={obj.url} target="_blank" rel="noreferrer"><i class="fa fa-eye"></i></a>
            </div>
    </div>
</div>
</div>
            })
        }
         </div>
     </div>
 </div>
         
        </div>
    </>
}