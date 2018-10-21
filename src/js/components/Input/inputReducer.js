
const defaultState = {
    city: '',
    input: '',
    lat: '',
    long: '',
    temp: '',
    pressure: '',
    humidity: '',
    minTemp: '',
    maxTemp:'',
    wind: '',
    history: [],
    name: '',
    time: new Date().toISOString(),
};

export default function inputReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch(type){
        case 'UPDATE_INPUT':{
            return {
                ...state,
                input: payload.input
            };
        }

        case 'SELECT_CITY': {
            const { city } = action.payload
            return {
                ...state,
                input: '',
                city: input.value
            }
        }

        case 'UPDATE_WEATHER': {
            //console.log(payload)
            return {
                ...state,
                lat: payload.coord.lat,
                long: payload.coord.lon,
                temp: payload.main.temp,
                pressure: payload.main.pressure,
                humidity: payload.main.humidity,
                minTemp: payload.main.temp_min,
                maxTemp: payload.main.temp_max,
                wind: payload.wind.speed,
                name: payload.name,
            }
        }

        case 'ADD_HISTORY': {
            const { input, time } = action.payload
            console.log('payload: ', payload);
            return {
                ...state,
                time: new Date().toISOString(),
                history: [...state.history, { input, time }]
            }
        }

        case 'HISTORY_BUTTON': {
           // const { city } = action.payload
            return {
                ...state,
                city: payload.city
            }
        }
        default: {
            return state;
        }
    }
}