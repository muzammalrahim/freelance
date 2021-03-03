import React from 'react'
import "../../../assets/css/custom.css";
import Header from '../../../../src/components/header/Header'
import Sidebar from './Sidebar';
import SearchBar from "./SearchBar";
import AvatarImage from '../../../../src/AvatarImage.png';
import  { useEffect } from 'react';
import list from '../helper/api';


function createData(id, budget, title, description, skills,category) {
  return { id, budget, title, description, skills,category };
}

function Jobs() {
  const [rows, setRows] = React.useState([]);
  
  function getJobs (){

    list('api/v1/job/')
      .then((response)=>{
      let job_list = [];
     
  
      response.data.map((row)=>{
      
        job_list.push(createData(row.id, row.budget, row.title, row.description, row.skills,row.category))
      })
  
       setRows(job_list);
    })


  }


  useEffect(() => {
    getJobs();
  },[]);


    return (
        
        <div className='Jobs'>
          {/* top header */}
          <div className="top-area">
              <Header />
          </div>
          {/* top header */}
          <div className="main-wrapper pt-5">
            <div className="container">
              <div className="row main">
                <div className="col-md-3">
                  <div className="left-side">
                    <div className="side-menu">
                      <Sidebar/>
                    </div>
                    <div className="range-slider"> </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="right-side">
                      {/* Search Area */}
                      <div className="row job-top-area search-area p-0">
                        <div className="col-md-5 pr-0">
                          <div className="search-bar">
                            <SearchBar/>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="search-button">
                            <button class="btn btn--yellow btn--medium"><i class="fas fa-search"></i> Search</button>
                          </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                          <div className="filter">
                            <input type="text" class="form-control filter" placeholder="Sort by: Highest Price"></input>
                          </div>
                        </div>
                      </div>
                      {/* Search Area */}

                      {/* Heading */}
                      <div className="inner-content">
                        <h1 className="inner-heading p-3">My Feed</h1>
                      </div>
                      {/* Heading */}
   
            {/*--------- row1 ---------------*/}

            {rows.map((row, index) => (
                      <div className="myfeed pl-3 pr-3 pt-3 pb-4 border-top">
                        {/* title area */}
                        <div className="row">
                          <div className="col-md-1">
                            <div className="img-icon">
                              <div className='avatar-user-job' style={{backgroundImage: `url(${AvatarImage})`}}></div>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div className="content-heading pt-1">
                              <h3>{row.title}</h3>
                            </div>
                          </div>
                          <div className="offset-md-1 col-md-3">
                            <ul className="content-icons float-right">
                              <li>
                                <div className="dislike fa-icon">
                                  <i className="far fa-thumbs-down mr-4"></i>
                                </div>
                              </li>
                              <li>
                                <div className="book-mark fa-icon">
                                  <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* title area */}
                        {/* Tags + Price */}
                        <div className="row pt-2">
                          <div className="col-md-1"></div>
                          <div className="col-md-7">
                            <ul className="duration">
                                <li className="pr-3">
                                  <p><i class="fas fa-lock pr-2"></i>Monthly</p>
                                </li>
                                <li className="pr-3">
                                  <p><i class="fa fa-calendar-alt pr-2"></i>2 months</p>
                                </li>
                                <li className="pr-3">
                                  <p><i class="fas fa-clock pr-2"></i>20 min ago</p>
                                </li>

                              </ul>
                          </div>
                          <div className="offset-md-1 col-md-3">
                            <div className="price-colored float-right">
                              <p>Per Hour/<span> {row.budget} SAR</span></p>
                            </div>
                          </div>

                        </div>
                        {/* Tags + Price */}
                        {/* paragraph */}
                        <div className="row paragraph">
                          <div className="col-md-12">
                            <p>
                             {row.description}
                            <a href="#">more...</a>
                            </p>
                          </div>
                        </div>
                        {/* paragraph */}
                        {/* Search Tags */}
                        <div className=" search-tags row pt-3">
                          <div className="col-md-8">
                            <ul className="tags">

                        

                            {
                              Object.values(row.category).map((keyName, i) =>{
                                
                         return <li className="pr-3">
                               <a className="pl-2 pr-2 pt-1 pb-1" href="#"> 
                              {keyName.name}</a>
                              
                             </li>
                               
                            })}
                              
                             
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <div className="job-payment-btn float-right mb-3">
                            <button class="btn btn--yellow btn--medium job-button p-0"><i className="fas fa-check mr-2" aria-hidden="true"></i>Payment verification</button>

                            </div>
                          </div>
                        </div>
                        {/* Search Tags */}
                      </div>

                      ) )}   
                      {/*--------- row1 ---------------*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
    
    );
};

export default Jobs
