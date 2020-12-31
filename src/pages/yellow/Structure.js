import React, { Component } from 'react';
import squareSlash from '../../imgs/squareSlash.png'
import squareEx from '../../imgs/squareEx.png'

class Structure extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="structure_container" id='structure_container'>
                <h2><b>Structure Hazard Marking System</b></h2>
                <p>
                Never enter a damaged structure unless trained, equipped,
                and authorized. You may find a 2' x 2' box at the entrance to
                indicate the condition of the structure. Use orange spray paint
                or a lumber crayon to mark inside the box.
                </p>
                <p>
                &#9744; Structure is safe for Search and Rescue (SAR) with minor damage, or structure is fully collapsed.
                </p>
                <p>
                    <img src={squareSlash} className='squareSlash' alt="square with slash"/> Structure is significantly damaged with some safe areas
                but other areas which need to be shored up or braced.
                Falling and collapse hazards need to be removed.
                </p>
                <p>
                    <img src={squareEx} className='squareEx' alt="square with x"/> Structure is unsafe and may collapse suddenly.
                </p>
                <p>
                &#8592; Entrance is located in direction of the arrow.
                </p>
                <p>
                    <b>HM</b> Hazardous material is present.
                </p>
                <p>
                This information should be found outside the upper right
                portion of the box:
                </p> <br/>
                • Specialist ID <br/>
                • Time and date of assessment <br/>
                • Hazardous materials identified <br/>
                <p>
                SAR teams should also mark structures as they conduct operations.
                </p>
                <p>
                <b>/</b> Single slash (2' long) indicates SAR Team is currently in structure conducting operations.
                </p>
                <p>
                <b>X</b> Cross/slash (2' x 2') indicates SAR Team has left structure/area.
                </p>
                This information should be found in the four quadrants of the cross slash:
                <table>
                    <tr>
                        <td>
                        • SAR Team ID <br/>
                        • Time and date team left structure <br/>
                        • Personnel hazards <br/>
                        • Number of victims stil inside structure("X" indicates no victims remaining)
                        </td>
                        <td>
                            Left quadrant <br/>
                            Upper quadrant <br/>
                            Right quadrant <br/>
                            Lower quadrant
                        </td>
                    </tr>
                </table>
            </div>
         );
    }
}
 
export default Structure;