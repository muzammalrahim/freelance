import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Proposal from '../jobs/Proposal'
import GetImage from '../registration/GetImage';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HoverRating from "./FeedBackRating"


const useStyles = makeStyles((theme) => ({
    
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 300,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
  }));


function FeedBackModal() {
    const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
      
      
    <div className="feed-back feed-back pl-3 pt-3 pb-3 pr-0 text-right">
        
      <Button className="border-0 pr-0" variant="outlined" color="primary" onClick={handleClickOpen}>
        <a href="#"><p><span className="tick-status pr-1 border-0"><CheckCircleIcon/></span>Payment Recieved</p></a>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="xl"
        classes={{ paper: 'myCustomDialog' }}
        
      >
        {/* <DialogTitle id="responsive-dialog-title">{"Submit Bid"}</DialogTitle> */}
        <DialogContent classes={{ root: 'custom-root' }}>
          <DialogContentText>
            <div className="modal-main">
            <div className="cont-submit-payment pb-2">
                <div className="proposal-heading text-left">
                    <h1 className="mb-0 p-3">End Project</h1>
                </div>
                <div className="feedback-sec d-flex justify-content-center pt-4">
                     <HoverRating/>
                </div>
                
                <div className="select-reason text-left p-4">
                <h3 className="pb-1">Reason for ending project</h3>
                <div className="selection">
                  <select className="border p-2">
                    <option>Select Reason</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                </div>
                <div className="modal-msg text-left p-4">
                    <h3 className="pb-1">Share your experience with client</h3>
                    <div className="modal-textarea">
                        <textarea placeholder="Type your feesback here..."/>
                    </div>    
                </div>
                    <div className="bid-buttons d-flex justify-content-center pb-4 mt-3">
                      <button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary" tabindex="0" type="button"><span class="MuiButton-label">Cancel</span><span class="MuiTouchRipple-root"></span></button>
                      <button onClick={handleClose} class="btn btn--yellow btn--medium" autoFocus> Submit</button>
                    </div>
            </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
    )
}
export default FeedBackModal