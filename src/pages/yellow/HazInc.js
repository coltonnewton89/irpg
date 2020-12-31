import React, { Component } from 'react';

class HazInc extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="hazInc_container" id='hazInc_container'>
                <h2><b>HazMat Incident Operations</b></h2>
                <br/>
                <b>Think Safety</b> <br/>
                • Assess situation.  <br/>
                • Safe approach: upwind/upgrade/upstream. <br/>
                • Identify, isolate, establish perimeter, and deny entry. <br/>
                • Notify agency dispatcher. <br/>
                • Exact location, use GPS. <br/>
                • Request needed assistance: identify a safe route.
                <br/> <br/>
                <b>Scene Management</b> <br/>
                • Goal is to protect life, environment and property. <br/>
                • Attempt to identify substance using 2112
                Emergency Response Guide (use binoculars,
                placards/labels, container shapes/colors, Material
                Safety Data Sheets, shipping papers, or license
                plate). <br/>
                • Assess quantity of material involved. <br/>
                • Identify exposures and hazards surrounding the
                site. <br/>
                • Anticipate weather influences. <br/> <br/>

                <b>Organizational Responsibilities</b> <br/>
                • Establish command including an IC and Safety Officer. <br/>
                • Develop action plan for area security and
                evacuation. <br/>
                • Advise all on scene and responding resources of
                changes in situation. <br/>
                • Keep dispatcher advised of changes. <br/>
                • Document all actions taken. <br/>
                • Make special note of any responder exposures. 

            </div>
         );
    }
}
 
export default HazInc;