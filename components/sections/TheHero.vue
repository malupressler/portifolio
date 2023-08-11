<template>
  <div class="flex flex-col gap-8">
    <MainTitle>Maria Luiza Iuras Pressler</MainTitle>
     <MainSubtitle>Full-Stack Developer</MainSubtitle>
    <MainParagraph>
      I'm Maria Luiza Iuras Pressler, I am a full-stack(FE-heavy) developer with expertise principally in 
      Node.js(using Javasccript but mostly Typescript), React, VueJs, Next, Nest and other frameworks,
      Passionate about technology, I am constantly seeking new opportunities 
      to accelerate my professional and personal growth.
      I have a knack for learning new skills and tools quickly and hope to make a positive contribution, 
      aiming to deliver the best possible results.
    </MainParagraph>
    <MainParagraph>
      <img
        :alt="name"
        :src="TopImage"
        class="w-full object-cover rounded-md slg:h-48"
    />
      I'm currently working full-time at
        <LinkBtn link="https://www.trileotech.com" text="IBM"/>
      as a Software Developer
    </MainParagraph>
    <Skills/>
  </div>
</template>
<script setup>
import TopImage from "../../assets/imgs/about-image.jpg"
</script>