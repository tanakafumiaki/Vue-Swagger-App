<template>
    <div>
      <h1>Items</h1>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: []
      };
    },
    async created() {
      try {
        const response = await fetch('/items');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.items = await response.json();
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }
  };
  </script>