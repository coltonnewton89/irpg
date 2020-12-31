import React, { Component } from 'react';
import placard from '../../imgs/placard.png'

class HazClass extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="hazclass_container" id='hazclass_container'>
                <h2><b>HazMat Classification for Fixed Facilities</b></h2>
                <b>Based on NFPA 704</b>
                <table>
                    <tr>
                        <th>
                            HEALTH HAZARD
                        </th>
                        <th>FIRE HAZARD</th>
                    </tr>
                    <tr>
                        <td>
                        4 Deadly <br/>
                        3 Extreme Danger <br/>
                        2 Hazardous <br/>
                        1 Slightly Hazardous <br/>
                        0 Normal Material
                        </td>
                        <td>
                        4 Below 73ºF <br/>
                        3 Below 100ºF <br/>
                        2 Above 100ºF not
                        exceeding 200ºF <br/>
                        1 Above 200ºF <br/>
                        0 Will not burn
                        </td>
                    </tr>
                </table>
                <img src={placard} className='placard' alt="hazmat placard diamond"/>
                <table>
                    <tr>
                        <th>
                            SPECIFIC HAZARD
                        </th>
                        <th>
                            REACTIVITY
                        </th>
                    </tr>
                    <tr>
                        <td>
                        ACID – Acid <br/>
                        ALK – Alkali<br/>
                        COR – Corrosive<br/>
                        OX – Oxidizer<br/>
                        &#9762; Radioactive<br/>
                        <strike>W</strike> – Use no water<br/>
                        SA – Simple asphyxiant<br/>
                        POI – Poisonous
                        </td>
                        <td>
                        4 May detonate <br/>
                        3 Shock and heat may
                        detonate <br/>
                        2 Violent chemical
                        change <br/>
                        1 Unstable if heated <br/>
                        0 Stable <br/>
                        </td>
                    </tr>
                </table>
            </div>
         );
    }
}
 
export default HazClass;