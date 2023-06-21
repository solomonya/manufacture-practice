<template>
  <main class="projects-page">
    <section class="projects-section">
      <h1>Your projects</h1>
      <article v-for="project in data.projects">
        <h4>{{project.name}}</h4>
      </article>
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
import { sendRequest, QueryKeys } from '@/api';

const { isLoading, isError, data, error } = useQuery({
  queryKey: [QueryKeys.TASKS],
  queryFn: () => sendRequest({ endpoint: '/project/' })
});
</script>