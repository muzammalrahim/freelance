import React from 'react';
import './GetDate.css'

class GetDate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date : [],
			date2 : [],
			states : [],
			cities : [],
			selectedMonth : 'Choose Month',
			selectedYear : 'Choose year'
		};
		this.changeMonth = this.changeMonth.bind(this);
		this.changeYear = this.changeYear.bind(this);
	}
  
	componentDidMount() {
		this.setState({
			date : [
				{ month: '1',},
				{ month: '2',},
				{ month: '6', },
				{ month: '7', },
				{ month: '8', },
				{ month: '9', },
				{ month: '10', },
				{ month: '11', },
				{ month: '12', },
			],
			date2 : [
				{ year: '2019',},
				{ year: '2020',},
				{ year: '2021',},
				{ year: '2022',},
				{ year: '2023', },
				{ year: '2024', },
				{ year: '2025', },
				{ year: '2026', },
				{ year: '2027', },
				{ year: '2028', },
				{ year: '2029', },
				{ year: '2030', },
			]
		});
	}
  
	changeMonth(event) {
		this.setState({selectedMonth: event.target.value});

	}

    changeYear(event) {
		this.setState({selectedYear: event.target.value});
	
	}
	
	render() {
		return (

             
			<div  id="container">
            <p className="heading_style2">Expire Date</p>
                <div className="dis_Flex">
				<div className="mr1">
					
					<select className="selectcss" placeholder="Month" value={this.state.selectedMonth} onChange={this.changeMonth}>
						<option style={{textAlign:"center"}}>Month</option>
						{this.state.date.map((e, key) => {
							return <option key={key}>{e.month}</option>;
						})}
					</select>
				</div>
				
				<div className="mr1">
                        <select className="selectcss" placeholder="Year" value={this.state.selectedYear} onChange={this.changeYear}>
                        <option style={{textAlign:"center"}}>Year</option>
                        {this.state.date2.map((e, key) => {
                            return <option key={key}>{e.year}</option>;
                        })}
                    </select>
                </div>
                </div>
			</div>
		)
	}
}

export default GetDate;