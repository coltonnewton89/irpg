import React, { Component } from 'react';

class BriefingChecklist extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='briefing_container' id='briefing_container'>
                <h2 className='briefing_h'>
                    <b>BRIEFING CHECKLIST</b>
                </h2>
                <ul className='briefing_ul'>
                    <b>Situations</b>
                    <li className='briefing_li'><input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Fire name, location, map orientation, other incidents in area</li>
                    
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Terrain influences
                    </li>
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Fuel type and conditions
                    </li>
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Fire weather (previous, current, and expected)
                    </li>
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Winds, RH, temperature, etc
                    </li>
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Fire behavior (previous, current, and expected) <br/>
                    Time of day, alignment of slope and wind, etc.
                    </li>
                    <b>Mission/Exectution</b>
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Command <br/>
                    Incident Commander/immediate supervisor
                    </li>
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Leader's intent <br/>
                    Overall objectives/strategy
                    </li>
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Specific tactical assignments
                    </li>
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Contigency plans
                    </li>
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Medevac plan: Personnel, equipment, transport options, contigency plans.
                    </li>
                    <b>Communications</b>
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Communication plan <br/>
                    Tactical, command, air-to-ground frequencies, cell phone numbers.
                    </li>
                    <b>Service/Support</b>
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Other resources <br/>
                    Working adjacent and those available to order <br/> Avaiation operations
                    </li>
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Logistics <br/>
                    transportation <br/> Supplies and equipment
                    </li>
                    <b>Risk Management</b>
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Identify known hazards and risks
                    </li>
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Identify control measures to mitigate hazards/reduce risk. <br/>
                    INCLUDE LCES
                    </li>
                    <li className='briefing_li'>
                    <input type="checkbox" name="briefingCheck" className="briefingCheckBox"/>Identify trigger points for reevaluating operations
                    </li>
                    <b>Questions or Concerns?</b>
                </ul>
                
            </div>
         );
    }
}
 
export default BriefingChecklist;