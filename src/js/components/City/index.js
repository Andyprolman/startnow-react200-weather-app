import { connect } from 'react-redux';
import City from './City';

function mapStoreToProps(store) {
    return {
        city: store.input.city,
        lat: store.input.lat,
        long: store.input.long,
        temp: store.input.temp,
        pressure: store.input.pressure,
        humidity: store.input.humidity,
        maxTemp: store.input.maxTemp,
        minTemp: store.input.minTemp,
        wind: store.input.wind,
        name: store.input.name
    }
}

export default connect(mapStoreToProps)(City);
