<template>
  <div id="edit-table-modal">
    <b-modal
      id="modal-center"
      centered
      size="xl"
      v-model="modal"
      :title="translateTitle"
      @ok="cancelModal"
      @hidden="cancelModal"
    >
      <b-table id="edit-table" :items="items" :fields="fields" responsive>
        <template #cell(factory_name)="data">
          <b-form-input
            v-if="items[data.index].isEdit && selectedCell === 'factory_name'"
            type="text"
            v-model="items[data.index].factory_name"
          ></b-form-input>
          <span v-else @click="editCellHandler(data, 'factory_name')">{{
            data.value
          }}</span>
        </template>
        <template #cell(subscribe_date)="data">
          <b-form-input
            v-if="items[data.index].isEdit && selectedCell === 'subscribe_date'"
            type="date"
            v-model="items[data.index].subscribe_date"
            class="form-control"
          ></b-form-input>
          <span v-else @click="editCellHandler(data, 'subscribe_date')">{{
            data.value
          }}</span>
        </template>
        <template #cell(subscription_ending)="data">
          <b-form-input
            v-if="
              items[data.index].isEdit && selectedCell === 'subscription_ending'
            "
            type="date"
            v-model="items[data.index].subscription_ending"
          ></b-form-input>
          <span v-else @click="editCellHandler(data, 'subscription_ending')">{{
            data.value
          }}</span>
        </template>
        <template #cell(employees)="data">
          <b-form-input
            v-if="items[data.index].isEdit && selectedCell === 'employees'"
            type="number"
            v-model="items[data.index].employees"
          ></b-form-input>
          <span v-else @click="editCellHandler(data, 'employees')">{{
            data.value
          }}</span>
        </template>
        <template #cell(special_subscriber)="data">
          <b-form-select
            v-if="
              items[data.index].isEdit && selectedCell === 'special_subscriber'
            "
            type="boolean"
            v-model="items[data.index].special_subscriber"
            :options="[true, false]"
          ></b-form-select>
          <span v-else @click="editCellHandler(data, 'special_subscriber')">{{
            data.value
          }}</span>
        </template>
      </b-table>
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
      selectedCell: null,
      translateTitle: this.$t("table.edit"),
      modal: this.$route.meta.modal,
    };
  },
  mounted() {
    this.items = this.items.map((item) => ({ ...item, isEdit: false }));
  },
  computed: {
    editableFields() {
      return this.fields.filter((field) => field.sortable);
    },
  },
  methods: {
    editCellHandler(data, name) {
      this.items = this.items.map((item) => ({ ...item, isEdit: false }));
      this.items[data.index].isEdit = true;
      this.selectedCell = name;
    },
    cancelModal() {
      this.$router.push("/user-name/:dashboard");
    },
  },
};
</script>
