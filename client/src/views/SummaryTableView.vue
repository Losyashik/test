<template>
  <div id="summary_table">
    <table>
      <tr>
        <th>Наименование документа</th>
        <th>Количество заявок</th>
      </tr>
      <tr v-for="(item, index) in GET_DOCS" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.count }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["GET_DOCS"]),
  },
};
</script>
<style lang="scss" src="./../assets/styles/summary.scss"></style>
