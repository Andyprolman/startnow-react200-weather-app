import { connect } from 'react-redux';
import Input from './Input';

function mapStoreToProps(store) {
    return {
        input: store.input.input,
        city: store.input.city,
        temp: store.input.temp,
        pressure: store.input.pressure,
        humidity: store.input.humidity,
        maxTemp: store.input.maxTemp,
        minTemp: store.input.minTemp,
        wind: store.input.wind,
        history: store.input.history,
        name: store.input.name,
        time: store.input.time,
        lat: store.input.lat,
        long: store.input.lat
    };
}

export default connect(mapStoreToProps)(Input);

