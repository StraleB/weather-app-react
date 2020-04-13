import React, { Component } from 'react'


 class Form extends Component {
   
    render() {
        return (
        <form onSubmit={this.props.getWeather}>
            <input  type="text" name="city" placeholder="City..."/><br/>
            <input type="text" name="country" placeholder="Country..."/><br/>
            <button style={{marginTop:"30px", border:"transparent",backgroundColor:"#39aaec",fontSize:"1.7rem",color:"white", fontFamily: "'Rubik', sans-serif", padding:"0.5rem 1rem"}}>Get weather</button>
        </form>
        )
    }
}

export default Form