<template>
  <div class="form">
    <form
      @submit.prevent="
        ADD_DOC(data);
        data.doc = '';
      "
    >
      <h4>Добавление документов</h4>
      <select
        v-model="data.user"
        @change="selectUser()"
        :class="{ active: GET_MESSAGE.active }"
      >
        <option value="0">Выберете пользователя</option>
        <option v-for="item in GET_USERS" :value="item.id" :key="item.id">
          {{ item.name }}
        </option>
      </select>
      <input
        type="text"
        v-model="data.doc"
        placeholder="Введите название документа"
      />
      <div
        class="message"
        :class="{ active: GET_MESSAGE.active }"
        :style="'background: ' + GET_MESSAGE.color"
      >
        {{ GET_MESSAGE.message }}
      </div>
      <input class="button" type="submit" />
    </form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      data: {
        user: 0,
        doc: "",
      },
    };
  },
  methods: {
    ...mapActions(["ADD_DOC", "FETCH_USER_DOCS"]),
    selectUser() {
      this.$parent.selectUser = this.data.user;
      this.FETCH_USER_DOCS(this.data.user);
    },
  },
  computed: { ...mapGetters(["GET_USERS", "GET_MESSAGE"]) },
  props: ["userId"],
};
</script>
