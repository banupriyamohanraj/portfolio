import React from 'react'
import './Resumecontent.css'
import Slide from 'react-reveal/Slide';

function Resumecontent() {
  return (<>
  <Slide left> <div className="Resumecontent">
            <div className="Resume_title ">
               <h2>Resume</h2> 
            </div>
            <br/>
            <div className="container-fluid">
                <div className="row pt-4">
                <div className="col-6">
                    <section class="EducationSection ">
			<span style={{"font-weight": "bold","font-size": "26px"}}>Summary</span><br/><br/>
			<p><h2>Banupriya Mohanraj</h2></p><br/>
			<ul>
            <li><b>chennai,India</b></li>
                <li>(91) 7358383981</li>	
                <li>banupriyamohanrajoffl@gmail.com</li>
			</ul>
            <br/>
		</section>
            <section class="EducationSection ">
			<i class="fa fa-graduation-cap fa-2x"></i>&ensp;<span style={{"font-weight": "bold","font-size": "26px"}}>Education</span><br/><br/>
			<p><b>MSc Information System Management</b><span style={{"float":"right"}}>01/2019-6/2020</span></p><br/>
		
           
			<ul>
            <li><b>De Montfort University, United Kingdom</b></li>
                <li>CGPA - 6.5</li>	
           
			</ul>
		</section>
        <br/>
        <section class="EducationSection ">
        
			<p><b>B.Tech Information Technology</b><span style={{"float":"right"}}>8/2012-04/2016</span></p>
			
            <br/>
			<ul>
                <li><b>Sri venkateswara college of engineering, chennai</b></li>
                <li>CGPA - 6.5</li>	
			</ul>
		</section>
        
            </div>
            <div className="col-6">
            <section class="workSection ">
			<i class="fa fa-briefcase fa-2x"></i>&ensp;<span style={{"font-weight": "bold","font-size": "26px"}}>Work experience</span><br/><br/>
			<p><b>Automation Tester</b><span style={{"float":"right"}}>12/2016-02/2018</span></p><br/>
			<p>Accenture Solutions Pvt Ltd</p>
			<ul><li>Created accurate and efficient test scripts in Selenium, UFT to manage automated testing of certain products and features.</li>
				<li>Analysing test results, capturing overall test coverage and efficiency, comparing with expected business SLA.</li>
				<li>Identified and tracked defects with HP ALM and supported developers in resolving problems by completing additional tests</li>
				<li>Effectively interacted with Developing and Support departments regarding software defects, worked closely to develop innovative solutions.</li>
			</ul>
		</section>
        </div>  
                </div>
            </div>
           
      
           
            </div>
            </Slide>
  </>)
}

export default Resumecontent
