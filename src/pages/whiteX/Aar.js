import React, { Component } from 'react';

class Aar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="aar_container" id='aar_container'>
                <h2><b>After Action Review (AAR)</b></h2>
                <p>The climate surrounding an AAR must be one in
                which the participants openly and honestly discuss
                what transpired, in sufficient detail and clarity, so
                everyone understands what did and did not occur and
                why.</p>

                <p>Most importantly, participants should leave with a strong desire to improve their proficiency.</p>
                <ul>
                    <li>An AAR is performed as immediately after the event as possible by the personnel involved.</li>
                    <li>The leader’s role is to ensure skilled facilitation of the AAR.</li>
                    <li>Reinforce that respectful disagreement is okay. Keep focused on the what, not the who.</li>
                    <li>Make sure everyone participates.</li>
                    <li>End the AAR on a positive note.</li>
                </ul>
                <b>What was planned?</b> <br/>
                <b>What actually happened?</b> <br/>
                <b>Why did it happen?</b> <br/>
                <b>What can we do next time?</b> <br/>
                <br/>
            </div>
         );
    }
}
 
export default Aar;