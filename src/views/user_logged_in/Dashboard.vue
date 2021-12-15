<template>
  <div id="dashboard">
    <b-card
      id="factory-list"
      style="display: inline-table"
      borderless="true"
      class="mt-5"
    >
      <FactoryList />
      <b-card id="factory-table" v-if="selected > []">
        <FactoryTable />
      </b-card>
    </b-card>
  </div>
</template>

<script>
import FactoryList from "@/components/dashboard/FactoryList";
import FactoryTable from "@/components/dashboard/FactoryTable";
import { mapState } from "vuex";

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
  computed: {
    ...mapState("simpleGet", ["selected"]),
  },
};
</script>

<style></style>
