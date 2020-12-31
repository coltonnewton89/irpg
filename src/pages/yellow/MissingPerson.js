import React, { Component } from 'react';

class MissingPerson extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="missingPerson_container" id='missingPerson_container'>
                <h2><b>Missing Person Search Urgency</b></h2>
                <table>
                    <tr>
                    <th><u>Factor</u></th>
                    <th><u>Rating</u></th>
                    </tr>
                    <tr>
                        <td>
                            <b>Age</b>
                        </td>
                    </tr>
                    <tr>
                        <td>Very Young</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Very old</td><td>1</td>
                    </tr>
                    <tr>
                        <td>Other</td><td>1</td>
                    </tr>
                    <tr>
                        <td><b>MEDICAL CONDITION</b></td><td>2-3</td>
                    </tr>
                    <tr>
                        <td>Known/suspected injured, ill or mental problem</td><td></td>
                    </tr>
                    <tr>
                        <td>Healthy</td><td>1-2</td>
                    </tr>
                    <tr>
                        <td>Know fatality</td><td>3</td>
                    </tr>
                    <tr>
                        <td><b>NUMBER OF SUBJECTS</b></td><td>3</td>
                    </tr>
                    <tr>
                        <td>One alone</td><td></td>
                    </tr>
                    <tr>
                        <td>More than one (unless separated)</td><td>1</td>
                    </tr>
                    <tr>
                        <td><b>SUBJECT EXPERIENCE PROFILE</b></td><td>2-3</td>
                    </tr>
                    <tr>
                        <td>Inexperienced, does not know area</td><td></td>
                    </tr>
                    <tr>
                        <td>Not experienced, knows area</td><td>1</td>
                    </tr>
                    <tr>
                        <td>Experienced, not familiar with area</td><td>1-2</td>
                    </tr>
                    <tr>
                        <td>Experienced, knows area</td><td>2</td>
                    </tr>
                    <tr>
                        <td><b>WEATHER PROFILE</b></td><td>3</td>
                    </tr>
                    <tr>
                        <td>Past and/or existing hazardous weather</td><td></td>
                    </tr>
                    <tr>
                        <td>Predicted hazardous weather (less than 8 hours away)</td><td>1</td>
                    </tr>
                    <tr>
                        <td>Predicted hazardous weather (more than 8 hours away)</td><td>1-2</td>
                    </tr>
                    <tr>
                        <td>No hazardous weather predicted</td><td>2</td>
                    </tr>
                    <tr>
                        <td><b>EQUIPMENT PROFILE</b></td> <td>3</td>
                    </tr>
                    <tr>
                        <td>Inadequate for environment and weather</td><td></td>
                    </tr>
                    <tr>
                        <td>Questionable for environment and weather</td><td>1</td>
                    </tr>
                    <tr>
                        <td>Adequate for environment and weather</td><td>1-2</td>
                    </tr>
                    <tr>
                        <td><b>TERRAIN/HAZARDS PROFILE</b></td><td>3</td>
                    </tr>
                    <tr>
                        <td>Known terrain or other hazards</td> <td></td>
                    </tr>
                    <tr>
                        <td>Few or no hazards</td><td>1</td>
                    </tr>
                    <tr>
                        TOTAL <td>2-3</td>
                    </tr>
                </table>
                (Range = 7-21, with 7 the highest urgency and 21 the lowest urgency)
            </div>
         );
    }
}
 
export default MissingPerson;