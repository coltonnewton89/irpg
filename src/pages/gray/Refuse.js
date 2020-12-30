import React, { Component } from 'react';

class Refuse extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="refuse_container" id='refuse_container'>
                <h2><b>How to Properly Refuse Risk</b></h2>
                <p>Every individual has the right and obligation to report
                safety problems and contribute ideas regarding their
                safety. Supervisors are expected to give these concerns
                and ideas serious consideration.</p>

                <b>When an individual feels an assignment is unsafe
                they also have the obligation to identify, to the
                degree possible, safe alternatives for completing
                that assignment. Turning down an assignment is
                one possible outcome of managing risk.</b>

                <p>A “turn down” is a situation where an individual has
                determined they cannot undertake an assignment as
                given and they are unable to negotiate an alternative
                solution.</p>

                <p>The turn down of an assignment must be based on an
                assessment of risks and the ability of the individual or
                organization to control those risks. Individuals may
                turn down an assignment as unsafe when:</p>
                <br/>
                1. There is a violation of safe work practices. <br/>
                2. Environmental conditions make the work unsafe. <br/>
                3. They lack the necessary qualifications or
                experience. <br/>
                4. Defective equipment is being used.
                <br/>
                <p>
                • The individual directly informs their supervisor
                they are turning down the assignment as given.
                Use the criteria outline in the Risk Management
                Process (Firefighting Orders, Watch Out
                Situations, etc.) to document the turn down. <br/>
                • The supervisor notifies the Safety Officer
                immediately upon being informed of the turn
                down. If there is no Safety Officer, the
                appropriate Section Chief or the Incident
                Commander should be notified. This provides
                accountability for decisions and initiates
                communication of safety concerns within the
                incident organization. <br/>
                • If the supervisor asks another resource to perform
                the assignment, they are responsible to inform the
                new resource that the assignment was turned
                down and the reasons why it was turned down. <br/>
                • If an unresolved safety hazard exists or an unsafe
                act was committed, the individual should also
                document the turn down by submitting a
                SAFENET (ground hazard) or SAFECOM
                (aviation hazard) form in a timely manner.
                </p>                
                <p>These actions do not stop an operation from being
                carried out. This protocol is integral to the effective
                management of risk as it provides timely identification
                of hazards to the chain of command, raises risk
                awareness for both leaders and subordinates, and
                promotes accountability.</p>
            </div>
         );
    }
}
 
export default Refuse;