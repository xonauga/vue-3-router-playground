import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    loading: false,
  }),
  getters: {
    getLoading: (state) => state.loading,
  },
  actions: {
    setLoading(loading) {
      this.loading = loading;
    },
  },
});
