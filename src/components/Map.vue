<template>
  <div>
   {{title}}
   <geo-chart :data="[['United States', 44], ['Germany', 23], ['Brazil', 22]]"></geo-chart>

  </div>
</template>

<script>
export default {
  name: "Map",
  data: function() {
    return {
      title: "Map Component"
    };
  },
  methods: {
    
    }
  }

</script>

<style>

</style>
