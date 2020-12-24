import React, { Component } from 'react';
import '../theme/contents.css'
import ContentWhiteX from './whiteX/contentWhiteX';
import ContentGreen from './green/ContentGreen'
import ContentGray from './gray/ContentGray'
import ContentYellow from './yellow/ContentYellow'
import ContentBlue from './blue/ContentBlue'
import ContentWhite from './white/ContentWhite'
import ContentPink from './pink/ContentPink'
import SimpleAccordion from '../components/Accordion'

class Contents extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contentsContainer">
                <h3 className='contentsTitle'>Table of Contents</h3>
                {/* <ContentWhiteX/>
                <ContentGreen/>
                <ContentGray/>
                <ContentYellow/>
                <ContentBlue/>
                <ContentWhite/>
                <ContentPink/> */}
                <SimpleAccordion/>
            </div>
         );
    }
}
 
export default Contents;