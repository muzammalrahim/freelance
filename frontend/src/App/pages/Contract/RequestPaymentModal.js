import React ,{ useState,useEffect }from 'react'
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
import post from '../helper/api'


const useStyles = makeStyles((theme) => ({
    
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 300,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
  }));


function RequestPaymentModal() {
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState('id')
    const [user, setUser] = useState({
      City : "",
      Country : "",
      Company :"",
      descripion :"",
      budget : "" ,

  
    });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


 
  function saveUser(){
    alert("form has been submitted")
    console.warn("saveUser")
  }
    const { City, Country, Month, Year, budget,descripion} = user;
  const onInputChange =e=>{
   
    setUser({user,[e.target.name] : e.target.value})

    console.log("user data",user)
  };
  const onSubmit = async e => {
    
       post('/api/v1/contract/')
      .then(response => {
        console.log(response)
      })
     
      .catch(error => {
        console.log(error)
      })
     
    }
  useEffect(() => {
    onSubmit();
  }, [])
  

  return (
      
      
    <div className="submit-payment p-3">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Request For payment
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
        <DialogContent>
          <DialogContentText>
            <div className="modal-main">
            <div className="cont-submit-payment pb-4">
                <div className="proposal-heading text-left">
                    <h1 className="mb-0">Submit Work & Request For Payment</h1>
                    <p>Milestone 01: Wireframe</p> 
                </div>
                <div className="m-price text-center pt-4">
                    <h4 className="pb-1"><b>Amount</b></h4>
                    <div className="container">
                        <div className="modal-amount-inner pt-4 ml-5 mr-5 mb-1">
                            <div className="row amount-row">
                                <div className="col-md-5 text-left pl-4">
                                    <p>SAR</p>
                                </div>
                                <div className="col-md-7 text-left pl-4">
                                    <p className="digit">100</p>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
                <div className="modal-msg text-left pt-4">
                    <h3 className="pb-1">Message</h3>
                    <div className="modal-textarea">
                        <textarea
                         placeholder="Type your message to client..."
                         name="descripion"
                         value={descripion}
                         onChange={e => onInputChange(e)}
                         />
                    </div>    
                </div>
                <div className="modal-upload-img text-left pt-4">
                <h3 className="pb-1">Upload Files</h3>
                    <GetImage/>
                </div>
                    <div className="bid-buttons d-flex justify-content-center pb-4 mt-5">
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

export default RequestPaymentModal
