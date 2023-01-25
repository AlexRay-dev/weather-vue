import { createStore } from 'vuex'
import axios from "axios";
import {API} from "@/consts/api";

export default createStore({
  state: () => ({
    searchQuery: '',
    isCurrentWeatherLoading: false,
    isForecastLoading: false,
    currentWeather: {},
    forecast: {},
  }),
  getters: {
  },
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
  },
  actions: {
    async fetchCurrentWeather({state, commit}) {
      try {
        commit('setCurrentWeatherLoading', true);
        const response = await axios.get(`${API.URL_MAIN}?q=${state.searchQuery.trim()}&cnt=4&appid=${API.KEY}`);
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
        const response = await axios.get(`${API.URL_FORECAST}?q=${state.searchQuery.trim()}&cnt=4&appid=${API.KEY}`);
        commit('setForecast', response.data)
      } catch (e) {
        console.error(e)
      } finally {
        commit('setForecastLoading', false);
      }
    },
  },
  modules: {
  }
})
