// Action creators

export function updateInput(input) {
    return {
        type: 'UPDATE_INPUT',
        payload: { input }
    };
}

export function selectCity(city) {
    return {
        type: 'SELECT_CITY',
        payload: {
            city
        }
    };
}

export function updateWeather(data){
    return {
        type: 'UPDATE_WEATHER',
        payload: data
    }
}

export function addHistory(input, time) {
    return {
        type: 'ADD_HISTORY',
        payload: { input, time }
    }
}

export function historyButton(city){
    return {
        type: 'HISTORY_BUTTON',
        payload: { city }
    }
}