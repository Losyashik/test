<template>
  <div
    class="list_delete"
    @click="DELETE_DOC(data)"
    :title="'Удалить ' + data.name"
  >
    <img src="./../assets/images/close.png" alt="" />
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["DELETE_DOC", "FETCH_USER_DOCS"]),
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
