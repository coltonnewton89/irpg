import React, { Component } from 'react';

class Human extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="human_container" id='human_container'>
                <h2><b>Human Factor Barriers to Situation Awareness</b></h2>
                <b>Low Experience Level with Local Factors</b>
                <li>Unfamiliar with the area or the organizational structure.</li>
                <br/>
                <b>Distraction from Primary Task</b>
                <ul>
                <li>Radio traffic</li>
                <li>Conflict</li>
                <li>Previous errors</li>
                <li>Collateral duties</li>
                <li>Incident within an incident</li>
                </ul>
                <br/>
                <b>Fatigue</b>
                <li>Carbon monoxide</li>
                <li>Dehydration</li>
                <li>Heat stress</li>
                <li>Poor fitness level can reduce resistance to fatigue</li>
                <li>24 hours awake affects your decision making capability like .10 blood alcohol content</li>
                <br/>
                <b>Stress Reactions</b>
                <ul>
                <li>Communication deteriorates or grows tense</li>
                <li>Habitual or repetitive behavior</li>
                <li>Target fixation – Locking into a course of action; whether it makes sense or not, just try harder</li>
                <li>Action tunneling – Focusing on small tasks, but ignoring the big picture</li>
                <li>Escalation of commitment – Accepting increased risk as completion of task gets near</li>
                <br/>
                <b>Hazardous Attitudes</b>
                <ul>
                <li>Invulnerable – That can’t happen to us</li>
                <li>Anti-authority – Disregard of the team effort</li>
                <li>Impulsive – Do something even if it’s wrong</li>
                <li>Macho – Trying to impress or prove something</li>
                <li>Complacent – Just another routine fire</li>
                <li>Resigned – We can’t make a difference</li>
                <li>Group Think – Afraid to speak up or disagree</li>
                </ul>
                </ul>
            </div>
         );
    }
}
 
export default Human;