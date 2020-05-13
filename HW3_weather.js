import React from 'react';
import axios from 'axios';

class HW3_weather extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            city: props.city || 'Tel Aviv',
            weather: {},
        };
        console.log('constructor');
    }
    componentDidMount() {
        const units = `metric`;
        const key = '66f6fdbbe5e7717610d03763fadf0faf';
        const  url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${key}`;
        axios.get(url).then((res) => {
            console.log(res);
            if(res.status === 200){
                this.setState({weather:res.data});
            }
        });
    }
    onTextInputChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }
    InputCity = (event) => {
        const units = `metric`;
        const key = '66f6fdbbe5e7717610d03763fadf0faf';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=${units}&appid=${key}`;
        axios.get(url).then((res) => {
            console.log(res);
            if (res.status === 200) {
                this.setState({weather: res.data});
            }
        });
    };

    render() {
        const weather = this.state.weather;

        if(weather.main){
            return(
                <div>
                    {`${""}`}<br/>
                    <input onChange={this.onTextInputChange}/>
                    <button onClick={this.InputCity}>Search</button><br/>
                    {`${weather.name} , ${weather.sys.country}`}<br/>
                    {`${""}`}<br/>
                    {`${weather.main.temp}`}<br/>
                    {`${weather.weather[0].description.toUpperCase()}`}<br/>
                    {`feel like ${weather.main.temp} `}



                </div>

            );
        }
        return <div> Loading...</div>
    }

}
export default HW3_weather;