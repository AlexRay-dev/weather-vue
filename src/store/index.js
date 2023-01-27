import {createStore} from 'vuex'
import axios from "axios";
import {API} from "@/consts/api";
import {DEFAULT_CITY} from "@/consts/config";
import createPersistedState from 'vuex-persist'

const vuexLocal = new createPersistedState({
    key: 'vuex',
    storage: window.localStorage,
    reducer: state => ({
        favorites: state.favorites
    })
})

export default createStore({
    state: () => ({
        searchQuery: '',
        city: DEFAULT_CITY,
        isCurrentWeatherLoading: false,
        isForecastLoading: false,
        currentWeather: null,
        forecast: null,
        favorites: [],
    }),
    getters: {},
    mutations: {
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        setCurrentWeatherLoading(state, bool) {
            state.isCurrentWeatherLoading = bool;
        },
        setForecastLoading(state, bool) {
            state.isForecastLoading = bool;
        },
        setCurrentWeather(state, weather) {
            state.currentWeather = weather;
        },
        setForecast(state, forecast) {
            state.forecast = forecast;
        },
        setCity(state, city) {
            state.city = city;
        },
        setFavorites(state, favorites) {
            state.favorites = favorites;
        },
    },
    actions: {
        async fetchCurrentWeather({state, commit}) {
            try {
                commit('setCurrentWeatherLoading', true);
                const response = await axios.get(`${API.URL_MAIN}?q=${state.city.trim()}&units=metric&cnt=4&appid=${API.KEY}`);
                commit('setCurrentWeather', response.data)
            } catch (e) {
                console.error(e)
            } finally {
                commit('setCurrentWeatherLoading', false);
            }
        },
        async fetchForecast({state, commit}) {
            try {
                commit('setForecastLoading', true);
                const response = await axios.get(`${API.URL_FORECAST}?q=${state.city.trim()}&units=metric&cnt=4&appid=${API.KEY}`);
                commit('setForecast', response.data)
            } catch (e) {
                console.error(e)
            } finally {
                commit('setForecastLoading', false);
            }
        },
    },
    plugins: [vuexLocal.plugin]
})
