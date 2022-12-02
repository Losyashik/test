<template>
  <div id="main">
    <div class="list">
      <ul>
        <template v-if="GET_USER_DOCS.length">
          <li v-for="item in GET_USER_DOCS" :key="item.id">
            <div class="list_name">{{ item.name }}</div>
            <button-delete :data="item"></button-delete>
          </li>
        </template>
        <template v-else-if="selectUser != 0">
          <li class="list_default">
            <div>Пользователь не добавил документы</div>
          </li>
        </template>
        <template v-else>
          <li>
            <div class="list_default">Пользователь не выбран</div>
          </li>
        </template>
      </ul>
    </div>
    <form-body />
  </div>
</template>

<script>
import FormBody from "./../components/FormBody";
import ButtonDelete from "./../components/ButtonDelete";
import { mapGetters } from "vuex";
export default {
  data() {
    return { selectUser: 0 };
  },
  components: {
    FormBody,
    ButtonDelete,
  },
  computed: {
    ...mapGetters(["GET_USER_DOCS"]),
  },
};
</script>
<style src="./../assets/styles/main.scss" lang="scss"></style>
