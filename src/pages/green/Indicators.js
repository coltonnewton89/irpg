import React, { Component } from 'react';

class Indicators extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="indicators_container" id='indicators_container'>
                <h2><b>Indicators of Incident Complexity</b></h2>
                <p>Common indicators may include the area (location) involved, political
                sensitivity, organizational complexity, jurisdictional boundaries, values at
                risk, weather, and threat to life, environment and property. Most indicators
                are common to all incidents, but some may be unique to a particular type of
                incident. The following are common contributing indicators for initial
                attack and extended attack complexity types.</p>

                <b>Type 5 Incident Complexity Indicators</b>
                <table>
                    <tr>
                        <th>General Indicators</th>
                        <th>Span of Control Indicators</th>
                    </tr>
                    <tr>
                        <td>
                            • Incident is typically terminated or concluded
                            (objective met) within a short time once
                            resources arrive on scene. <br/>
                            • For incidents managed for resource
                            objectives, minimal staffing/oversight is
                            required. <br/>
                            • One to five single resources may be needed. <br/>
                            • Formal Incident Planning Process not needed. <br/>
                            • Written Incident Action Plan (IAP) not needed. <br/>
                            • Minimal effects to population immediately surrounding the incident. <br/>
                            • Critical infrastructure, or key resources, not adversely affected. <br/>
                        </td>
                        <td>
                            • Incident Commander (IC) position filled. <br/>
                            • Single resources are directly supervised by the IC. <br/>
                            • Command Staff or General
                            Staff positions not needed
                            to reduce workload or span
                            of control.
                        </td>
                    </tr>
                </table>
                <br/>
                <b>Type 4 Incident Complexity Indicators</b>
                <table>
                    <tr>
                        <th>General Indicators</th>
                        <th>Span of Control Indicators</th>
                    </tr>
                    <tr>
                        <td>
                        • Incident objectives are typically met within
                        one operational period once resources arrive
                        on scene, but resources may remain on scene
                        for multiple operational periods. <br/>
                        • Multiple resources (over 6) may be needed. <br/>
                        • Resources may require limited logistical
                        support. <br/>
                        • Formal Incident Planning Process not needed. <br/>
                        • Written IAP not needed. <br/>
                        • Limited effects to population surrounding
                        incident. <br/>
                        • Critical infrastructure or key resources may be adversely affected, but mitigation
                        measures are uncomplicated and can be
                        implemented within one operational period. <br/>
                        • Elected and appointed governing officials,
                        stakeholder groups, and political
                        organizations require little or no interaction.
                        </td>
                        <td>
                        • IC role filled. <br/>
                        • Resources either directly
                        supervised by the IC or
                        supervised through an ICS
                        Leader position. <br/>
                        • Task Forces or Strike
                        Teams may be used to
                        reduce span of control to
                        an acceptable level. <br/>
                        • Command Staff positions
                        may be filled to reduce
                        workload or span of
                        control. <br/>
                        • General Staff positions
                        may be filled to reduce
                        workload or span of
                        control.
                        </td>
                    </tr>
                </table>
                <br/>
                <b>Type 3 Incident Complexity Indicators*</b>
                <table>
                    <tr>
                        <th>General Indicators</th>
                        <th>Span of Control Indicators</th>
                    </tr>
                    <tr>
                        <td>
                        • Incident typically extends into multiple operational periods. <br/>
                        • Incident objectives usually not met within the first or second operational period. <br/>
                        • Resources may need to remain at scene for multiple operational periods, requiring logistical support. <br/>
                        • Numerous kinds and types of resources may be required. <br/>
                        • Formal Incident Planning Process is initiated and followed. <br/>
                        • Written IAP needed for each operational period. <br/>
                        • Responders may range up to 200 total personnel. <br/>
                        • Incident may require an incident base to provide support. <br/>
                        • Population surrounding incident affected. <br/>
                        • Critical infrastructure or key resources may be adversely affected and actions to mitigate effects may extend into multiple operational periods. <br/>
                        • Elected and appointed governing officials, stakeholder groups, and political organizations require some level of interaction. <br/>
                        </td>
                        <td>
                        • IC role filled.
                        • Numerous resources
                        supervised
                        indirectly through
                        the establishment
                        and expansion of
                        the Operations
                        Section and its
                        subordinate
                        positions. <br/>
                        • Division
                        Supervisors, Group
                        Supervisors, Task
                        Forces, and Strike
                        Teams used to
                        reduce span of
                        control to an
                        acceptable level. <br/>
                        • Command Staff
                        positions filled to
                        reduce workload or
                        span of control. <br/>
                        • General Staff
                        positions filled to
                        reduce workload or
                        span of control. <br/>
                        • ICS functional units
                        may need to be
                        filled to reduce
                        workload.
                        </td>
                    </tr>
                </table>
                <p>*If multiple Type 3 Incident Complexity Indicators are
                exceeded, consider the next level of incident management
                support.</p>
            </div>
         );
    }
}
 
export default Indicators;