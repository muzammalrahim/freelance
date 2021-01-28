
import React, { Component } from 'react'
import './tabbar2.css'
import './tabBar.css'
import {RegNavbar} from '../../../../src/components/Navbar';
import PersonalProfile,{PersonalProfileTabFooter} from './PersonalProfile'

let selecvalue=0;
 export const  Root = () => (

  <div className="Root">
    <Tabs selected={ 0 }>
      <TabList>
      <RegNavbar/>
        <Tab>

        <div class=""><span class=" "><Button>1</Button></span> <span class="text">Personal Profile</span></div> <div className="line"></div>
  
        </Tab>
        <Tab>
        <div class=""><span class=" "><Button>2</Button></span> <span class="text">Professional Profile</span></div> <div className="line"></div>
        </Tab>
        <Tab>
        <div class=""><span class=" "><Button>3</Button></span> <span class="text">ID Verification</span></div> <div className="line"></div>
        </Tab>
        <Tab>
        <div class=""><span class=" "><Button>4</Button></span> <span class="text">Payment Information</span></div> <div className="line"></div>
        </Tab>
        <Tab>
        <div class=""><span class=" "><Button>5</Button></span> <span class="text">Hourly Rate</span></div> 
        </Tab>
      </TabList>
      <TabPanel>
         <PersonalProfile/>

      </TabPanel>

      <TabPanel>
        Related to step 2
      </TabPanel>

      <TabPanel>
        Related to step 3
      </TabPanel>
      <TabPanel>
      Related to step 4
    </TabPanel>
    <TabPanel>
    Related to step 5
  </TabPanel>
    </Tabs>
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

                  return React.Children.map(children, (child) => {
                    if (child.type.name === "TabList") 
                    {
                      const _ct = this.state.selected
                      return this.renderTabList(child)
                    }

                    if (child.type.name === "TabPanel") {
                      const _isActive = (panel === this.state.selected)

                      panel++
                      return React.cloneElement(child, { _isActive })
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

              <div className="nextButtonDiv">
              {this.state.selected>=0&& <>
                <button className="tb_prevButton" onClick={() => this.setState({ selected: this.state.selected - 1 })}>
                Previous Step
              </button>
              </>}             

              {this.state.selected<4&& <>
              <button className="tb_nextButton" onClick={() => this.setState({ selected: this.state.selected + 1 })}>
              Next
            </button>
            </>}
            </div>

            
       </div>
    )
  }
}


// const Taimoor = (props) => 
// {
//   return (
//     <div>
//        <h1>hiii {props.data}</h1>
        
//     </div>
//   )
// }


const TabList = ({ 
  
  children, 
  
}) => (

  <li className="TabList">

    { children  }  

    <div className="left_img">
{selecvalue===0&&<PersonalProfileTabFooter/>}
{selecvalue===1&&<h2>dsdsds</h2>}
</div> 

  </li>

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

const TabPanel = ({
  _isActive,
  children,
}) => (
  <div className={ `TabPanel  ${ _isActive ? "is-active" : "" }` }>
    { children }
  </div>
)

/* --- */

const Button = ({ children }) => (
  <button className="Button">
    { children }
  </button>
)

