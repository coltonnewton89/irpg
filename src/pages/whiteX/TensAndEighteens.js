import React, { Component } from 'react';

class TensAndEighteens extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='tensAndEighteens_container' id='tensAndEighteens_container'>
                <h2>STANDARD FIREFIGHTING ORDERS</h2>
                <ol>
                    <li>Keep informed on fire weather conditions and forecasts.</li>
                    <li>Know what your fire is doing at all times.</li>
                    <li>Base all actions on current and expected behavior of fire.</li>
                    <li>Identify escape routes and safety zones, and make them known.</li>
                    <li>Post lookouts when there is possible danger.</li>
                    <li>Be alert. Keep calm. Think clearly. Act decisively.</li>
                    <li>Maintain prompt communications with your forces, your supervisor, and ajoing forces.</li>
                    <li>Give clear instructions and be sure they are understood.</li>
                    <li>Maintain control of your forces at all times.</li>
                    <li>Fight fire aggresively, having provided for safety first.</li>
                </ol>

                <h2>WATCH OUT SITUATIONS</h2>
                <ol>
                    <li>Fire not scouted and sized up.</li>
                    <li>In country not seen in daylight.</li>
                    <li>Safety zones and escape routes not identified.</li>
                    <li>Unfamiliar with weather and local factors influencing fire behavior.</li>
                    <li>Uninformed on strategy, tactics, and hazards.</li>
                    <li>Instructions and assignments not clear.</li>
                    <li>No communication link with crewmembers or supervisor.</li>
                    <li>Construction line without safe anchor point.</li>
                    <li>Building fireline downhill with fire below.</li>
                    <li>Attempting frontal assault on fire.</li>
                    <li>Unburned fuel between you and fire.</li>
                    <li>Cannot see mainfire; not in contact with someone who can.</li>
                    <li>On a hillside where rolling material can ignite fuel below.</li>
                    <li>Weather becoming hotter and drier.</li>
                    <li>Wind increases and/or changes direction.</li>
                    <li>Getting frequent spot fires across line.</li>
                    <li>Terrain and fuels make escape to safety zones difficult.</li>
                    <li>Taking a nap near fireline.</li>
                </ol>
            </div>
         )
    }
}
 
export default TensAndEighteens;