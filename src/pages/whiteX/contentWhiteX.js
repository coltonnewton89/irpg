import React, { Component } from 'react';

class ContentWhiteX extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contentsWhiteX">
                    <h4>X Pages</h4>
                    <a href="#sizeup_container" className='contentLink'><b>Size Up Report</b></a>
                    <a href="#briefing_container" className='contentLink'><b>Briefing Checklist</b></a>
                    <a href="#tensAndEighteens_container" className='contentLink'><b>Tens and Eighteens</b></a>
                    <a href="#irs_container" className='contentLink'>2018 introductions and revision summary</a>
                    <a href="#operational_container" className='contentLink'>Operational Leadership</a>
                    <a href="#com_container" className='contentLink'>Communication Responsibilities</a>
                    <a href="#com_container" className='contentLink'>Leader's Intent</a>
                    <a href="#human_container" className='contentLink'>Human Factor Barriers to Situation Awareness</a>
                    <a href="#aar_container" className='contentLink'>After Action Review (AAR)</a>
                </div>
         );
    }
}
 
export default ContentWhiteX;