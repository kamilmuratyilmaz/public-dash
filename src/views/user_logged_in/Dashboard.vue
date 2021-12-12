<template>
  <div id="dashboard">
    <h1>THIS IS DASHBOARD</h1>
    <b-card style="display: inline-table" border-variant="success">
      <FactoryList />
    </b-card>
    <FactoryTable />
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
};
</script>

<style></style>
