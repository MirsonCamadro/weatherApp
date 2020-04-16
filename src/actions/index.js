export const SET_CITY = 'SET_CITY';

export const setCity = payload => ({ type: SET_CITY, payload });

const api_key = "a2d52b8bf9125764ad1643334f9c4f66";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const fetchForecast = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`

        // activar en le estado un indicador de busqueda de datos

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                //modificar el estado con el resultado de la promise (fetch)
            }
        );
        return;
    };
};
