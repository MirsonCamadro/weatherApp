import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({
    type: SET_FORECAST_DATA,
    payload
})

const api_key = "a2d52b8bf9125764ad1643334f9c4f66";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`

        // activar en le estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                //modificar el estado con el resultado de la promise (fetch)
                dispatch(setForecastData({city: payload, forecastData}))
            }
        );
    };
};
