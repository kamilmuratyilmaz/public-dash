<template>
  <div id="factory-list">
    <b-table
      :ref="table"
      :items="items"
      :fields="fields"
      caption-top
      hover
      responsive
      striped
      selectable
      head-variant="dark"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
    >
      <template #table-caption>
        <b style="font-size: 20px">{{ $t("table.factory_list") }}</b>
      </template>

      <template #cell(actions)="row">
        <b-button
          size="sm"
          @click="edit(row.item, row.index, $event.target)"
          class="mr-1"
        >
          {{ $t("table.edit") }}
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? $t("table.hide") : $t("table.show") }}
          JSON
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row v-for="(value, key) in row.item" :key="key">
            <b> {{ JSON.stringify(key) }}: {{ JSON.stringify(value) }} </b>
          </b-row>
        </b-card>
      </template>
    </b-table>
    <b-modal
      :id="infoModal.id"
      :title="infoModal.title"
      ok-only
      @hide="resetInfoModal"
    >
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortBy: null,
      sortDesc: false,
      items: [
        {
          factory_name: "Mk Makina",
          subscribe_date: "2021-12-01",
          subscription_ending: "2022-01-01",
          employees: 230,
          special_subscriber: false,
        },
        {
          factory_name: "Boj Döküm",
          subscribe_date: "2021-12-01",
          subscription_ending: "2022-01-01",
          employees: 130,
          special_subscriber: true,
        },
      ],

      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },
  methods: {
    edit(item, index) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$router.push({
        name: "EditTable",
        path: "register",
        query: { edit: "factory-list" },
        params: { items: this.items, fields: this.fields },
      });
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
  },
  computed: {
    fields() {
      return [
        {
          key: "factory_name",
          label: this.$t("table.factory_name"),
          sortable: false,
        },
        {
          key: "subscribe_date",
          label: this.$t("table.subscribe_date"),
          sortable: true,
        },
        {
          key: "subscription_ending",
          label: this.$t("table.subscription_ending"),
          sortable: true,
        },
        { key: "employees", label: this.$t("table.employees"), sortable: true },
        {
          key: "special_subscriber",
          label: this.$t("table.special_subscriber"),
          sortable: true,
        },
        { key: "actions", label: this.$t("table.actions") },
      ];
    },
  },
};
</script>

<style></style>
