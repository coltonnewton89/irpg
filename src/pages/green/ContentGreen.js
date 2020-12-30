import React, { Component } from 'react';

class ContentGreen extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contentsGreen">
                    <h4>Operational Engagement</h4>
                    <a href="#riskManagement_container" className='contentLink'>Risk Management</a>
                    <a href="#planningFor_container" className='contentLink'>Planning for Medical Emergencies</a>
                    <a href="#lookUp_container" className='contentLink'>Look Up, Down and Around</a>
                    <a href="#commonDen_container" className='contentLink'>Common Denominators of Fire Behavior on Tragedy Fires</a>
                    <a href="#commonTactics_container" className='contentLink'>Common Tactical Hazards</a>
                    <a href="#lces_container" className='contentLink'>LCES</a>
                    <a href="#safety_container" className='contentLink'>Safety Zones</a>
                    <a href="#downHill_container" className='contentLink'>Downhill Checklist</a>
                    <a href="#indicators_container" className='contentLink'>Indicators of Incident Complexity</a>
                    <a href="#wui_container" className='contentLink'>Wildland Urban Interface Firefighting</a>
                </div>
         );
    }
}
 
export default ContentGreen;