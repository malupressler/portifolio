<template>
  <div>
    <NuxtLayout name="section">
      <SectionTitle>Projects here</SectionTitle>
      <div
          class="grid grid-cols-1 slg:grid-cols-2 gap-7 sm:gap-6 pt-8 mx-auto sm:w-5/6 slg:w-full"
      >
        <ProjectItem
            v-for="project in projects"
            :key="project.id"
            :description="project.description"
            :image="project.image"
            :link="project.link"
            :name="project.name"
            :tech="project.tech"
        />
      </div>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import {useProjectStore} from "~/store/projectStore";
const {getFeaturedProjects} = useProjectStore();
const projects = getFeaturedProjects;
</script>
