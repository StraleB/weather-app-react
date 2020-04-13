import React from "react";

const Weather = props => (
	<div className="weather__info">
	 {	props.city && props.country && <p className="weather__key"> <i style={{color:"red"}} class="fas fa-map-marker-alt"></i>
	 	<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> <i style={{color:"#00bcd1"}} class="fas fa-thermometer-half"></i>
	 		<span className="weather__value"> { props.temperature }°C	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> <i style={{color:"#4f969e"}}class="fas fa-tint"></i>
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> <i style = {{color:"#d9ad00"}} class="fas fa-cloud-sun"></i>
	 		<span className="weather__value"> { props.description }  </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;