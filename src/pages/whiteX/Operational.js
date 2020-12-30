import React, { Component } from 'react';

class Operational extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="operational_shell">
                <div className="operational_container" id='operational_container'>
                <h2>Operational Leadership</h2>
                <p>The most essential element of successful wildland
                firefighting is competent and confident leadership.</p>
                <p>Leadership means providing purpose, direction, and
                motivation for wildland firefighters working to
                accomplish difficult tasks under dangerous, stressful
                circumstances</p>
                <p>In confusing and uncertain situations, a good operational leader will:</p>
                <ul className='operational_ul'>
                    <li>TAKE CHARGE of assigned resources.</li>
                    <li>ASSESS SITUATION by gaining intel.</li>
                    <li>MOTIVATE firefighters with a “can do safely” attitude.</li>
                    <li>DEMONSTRATE INITIATIVE by taking action in the absence of orders.</li>
                    <li>COMMUNICATE by giving specific instructions and asking for feedback.</li>
                    <li>SUPERVISE at the scene of action.</li>
                </ul>
            </div>
            
            <div className="duty_container">
                <h2>DUTY</h2>
                <b>Be proficient in your job, both technically and as a leader</b>
                <ul>
                    <li>Take charge when in charge.</li>
                    <li>Adhere to professional standard operating procedures.</li>
                    <li>Develop a plan to accomplish given objectives.</li>
                </ul>
                <b>Make sound and timely decisions</b>
                <ul>
                    <li>Maintain situation awareness in order to anticipate needed actions.</li>
                    <li>Develop contingencies and consider consequences.</li>
                    <li>Improvise within the leader’s intent to handle a rapidly changing environment.</li>
                </ul>
                <b>Ensure tasks are understood, supervised, and accomplished</b>
                <ul>
                    <li>Issue clear instructions.</li>
                    <li>Observe and assess actions in progress without micromanaging.</li>
                    <li>Use positive feedback to modify duties, tasks, and assignments when appropriate.</li>
                </ul>
                <b>Develop your subordinates for the future</b>
                <ul>
                    <li>Clearly state expectations.</li>
                    <li>Delegate tasks that you are not required to do personally.</li>
                    <li>Consider individual skill levels and developmental needs when assigning tasks.</li>
                </ul>
            </div>

            <div className="respect_container">
                <h2>RESPECT</h2>
                <b>Know your subordinates and look out for their well-being</b>
                <ul>
                    <li>Put the safety of your subordinates above all other objectives.</li>
                    <li>Take care of your subordinates needs.</li>
                    <li>Resolve conflicts between individuals on the team.</li>
                </ul>
                <b>Keep your subordinates informed</b>
                <ul>
                    <li>Provide accurate and timely briefings.</li>
                    <li>Give the reason (intent) for assignments and tasks.</li>
                    <li>Make yourself available to answer questions at appropriate times.</li>
                </ul>
                <b>Build the team</b>
                <ul>
                    <li>Conduct frequent debriefings with the team to identify lessons learned.</li>
                    <li>Recognize individual and team accomplishments and reward them appropriately.</li>
                    <li>Apply disciplinary measures equally.</li>
                </ul>
                <b>Employ your subordinates in accordance with their capabilities</b>
                <ul>
                    <li>Observe human behavior as well as fire behavior.</li>
                    <li>Provide early warning to subordinates of tasks they will be responsible for.</li>
                    <li>Consider team experience, fatigue, and physical limitations when accepting assignments.</li>
                </ul>
            </div>

            <div className="integrity_container">
                <h2>INTEGRITY</h2>
                <b>Know yourself and seek improvement</b>
                <ul>
                    <li>Know the strengths and weaknesses in your character and skill level.</li>
                    <li>Ask questions of peers and superiors.</li>
                    <li>Actively listen to feedback from subordinates.</li>
                </ul>
                <b>Seek responsibility and accept responsibility for your actions</b>
                <ul>
                    <li>Accept full responsibility for poor team performance.</li>
                    <li>Credit subordinates for good performance.</li>
                    <li>Keep your superiors informed of your actions.</li>
                </ul>
                <b>Set the example</b>
                <ul>
                    <li>Share the hazards and hardships with your subordinates.</li>
                    <li>Don’t show discouragement when facing setbacks.</li>
                    <li>Choose the difficult right over the easy wrong.</li>
                </ul>
            </div>
            </div>            
         );
    }
}
 
export default Operational;