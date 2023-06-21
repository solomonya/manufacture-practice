<template>
  <v-layout>
    <v-app-bar color="primary" prominent>
      <v-toolbar-title>Projects</v-toolbar-title>
    </v-app-bar>
    <main class="projects-page">
      <section class="projects-section">
        <v-card
          v-for="project in data?.projects"
          width="400"
          :title="project.name"
          :subtitle="project.title"
        >
          <template v-slot:text>
            <router-link :to="'/projects/' + project.name">
              <article>
                <span>{{project.boards.length + ' boards'}}</span>
                <v-icon end icon="fa:fas fa-solid fa-arrow-right"></v-icon>
              </article>
            </router-link>
          </template>
        </v-card>
      </section>
    </main>
  </v-layout>
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