import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ContentWhiteX from '../pages/whiteX/contentWhiteX';
import ContentGreen from '../pages/green/ContentGreen'
import ContentGray from '../pages/gray/ContentGray'
import ContentYellow from '../pages/yellow/ContentYellow'
import ContentBlue from '../pages/blue/ContentBlue'
import ContentWhite from '../pages/white/ContentWhite'
import ContentPink from '../pages/pink/ContentPink'

import WhiteXmain from '../pages/whiteX/WhiteXmain'
import '../theme/whiteXmain.css'
import GreenMain from '../pages/green/greenMain'
import '../theme/greenMain.css'
import GrayMain from '../pages/gray/GrayMain'
import '../theme/grayMain.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='accord'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>X Pages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ContentWhiteX/>
        </AccordionDetails>
        <WhiteXmain/>
      </Accordion>
      
      <Accordion id='green'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Opperational Engagement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ContentGreen/>
        </AccordionDetails>
        <GreenMain/>
      </Accordion>

      <Accordion id='gray'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Specific Hazards</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ContentGray/>
        </AccordionDetails>
        <GrayMain/>
      </Accordion>

      <Accordion id='yellow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>All Hazard Response</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ContentYellow/>
        </AccordionDetails>
      </Accordion>

      <Accordion id='blue'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Aviation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ContentBlue/>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Other References</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ContentWhite/>
        </AccordionDetails>
      </Accordion>

      <Accordion id='pink'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Emergency Medical Care</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ContentPink/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}