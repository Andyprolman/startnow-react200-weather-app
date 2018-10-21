import React from 'react';

import {
    updateInput,
    selectCity,
    updateWeather,
    addHistory,
    historyButton
} from './inputActions';

const axios = require('axios');

export default class Input extends React.Component {
    constructor(props){
        super(props);

        this.handleInput = this.handleInput.bind(this);
        this.selectCity = this.selectCity.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateInput(value));
    }

        

    selectCity(){
        const { dispatch, input, city, history, time } = this.props;
        dispatch(selectCity(input));
        dispatch(addHistory(input, time));
        console.log('history:', history);
        axios.get(`/api?input=${input}`)
            .then(response => {
                console.log(response.data);
                dispatch(updateWeather(response.data));
            })
    }

    handleButton(event){
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(historyButton(value));
        console.log(value);
        axios.get(`/api?input=${value}`)
            .then(response => {
                console.log(response.data.main, response.data.wind.speed)
                dispatch(updateWeather(response.data));
            })
    }

    render(){
        const{ input, history, } = this.props;
        return(
            <div>
                <div className='buttons'>
                { 
                    history.map(item => (
                    <button 
                    key= { item.time }
                    className='btn btn-primary' 
                    value={ item.input }
                    onClick={this.handleButton}
                    style={{borderRadius:'0', marginRight:'1px'}}
                    >
                    { item.input }</button>
                ))} 
                </div>
                <div>
                    <div className='row'>
                        <div className='col-sm-11'>
                            <input 
                            className='form-control'
                            id='input'
                            value = { input }
                            onChange= { this.handleInput }
                            />
                        </div>
                        <div className='col-sm-1'>
                            <button 
                            className='btn btn-ligh'
                            onClick={ this.selectCity }
                            >Go!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}