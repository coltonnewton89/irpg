import React, { Component } from 'react';

class RiskManagement extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="riskManagement_container" id='riskManagement_container'>
                <h2><b>Risk Management</b></h2>
                <b>Identify Hazards(Situation Awareness)</b>
                <div className="shellDivOne">
                <p>• Gather Information</p> <br/>
                <div className="divOne">
                <p>□ Objective(s)</p>
                <p>□ Communication</p> 
                <p>□ Who’s in Charge</p>
                </div>
                <div className="divTwo">
                <p>□ Previous Fire Behavior</p>
                <p>□ Weather Forecast</p> 
                <p>□ Local Factors</p>
                </div>
                <p>• Scout the Fire</p>
                </div>
                <b>Assess Hazards</b>
                <div className="shellDivTwo">
                    <p>• Estimate Potential Fire Behavior Hazards</p>
                    <p>□ Look Up/Down/Around Indicators</p>
                    <p>• Identify Tactical Hazards</p>
                    <p>□ Watch Outs</p>
                    <p>• As conditions change, what other safety hazards are likely to exist?</p>
                    <p>• Consider probability versus severity?</p>

                    <b>Develop Controls and Make Risk Decisions</b>
                    <p>• Develop control measures that reduce risk:</p>
                    <p>□ Firefighting Orders &#8594; LCES</p>
                    <p>- Anchor Point</p>
                    <p>- Downhill Checklist (if applicable)</p>
                    <p>□ What other controls are necessary?</p>
                    <p>- Engineering/Administrative</p>
                    <p>-PPE</p>
                    <p>- Educational</p>
                    <p>- Avoidance</p>
                    <p>□ Emergency Medevac Procedures/Plan</p>
                    <p>• Are controls in place to mitigate risk?</p>
                    <p>NO - Reassess situation □ YES - Next question</p>
                    <p>• Are selected tactics based on expected fire behavior?</p>
                    <p>NO - Reassess situation □ YES - Next question</p>
                    <p>• Have instructions been given and understood?</p>
                    <p>NO - Reassess situation □ YES - Next question</p>
                    <p>• Consider risk versus gain</p>

                    <b>Implement Controls</b>
                    <p>• Ensure controls are in place and being implemented by personnel.</p>
                    <p>• Ensure controls are integrated into operational plan and understood at all levels.</p>

                    <b>Supervise and Evaluate</b>
                    <p>• Are controls adequately mitigating the hazards?</p>
                    <p>□ NO – Reassess and consider:</p>
                    <p>– Human Factors:</p>
                    <p>o Low experience level?</p>
                    <p>o Distracted from primary tasks?</p>
                    <p>o Fatigue or stress reaction?</p>
                    <p>o Unsafe attitude?</p>
                    <p>- The Situation:</p>
                    <p>o What is changing?</p>
                    <p>o Are strategy and tactics working?</p>
                    <b>If the situation changes significantly, restart Risk Management Process at the appropriate step</b>
                    
                </div>
                
            </div>
         );
    }
}
 
export default RiskManagement;