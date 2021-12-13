<template>
  <div id="dashboard">
    <h1>THIS IS DASHBOARD</h1>
    <b-card id="factory-list" style="display: inline-table" borderless="true">
      <FactoryList />
      <b-card id="factory-table">
        <FactoryTable />
      </b-card>
    </b-card>
    {{ route }}
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
