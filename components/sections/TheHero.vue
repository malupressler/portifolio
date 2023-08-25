<template>
  <div class="flex flex-col gap-8">
    <MainTitle>Maria Luiza Iuras Pressler</MainTitle>
     <MainSubtitle>Full-Stack Developer</MainSubtitle>
      <div class="flex items-center">
        <div>
          <MainParagraph>
            I'm Maria Luiza Iuras Pressler, I am a full-stack(FE-heavy) developer with expertise principally in 
            Node.js(using Javasccript but mostly Typescript), React, VueJs, Next, Nest and other frameworks,
            Passionate about technology, I am constantly seeking new opportunities 
            to accelerate my professional and personal growth.
            I have a knack for learning new skills and tools quickly and hope to make a positive contribution, 
            aiming to deliver the best possible results.
          </MainParagraph>
          <MainParagraph>
            I'm currently working full-time at
            <LinkBtn link="https://www.trileotech.com" text="IBM"/>
            as a Software Developer
          </MainParagraph>
      </div>
  <div class="border border-gray-500 rounded-md p-2">
  <img
    :alt="name"
    :src="profileImage"
    class="w-42 h-32 p-1 object-cover rounded-md slg:h-full"
  />
</div>

</div>

    <Skills/>
    <Languages/>
  </div>
</template>
<script setup>
import profileImage from "../../assets/imgs/profile.jpg"
</script>
<style>
  .float-left {
    float: left;
  }
</style>