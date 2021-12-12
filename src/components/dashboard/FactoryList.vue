<template>
  <div id="factory-list">
    <b-table :items="items" :fields="fields" caption-top>
      <template #table-caption> Factory List </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        "factory_name",
        "subscribe_date",
        "subscription_ending",
        "employees",
        "special_subscriber",
      ],
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
};
</script>

<style></style>
