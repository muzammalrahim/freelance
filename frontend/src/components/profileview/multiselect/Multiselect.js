import React, { Component }from 'react'
import './multislect.css'
class Multiselect extends Component{
    constructor(){
        super();
        this.state = {
            hobbies:[] ,
            brand: [] ,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        
        if(target.checked){
            this.state.hobbies[value] = value;   
        }else{
            this.state.hobbies.splice(value, 1);
        }
    }
    submit(){
         
        console.log(this.state.hobbies)
    }
    render() {
        return (
            <div className="mulitslect">
            <div className="mulitslect-heading">
            <p>Deliverables in</p> 
            
            </div>
     
                 <select
                       onChange={(e) => {
                         this.setState((prevState) => ({
                           brand: [...prevState.brand, e.target.value],
                         }));
                       }}
                       className="form-control"
                       id="exampleFormControlSelect1">
                       <ul>
                       <li className="test">a</li>
                       <li className="test">b</li>
                       <li className="test">c</li>
                       <li className="test">d</li>
                       </ul>
                       <option  value="Php">Php</option>
                       <option value="Bootstrap">Bootstrap</option>
                       <option value="Azura">Azura</option>
                       <option value="Java">Java</option>
                       <option value="Python">Python</option>
                       <option value="javascript">javascript</option>
                       <option value="c#">c#</option>
                     </select>
                 

                     <div className="test">
                       {this.state.brand.map((item, index) => (
                         <div
                           className="option"
                           style={{
                             background: "#61C1B8",
                             color: "white",
                             padding: "0px 8px",
                             margin: "7px ",
                             borderRadius: "4px",
                             width: "113px",
                           }}
                         >
                           <h5 className="Addskillh5item">{item} </h5>
                           <span
                             className="float AddSkill_pl"
                             onClick={() => {
                               console.log(index);
                               const a = this.state.brand;
                               a.splice(index, 1);
                               this.setState({ brand: a });
                             }}
                             style={{ cursor: "pointer" }}
                           >
                             x
                           </span>
                         </div>
                       ))}
                     </div>
            </div>
        )
    }
}

export default Multiselect
