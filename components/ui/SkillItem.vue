<template>
  <a
    :href="link"
    class="flex flex-col w-full p-4 py-4 lg:p-4 lg:py-10 items-center gap-8 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm"
  >
    <SectionTitle>{{ name }}</SectionTitle>
    <div class="flex flex-col justify-between gap-4 slg:gap-5">
      <!-- Display the FontAwesome icon -->
      <font-awesome-icon :icon="componentMap[icon]" style="font-size: 6rem;" />
      <p class="text-sm md:text-base">
        {{ description }}
      </p>
    </div>
  </a>
</template>

<script setup>
import { defineProps } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faNodeJs, faVuejs, faReact, faDocker, faGithub, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFlaskVial } from '@fortawesome/free-solid-svg-icons';

const componentMap = {
  faNodeJs,
  faVuejs,
  faReact,
  faDocker,
  faDatabase,
  faFlaskVial,
  faGithub,
  faPython,
};

const props = defineProps({
  id: Number,
  name: String,
  icon: String,
  description: String,
  tech: Array,
  link: String,
});

// Register the FontAwesomeIcon component for this component
const components = {
  FontAwesomeIcon,
};
</script>
