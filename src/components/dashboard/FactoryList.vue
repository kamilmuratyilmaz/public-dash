<template>
  <div id="factory-list">
    <b-table
      id="factory-list"
      :items="items"
      :fields="fields"
      caption-top
      hover
      responsive
      striped
      selectable
      select-mode="single"
      @row-selected="onRowSelected"
      head-variant="dark"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
    >
      <template #table-caption>
        <b style="font-size: 20px">{{ $t("table.factory_list") }}</b>
      </template>

      <template #cell(edit)="row">
        <b-button size="sm" @click="edit()" class="mr-1">
          {{ $t("table.edit") }}
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? $t("table.hide") : $t("table.show") }}
          JSON
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <pre><b> {{ JSON.stringify(row.item,function replacer(key, value)
             {if (key == "_showDetails") return undefined;  return value; },'\t') }} 
          </b></pre>
        </b-card>
      </template>
    </b-table>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "FactoryList",
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
    };
  },
  computed: {
    ...mapState("simpleGet", ["selected"]),
    fields() {
      return [
        {
          key: "factory_name",
          label: this.$t("table.factory_name"),
          sortable: false,
          type: "text",
        },
        {
          key: "subscribe_date",
          label: this.$t("table.subscribe_date"),
          sortable: true,
          type: "date",
        },
        {
          key: "subscription_ending",
          label: this.$t("table.subscription_ending"),
          sortable: true,
          type: "date",
        },
        {
          key: "employees",
          label: this.$t("table.employees"),
          sortable: true,
          type: "number",
        },
        {
          key: "special_subscriber",
          label: this.$t("table.special_subscriber"),
          sortable: true,
          type: "boolean",
        },
        { key: "edit", label: this.$t("table.actions"), type: "edit" },
      ];
    },
  },
  methods: {
    ...mapActions("simpleGet", ["getFactory"]),
    edit() {
      this.$router.push({
        name: "EditTable",
        query: { edit: "factory-list" },
        params: { items: this.items, fields: this.fields },
      });
    },
    onRowSelected(items) {
      let factory = items.map((item) => {
        return item.factory_name;
      });
      this.getFactory(factory);
      console.log(this.selected);
    },
  },
};
</script>

<style></style>
