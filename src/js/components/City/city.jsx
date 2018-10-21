import React from 'react';

export default class City extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, lat, long, temp, pressure, humidity, minTemp, maxTemp, wind } = this.props;
        return(
            <div>
                <div className='card'>
                    <div className='card-header' style={{backgroundColor:'#e6f9ff'}}>City Information</div>
                    <div className='card-body text-center' style={{fontWeight: 'bold'}}>
                        <div>
                            <h1>{ name }</h1>
                        </div>
                        <div>
                            <p>Lat: { lat } Long: { long }</p>
                        </div>
                        <hr></hr>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <div>
                                    <p>Temperature(F)</p>
                                </div>
                                <div>
                                    <p style={{color:'green'}}>{temp}F</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <p>Pressure</p>
                                </div>
                                <div>
                                    <p style={{color:'green'}}>{pressure}</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <p>Humidity</p>
                                </div>
                                <div>
                                    <p style={{color:'green'}}>{humidity}%</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div>
                                    <p>Lowest Temp(F)</p>
                                </div>
                                <div>
                                    <p style={{color:'green'}}>{minTemp}F</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <p>Highest Temp(F)</p>
                                </div>
                                <div>
                                    <p style={{color:'green'}}>{maxTemp}F</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <p>Wind Speed</p>
                                </div>
                                <div>
                                    <p style={{color:'green'}}>{wind}mph</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}