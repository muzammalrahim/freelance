import React, { Component } from "react";
import "./portfoliotab.css";
import AddPortfolio from './AddPortfolio'
import PortfolioDetails from './PortfolioDetails'
import DetailsPreview from '../../components/profileview/preview/DetailsPreview'
import Header from '../header/Header'
export default class PortfolioTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabindex: 1,
    };
  }
 handler = () => {
    this.setState({
       tabindex: this.state.tabindex + 1,
    });
  };

  handler2 = () => {
    this.setState({
       tabindex: this.state.tabindex - 1,
    });
  };
  render() {

    return (

      <div className="portfoliotab  bg-light">
           <div className="design">
        <Header/>
      </div>
        <div className="container pb-5">
          <div className="portfoliotab-design row bg-white">
          
              <div className="portfoliotab-design-left col-md-3 pt-5 pl-5">
               
                <div class="Tab pt-4">
                  <span
                    class=" "
                    onClick={() => this.setState({ tabindex: 1 })}
                  >
                    <button className={"Buttoncls " + (this.state.tabindex=== 1 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 1 })}>
                        1
                  </button>

                  </span>{" "}
                  <span class="text2">Add Project</span>
                </div>{" "}
                <div className="pt-5"> </div>







                <div class="Tab">
                  <span
                    class=" "
                    onClick={() => this.setState({ tabindex: 2 })}
                  >
                    <button className={"Buttoncls " + (this.state.tabindex=== 2 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 2 })}>
                        2
                  </button>

                  </span>{" "}
                  <span class="text2">Add Details</span>
                </div>{" "}
                <div className="pt-5"> </div>


                  <div class="Tab">
                  <span
                    class=" "
                    onClick={() => this.setState({ tabindex: 3 })}
                  >
                    <button className={"Buttoncls " + (this.state.tabindex=== 3 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 3 })}>
                        3
                  </button>
   
                  </span>{" "}
                  <span class="text2">Preview</span>
                </div>{" "}
            </div>
        


            <div className="col-xs-6 col-sm-9 col-md-9 col-lg-9 pt-5">
              {this.state.tabindex === 1 && <AddPortfolio />}
              {this.state.tabindex === 2 && <PortfolioDetails />}
              {this.state.tabindex === 3 && <DetailsPreview />}
        

             
                  <div className="row">
                      <div className="col-md-9 pl-4 pb-5">

                     
        {this.state.tabindex > 1 && (
          <>
            <button
              type="button"
              className="btn rounded-pill "
            onClick={() => this.setState({ tabindex:this.state.tabindex - 1 })}
            >
              {" "}
            Previous
            </button>
          </>
        )}

        {this.state.tabindex < 3 ? (
          <>
            <button
              type="button"
              className="btn tb_nextButton"
              onClick={() => this.setState({ tabindex:this.state.tabindex + 1 })}
            >
              {" "}
              NEXT STEP
            </button>
          </>
        ):<>
        <button
          type="button"
          className="btn tb_nextButton"
         
        >
          {" "}
          DONE
        </button>
      </>}
      </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 