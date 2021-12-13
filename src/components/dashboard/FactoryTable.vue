<template>
  <div id="factory-table">
    <b-table
      id="factory-table"
      :items="items"
      :fields="fields"
      caption-top
      hover
      responsive
      striped
      selectable
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
    {{ selected }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "FactoryList",
  data() {
    return {
      sortBy: null,
      sortDesc: false,
      selected: [],
      items: [
        {
          factory_unit: "Mk Makina",
          date_range: "2021-12-01",
          usage_kW: "2022-01-01",
          usage_fee: 230,
          discounted_price: false,
        },
        {
          factory_unit: "Boj Döküm",
          date_range: "2021-12-01",
          usage_kW: "2022-01-01",
          usage_fee: 130,
          discounted_price: true,
        },
      ],
    };
  },
  methods: {
    edit() {
      this.$router.push({
        name: "EditTable",
        query: { edit: "factory-list" },
        params: { items: this.items, fields: this.fields },
      });
    },
    onRowSelected(items) {
      this.selected = items.map((item) => {
        return item.factory_name;
      });
    },
  },
  computed: {
    fields() {
      return [
        {
          key: "factory_unit",
          label: this.$t("table.factory_unit"),
          sortable: false,
          type: "text",
        },
        {
          key: "date_range",
          label: this.$t("table.date_range"),
          sortable: true,
          type: "date",
        },
        {
          key: "usage_kW",
          label: this.$t("table.usage_kW"),
          sortable: true,
          type: "date",
        },
        {
          key: "usage_fee",
          label: this.$t("table.usage_fee"),
          sortable: true,
          type: "number",
        },
        {
          key: "discounted_price",
          label: this.$t("table.discounted_price"),
          sortable: true,
          type: "boolean",
        },
        { key: "edit", label: this.$t("table.actions"), type: "edit" },
      ];
    },
  },
};
</script>

<style></style>
