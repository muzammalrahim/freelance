import React, { Component } from 'react'
import Button from '../../../components/Button'

export default class Logout extends Component {

    Logout=()=>{
localStorage.removeItem("token")
this.props.history.push("/SignUp")
}
    render() {
        return (
            <div>
                <Button onClick={()=>this.Logout()}>Logout</Button>
            </div>
        )
    }
}
