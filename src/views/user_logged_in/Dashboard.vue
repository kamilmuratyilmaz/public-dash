<template>
  <div id="dashboard">
    <b-card
      id="factory-list"
      style="display: inline-table"
      borderless="true"
      class="mt-5"
    >
      <FactoryList />
      <b-card id="factory-table">
        <FactoryTable />
      </b-card>
    </b-card>
  </div>
</template>

<script>
import FactoryList from "@/components/dashboard/FactoryList";
import FactoryTable from "@/components/dashboard/FactoryTable";

export default {
  name: "Dashboard",
  components: {
    FactoryList,
    FactoryTable,
  },
  data() {
    return {
      route: this.$route.params.id,
    };
  },
};
</script>

<style></style>
