import { connect } from 'react-redux';
import History from './History';


function mapStoreToProps(store) {
    return {
        city: store.input.city,
        temp: store.input.temp,
        pressure: store.input.pressure,
        humidity: store.input.pressure,
        maxTemp: store.input.maxTemp,
        minTemp: store.input.minTemp,
        wind: store.input.wind,
        history: store.input.history,
        name: store.input.name,
        time: store.input.time,
    }
}

export default connect(mapStoreToProps)(History);

