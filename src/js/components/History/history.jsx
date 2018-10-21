import React from 'react';

export default class History extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { input, history } = this.props;
        return(
            <div>
                <div className='card'>
                    <div className='card-header' style={{backgroundColor:'#e6f9ff'}}>Search History</div>
                    <div className='card-body'>
                    {
                       history.map(item => (
                        <div key={ item.time } className='d-flex justify-content-between'>
                            <div className='left-flex'>
                                <p>{ item.input }</p>
                            </div>
                            <div className='right-flex'>
                                <p>{ item.time }</p>
                               
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}