import React, { Component } from 'react';

class CommonTactics extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="commonTactics_container" id='commonTactics_container'>
                <h2><b>Common Tactical Hazards</b></h2>
                <b>Position</b>
                <p>• Building fireline downhill.</p>
                <p>• Building undercut or mid-slope fireline.</p>
                <p>• Building indirect fireline or unburned fuel is between you and the fire.</p>
                <p>• Attempting frontal assault on the fire or you are delivered by aircraft to the top of the fire.</p>
                <p>• Establishing escape routes that are uphill or difficult to travel.</p>
                
                <b>Situation</b>
                <p>• Poor communication due to a rapidly emerging small fire or an isolated area of a large fire.</p>
                <p>• Suppression resources are fatigued or inadequate.</p>
                <p>• Assignment or escape route depends on aircraft support.</p>
                <p>• Nighttime operations.</p>
                <p>• Wildland Urban Interface operations.</p>

                <b>When selected tactics put firefighters in these
                positions or situations, a higher level of risk is
                involved. Consider additional hazard controls that
                may be needed.</b>
            </div>
         );
    }
}
 
export default CommonTactics;