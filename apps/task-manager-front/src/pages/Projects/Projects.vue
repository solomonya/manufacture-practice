<template>
  <main class="projects-page">
    <section class="projects-section">
      <h1>Your projects</h1>
    </section>
  </main>
</template>

<style scoped>
  .projects-page {
    padding: 20px;
    display: flex;
    gap: 20px;
  }

  .projects-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>

<script setup>
import { useQuery } from '@tanstack/vue-query';

const { isLoading, isError, data, error } = useQuery({
  queryKey: ['todos'],
  queryFn: async () => {
    const response = await fetch("http://localhost:3005/api/v1/task/");
    return await response.json();
  },
});
</script>