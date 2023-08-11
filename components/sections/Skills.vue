<template>
  <div>
    <NuxtLayout name="section">
      <SecondSubtitle>Skills</SecondSubtitle>
      <p>Here are some of the projects that I'm proud of.</p>
      <div
          class="grid grid-cols-1 slg:grid-cols-4 gap-7 sm:gap-6 pt-8 mx-auto sm:w-5/6 slg:w-full"
      >
        <SkillItem
            v-for="skill in Skills"
            :key="skill.id"
            :description="skill.description"
            :icon="skill.icon"
            :link="skill.link"
            :name="skill.name"
            :tech="skill.tech"
        />
      </div>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
// import { BeakerIcon } from '@heroicons/vue/24/solid'
import {useSkillStore} from "~/store/skillStore";

const {getAllSkills} = useSkillStore();
const Skills = getAllSkills;
</script>
