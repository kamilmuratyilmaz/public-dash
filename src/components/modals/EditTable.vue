<template>
  <div id="edit-table-modal">
    <b-modal
      id="modal-center"
      centered
      v-model="modal"
      :title="translateTitle"
      @ok="cancelModal"
      @hidden="cancelModal"
    >
      <b-table id="edit-table" :items="items" :fields="fields"> </b-table>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "EditTable",
  components: {},
  props: ["items", "fields"],
  data() {
    return {
      translateTitle: this.$t("table.edit"),
      modal: this.$route.meta.modal,
    };
  },
  methods: {
    cancelModal() {
      this.$router.push("/user-name/:dashboard");
    },
  },
};
</script>
