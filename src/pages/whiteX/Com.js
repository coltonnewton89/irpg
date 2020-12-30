import React, { Component } from 'react';

class Com extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="com_shell">
                <div className='com_container' id='com_container'>
                <h2><b>Communication Responsibilites</b></h2>
                <p>All firefighters have five communication responsibilities:</p>
                <ul>
                    <li>Brief others as needed</li>
                    <li>Debrief your actions</li>
                    <li>Communicate hazards to others</li>
                    <li>Acknowledge messages</li>
                    <li>Ask if you don’t know</li>
                </ul>
            
                <h2><b>Leader's Intent</b></h2>
                <p>In addition, all leaders of firefighters have the
                responsibility to provide complete briefings and
                ensure that their subordinates have a clear
                understanding of their intent for the assignment:</p>
                <ul>
                    <li>Task = What is to be done</li>
                    <li>Purpose = Why it is to be done</li>
                    <li>End State = How it should look when done</li>
                </ul>
            </div>

            </div>            
         );
    }
}
 
export default Com;