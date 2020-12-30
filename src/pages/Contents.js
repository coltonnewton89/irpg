import React, { Component } from 'react';
import '../theme/contents.css'
import SimpleAccordion from '../components/Accordion'
import GrayMain from '../pages/gray/GrayMain'



class Contents extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contentsContainer">
                <h3 className='contentsTitle'>Table of Contents</h3>
                <SimpleAccordion/>
                <GrayMain/>
            </div>
         );
    }
}
 
export default Contents;