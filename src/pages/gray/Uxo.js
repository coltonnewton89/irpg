import React, { Component } from 'react';

class Uxo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="uxo_container">
                <h2><b>Unexploded Ordnance Safety</b></h2>
                <p>Unexploded ordnance (UXO) is most likely to be
                encountered on military or former military sites. UXO
                poses risk of injury or death to anyone in the vicinity.</p>
                <b>Situation Awareness</b>
                <p>
                • Early identification of potential UXO is the first
                and most important step in reducing risk posed by
                UXO.
                </p>
                <p>
                • Many types of UXO may be encountered:
                </p>
                <table>
                    <tr>
                        <td>Small arms munitions</td>
                        <td>Projectiles</td>
                    </tr>
                    <tr>
                        <td>Grenades</td>
                        <td>Rockets</td>
                    </tr>
                    <tr>
                        <td>Mortars</td>
                        <td>Guided missiles</td>
                    </tr>
                    <tr>
                        <td>Bombs</td>
                        <td>Sub munitions</td>
                    </tr>
                </table>
                <p>• UXO may be found fully intact or in fragments.
                All UXO, whether intact or in fragments,
                presents a potential hazard and should be treated
                as such.</p>
                <p>• Deteriorated UXO presents a particular hazard
                because it may contain chemical agents that
                could become exposed.</p>
                <br/>
                <b>Hazard Control</b>
                <p>
                • If you see UXO, stop and do not move closer. <br/> 
                • Isolate and clearly mark the area. <br/>
                • Deny entry to others. <br/>
                • Never transmit radio frequencies near UXO. <br/>
                • Never remove anything near UXO. <br/>
                • Never touch, move, or disturb UXO. <br/>
                • Keep a minimum of 1,000 feet away from areas
                on fire that contain suspected UXO. <br/>
                • Report discovery of UXO to your immediate
                supervisor. <br/>
                • U.S. Army Operations Center for incidents
                involving explosives and ammunition:
                (703) 697-0218.
                </p>
            </div>
         );
    }
}
 
export default Uxo;