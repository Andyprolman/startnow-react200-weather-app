import React from 'react';
import Input from './components/Input';
import City from './components/City';
import History from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container' style={{backgroundColor:'white', marginBottom:'100px', marginTop:'40px'}}>
        <div className='jumbotron'>
          <h1 className='display-4'>Origin Weather Application</h1>
          <p className='lead'>Always know if you'll need an umbrella!</p>
        </div>
        <Input />
        <hr></hr>
        <div className='row'>
          <div className='col-md-6'>
            <City />
          </div>
          <div className='col-md-6'>
            <History />
          </div>
        </div>
      </div>
    );
  }
}
