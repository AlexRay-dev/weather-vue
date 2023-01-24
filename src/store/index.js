import { createStore } from 'vuex'
import axios from "axios";
import {API} from "@/consts/api";

export default createStore({
  state: () => ({
    searchQuery: '',
    isWeatherLoading: false,
    weather: {},
  }),
  getters: {
  },
  mutations: {
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setLoading(state, bool) {
      state.isWeatherLoading = bool;
    },
    setWeather(state, weather) {
      state.weather = weather;
    },
  },
  actions: {
    async fetchWeather({state, commit}) {
      try {
        commit('setLoading', true);
        const response = await axios.get(`${API.URL_MAIN}?q=${state.searchQuery.trim()}&cnt=4&appid=${API.KEY}`);
        commit('setWeather', response.data)
      } catch (e) {
        console.error(e)
      } finally {
        commit('setLoading', false);
      }
    },
  },
  modules: {
  }
})
