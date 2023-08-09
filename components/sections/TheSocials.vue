<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-1">
      <SocialIcon
        title="Github"
        link="https://github.com/malupressler"
        icon="ant-design:github-filled"
      />
      <SocialIcon
        title="Github"
        link="https://github.com/malupressler"
        icon="ant-design:linkedin-filled"
      />
      <!-- <SocialIcon
        title="Twitter"
        link="https://twitter.com/mightykillrr"
        icon="ant-design:twitter-outlined"
      /> -->
      <!-- <SocialIcon
        title="Instagram"
        link="https://www.instagram.com/"
        icon="ant-design:instagram-outlined"
      /> -->
    </div>
    <ActionButton link="mailto:malupressler@gmail.com">Email Me</ActionButton>
  </div>
</template>

<script setup lang="ts">
import ActionButton from "../ui/ActionButton.ts";
import SocialIcon from "../ui/SocialIcon.ts";
</script>
