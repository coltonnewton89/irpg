import React, { Component } from 'react';

class ContentYellow extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contentsYellow">
                    <h4>All Hazard Response</h4>
                    <a href="#vehicle_container" className='contentLink'>Vehicle Accident Operations</a>
                    <a href="#hazInc_container" className='contentLink'>HazMat Incident Operations</a>
                    <a href="#hazIso_container" className='contentLink'>HazMat Isolation Distances</a>
                    <a href="#hazclass_container" className='contentLink'>HazMat Classification for Fixed Facilities</a>
                    <a href="#local_container" className='contentLink'>Local Distance Response</a>
                    <a href="#allHaz_container" className='contentLink'>All Hazard Incident Response</a>
                    <a href="#structure_container" className='contentLink'>Structure Hazard Marking System</a>
                    <a href="#missingPerson_container" className='contentLink'>Missing Person Search Urgency</a>
                </div>
         );
    }
}
 
export default ContentYellow;