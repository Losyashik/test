import { createStore } from "vuex";
import api from "./../api";

export default createStore({
  state: {
    docs: [],
    userDocs: [],
    users: [],
    message: {},
  },
  getters: {
    GET_DOCS(state) {
      return state.docs;
    },
    GET_USERS(state) {
      return state.users;
    },
    GET_USER_DOCS(state) {
      return state.userDocs;
    },
    GET_MESSAGE(state) {
      return state.message;
    },
  },
  mutations: {
    UPDATE_USERS(state, data) {
      state.users = data;
    },
    UPDATE_DOCS(state, data) {
      state.docs = data;
    },
    UPDATE_USER_DOCS(state, data) {
      state.userDocs = data;
    },
    UPDATE_MESSAGE(state, data) {
      state.message = data;
    },
  },
  actions: {
    async FETCH_DOCS(ctx) {
      const docs = await api.get("/docs/");
      ctx.commit("UPDATE_DOCS", docs.data);
    },
    async FETCH_USERS(ctx) {
      const docs = await api.get("/users/");
      ctx.commit("UPDATE_USERS", docs.data);
    },
    async FETCH_USER_DOCS(ctx, id) {
      const docs = await api.get("/docs/" + id);
      ctx.commit("UPDATE_USER_DOCS", docs.data);
    },
    async ADD_DOC(ctx, data) {
      const message = await api.post("docs/", data);
      message.data.active = true;
      ctx.commit("UPDATE_MESSAGE", message.data);
      ctx.dispatch("FETCH_USER_DOCS", data.user);
      setTimeout(() => {
        ctx.state.message.active = false;
        ctx.commit("UPDATE_MESSAGE", ctx.state.message);
      }, 3000);
    },
    async DELETE_DOC(ctx, data) {
      await api.delete("/docs/" + data.id);
      ctx.dispatch("FETCH_USER_DOCS", data.user);
    },
  },
  modules: {},
});
