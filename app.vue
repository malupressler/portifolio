<template>
  <NuxtLayout name="default">
    <NuxtPage v-slot="{ Component }">
      <component :is="Component"/>
    </NuxtPage>
  </NuxtLayout>
  <Teleport to="body">
    <TheNavbar/>
    <CookiesNotification/>
  </Teleport>
</template>

<script lang="ts" setup>
import {useHead} from "#head";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const images = import.meta.glob("./assets/pageMeta/*.{png,svg,ico}", {as: 'url', eager: true});


useHead({
  title: "Maria Luiza - Full Stack Web Developer",
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: images["./assets/pageMeta/32icon.png"],
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      href: images["./assets/pageMeta/32icon.png"],
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: images["./assets/pageMeta/180icon.png"],
      sizes: "180x180",
    },
    {
      rel: "mask-icon",
      href: images["./assets/pageMeta/safari-pinned-tab.svg"],
      color: "#5bbad5"
    },
    {
      property: "og:title",
      content: "Maria Luiza - Full Stack Web Developer"
    },
    {
      property: "twitter:title",
      content: "Maria Luiza - Full Stack Web Developer"
    },
    {
      name: "description",
      content: "Web Developer designing Beautiful, Intuitive Websites"
    },
    {
      name: "og:description",
      content: "Web Developer designing Beautiful, Intuitive Websites"
    },
    {
      name: "twitter:description",
      content: "Web Developer designing Beautiful, Intuitive Websites"
    },
  ],
})
// Initialize AOS only on the client side
if (process.client) {
  AOS.init();
}

</script>

