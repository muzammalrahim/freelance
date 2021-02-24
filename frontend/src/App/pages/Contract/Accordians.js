import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import RequestPaymentModal from "./RequestPaymentModal"



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  
}));


export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="contract-one-acc">
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="pl-2">
          <Typography className={classes.heading}><b>Milestone 1</b></Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="container pr-0">
            <div className="row m-info pl-2">
              <div className="col-md-1 pl-0">
                <div>
                <Avatar className="my-name">1</Avatar>
                </div>
              </div>
              <div className="col-md-9 align-self-center pt-2 pl-0">
                <div>
                  <h4 className="align-self-center"><b>Wireframes</b></h4>
                </div>
              </div>
              <div className="col-md-2 align-self-center pr-0">
                <div>
                  <div className="price-tag">100SAR</div>
                </div>
              </div>
            </div> 
          </div>
          
          
        </AccordionDetails>
        <AccordionDetails>
        <div className="row m-info r-3 pl-3">
          <div className="col-md-3">
              <div>
                <h4>Project type</h4>
              </div>
            </div>
            <div className="col-md-7">
              <div>
                <h5>Monthly</h5>
              </div>
            </div>
            <div className="col-md-2 pr-0">
              <div className="state-active1">
                <ol>
                  <li><span className="active-state mr-1"></span>Active</li>
                </ol>
              </div>
            </div>
          </div>
        </AccordionDetails>
        <AccordionDetails>
        <div className="row m-info r-3 pl-3">
          <div className="col-md-3">
              <div>
                <h4>Time</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h5>Mar 22 - Present</h5>
              </div>
            </div>
            <div className="col-md-5 pr-0">
              <div className="mile-inner-btn">
                {/* <Button variant="outlined" color="secondary">Request For payment</Button>  */}
                <RequestPaymentModal/>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <div className="pl-2">
          <Typography className={classes.heading}><b>Milestone 2</b></Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
        <div className="container pr-0">
            <div className="row m-info pl-2">
              <div className="col-md-1 pl-0">
                <div>
                <Avatar className="my-name">1</Avatar>
                </div>
              </div>
              <div className="col-md-9 align-self-center pt-2 pl-0">
                <div>
                  <h4 className="align-self-center"><b>Interface Design</b></h4>
                </div>
              </div>
              <div className="col-md-2 align-self-center pr-0">
                <div>
                  <div className="price-tag">100SAR</div>
                </div>
              </div>
            </div> 
          </div>
          
        </AccordionDetails>
        <AccordionDetails>
        <div className="row m-info r-3 pl-3">
          <div className="col-md-3">
              <div>
                <h4>Project type</h4>
              </div>
            </div>
            <div className="col-md-7">
              <div>
                <h5>Monthly</h5>
              </div>
            </div>
            <div className="col-md-2 pr-0">
              <div className="state-inactive2">
                <ol>
                  <li><span className="inactive-state mr-1"></span>Inactive</li>
                </ol>
              </div>
            </div>
          </div>
        </AccordionDetails>
        <AccordionDetails>
        <div className="row m-info r-3 pl-3">
          <div className="col-md-3">
              <div>
                <h4>Time</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h5>Mar 22 - Present</h5>
              </div>
            </div>
            {/* <div className="col-md-5 pr-0">
              <div className="mile-inner-btn">
                <Button variant="outlined" color="secondary">Request For payment</Button> 
              </div>
            </div> */}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <div className="pl-2">
          <Typography className={classes.heading}><b>Milestone 3</b></Typography>
          </div>
          <Typography className={classes.secondaryHeading}></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="container pr-0">
            <div className="row m-info pl-2">
              <div className="col-md-1 pl-0">
                <div>
                <Avatar className="my-name">1</Avatar>
                </div>
              </div>
              <div className="col-md-9 align-self-center pt-2 pl-0">
                <div>
                  <h4 className="align-self-center"><b>Interface Design</b></h4>
                </div>
              </div>
              <div className="col-md-2 align-self-center pr-0">
                <div>
                  <div className="price-tag">100SAR</div>
                </div>
              </div>
            </div> 
          </div>
          
        </AccordionDetails>
        <AccordionDetails>
        <div className="row m-info r-3 pl-3">
          <div className="col-md-3">
              <div>
                <h4>Project type</h4>
              </div>
            </div>
            <div className="col-md-7">
              <div>
                <h5>Monthly</h5>
              </div>
            </div>
            <div className="col-md-2 pr-0">
              <div className="state-inactive2">
                <ol>
                  <li><span className="inactive-state mr-1"></span>Inactive</li>
                </ol>
              </div>
            </div>
          </div>
        </AccordionDetails>
        <AccordionDetails>
        <div className="row m-info r-3 pl-3">
          <div className="col-md-3">
              <div>
                <h4>Time</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h5>Mar 22 - Present</h5>
              </div>
            </div>
            {/* <div className="col-md-5 pr-0">
              <div className="mile-inner-btn">
                <Button variant="outlined" color="secondary">Request For payment</Button> 
              </div>
            </div> */}
          </div>
        </AccordionDetails>
      </Accordion>
      
    </div>
    </div>
  );
}
