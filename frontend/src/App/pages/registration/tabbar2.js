
import React, { Component } from 'react'
import './tabbar2.css'
import {RegNavbar} from '../../../../src/components/Navbar';
import PersonalProfile,{PersonalProfileTabFooter} from './PersonalProfile'
import IdVerification,{IdVerificationFooter} from './IdVerification'
import PaymentInformation,{PaymentInformationFooter} from './PaymentInformation'
import HourlyRate,{HourlyRateFooter} from './HourlyRate'
import Heading,{HeadingFooter} from './ProfessionalProfile'
import ProfessionalProfile2 from './ProfessionalProfile2'
import ProfessionalProfile2Footer from "./ProfFooter";

let selecvalue=0;

 export const  Root = () => (
  <div className="Main">
  <div class="">
 
   
   
  <Tabs selected={ 0 }>
  

    <TabList>
    <RegNavbar/>
      <Tab>

      <div class=""><span class=" "><Button>1</Button></span> <span class="text2">Personal Profile</span></div> <div className="line"></div>

      </Tab>
      <Tab>
      <div class=""><span class=" "><Button>2</Button></span> <span class="text2">Professional Profile</span></div> <div className="line"></div>
      </Tab>
      <Tab>
      <div class=""><span class=" "><Button>3</Button></span> <span class="text2">ID Verification</span></div> <div className="line"></div>
      </Tab>
      <Tab>
      <div class=""><span class=" "><Button>4</Button></span> <span class="text2">Payment Information</span></div> <div className="line"></div>
      </Tab>
      <Tab>
      <div class=""><span class=" "><Button>5</Button></span> <span class="text2">Hourly Rate</span></div> 
      </Tab>
    </TabList>
  
  

    <TabPanel>
       <PersonalProfile/>
       

    </TabPanel>
    <TabPanel>
       <ProfessionalProfile2/>

    </TabPanel>

    <TabPanel>
       <IdVerification/>
    </TabPanel>

    <TabPanel>
     <PaymentInformation/>
    </TabPanel>
    <TabPanel>
      <HourlyRate/>
  </TabPanel>
    

  </Tabs>


  </div>  
</div>
)



/*
 * Tabs is the stateful component.
 * You can pass an index in the `selected` prop
 * to specify which tab is active by default.
 *
 * This component handles the entire tabs system.
 * It transforms its own children (if they are Tab or TabPanel) to pass the
 * required props in order to run automatically the system.
 */

class Tabs extends Component {
  state = { 
              selected: this.props.selected ,
              currenttab : null,
            
            };

  setSelected(selected) {
    if (selected !== this.state.selected) {
      this.setState({ selected })
    }
  }

      handleClick(tab) 
      {
        return () => this.setSelected(tab)
      }

      handler=()=> {
        this.setState({
          selected: this.state.selected + 1
        })
    
      }  

      handler2=()=> {
        this.setState({
          selected: this.state.selected - 1
        })
    
        
      }  

          renderTabList(child)
          {

            let tab = 0
            return React.cloneElement(child, 
              {
                
              children: React.Children.map(child.props.children, (childTab) => {
                if (childTab.type.name === "Tab") 
                {
                  const _isActive = (tab === this.state.selected)
                  const _ct = this.state.selected
                  this.state.currenttab = this.state.selected
                  const _onClick = this.handleClick(tab)
                  tab++
                  console.log("tab",_isActive)
                  return React.cloneElement(childTab, { _isActive, _onClick,_ct })
                }

                return childTab
              }),
            })
          }

                renderChildren(children) 
                {
                  let panel = 0
                  let selectedTab = 0

                  return React.Children.map(children, (child) => 
                  {
                    if (child.type.name === "TabList") 
                    {
                      const _ct = this.state.selected
                      return this.renderTabList(child)
                    }

                    if (child.type.name === "TabPanel") {
                      const _isActive = (panel === this.state.selected)
                      const _onClick = this.handler
                      const _onClick2 = this.handler2

                      panel++
                      return React.cloneElement(child, { _isActive, _onClick ,_onClick2})
                    }

                    return child
                  })
                }

           
   

  render() {
                selecvalue=this.state.selected
    return (
      <div>
          
              <div className="Tabs">
                
                { 
                  this.renderChildren(this.props.children)
                
                
                }
                   
                  {/* <Taimoor data={this.state.selected}/> */}
              </div>  

            
       </div>
       
    )
  
  }
}




const TabList = ({ 
  
  children, 
  
}) => (
  <div className="TabList">
<ul className="left_tabs">
  <li >

    { children  }  

  </li>
  </ul>
 {/* <div className="left_img"> </div>  */}
{selecvalue===0&&<PersonalProfileTabFooter/>}

{selecvalue===1&&<ProfessionalProfile2Footer/>}
{selecvalue===2&&<IdVerificationFooter/>}
{selecvalue===3&&<PaymentInformationFooter/>}
{selecvalue===4&&<HourlyRateFooter/>}
 

</div>

)

const Tab = ({
  _ct,
  _onClick,
  _isActive,
  children,
}) => (
  <li 
    className={ `Tab  ${ _isActive ? "is-active" : "" }` }
    onClick={ _onClick }>
    
    { children }
  </li>
)

const TabPanel = ({props,_isActive, children,_onClick,_onClick2}) => (
  <div className={ `TabPanel  ${ _isActive ? "is-active" : "" }` }>
    { children }   

     <div className="nextButtonDiv">
    
     {selecvalue>0&& <>
       <button className="tb_prevButton"  onClick={_onClick2}>
       Previous Step
     </button>
     </>}             

     {selecvalue<4&& <>
     <button className="tb_nextButton"  onClick={_onClick}> Next</button>
   </>}
   </div>  


  </div>
)

/* --- */

const Button = ({ children }) => (
  <button className="Button">
    { children }
  </button>
)


