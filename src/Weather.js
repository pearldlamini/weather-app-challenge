import React from "react";
import axios from "axios";
import loader from "react-loader-spinner";

export default function Weather(props) {
function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
}
let apiKey = "f8e6a9e3d6fde87cb38868da460b1371";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

   axios.get(apiUrl).then(handleResponse);
    return (
        <loader 
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
        />
    );
}