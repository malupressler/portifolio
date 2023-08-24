<template>
  <div>
    <NuxtLayout name="page">
      <img :src="TopImage" class="w-full h-28 rounded-xl object-cover"/>
      <div class="flex flex-col gap-6 lg:gap-9 mx-auto w-full md:w-10/12">
        <SectionParagraph>
          I'm Maria Luiza Iuras Pressler, I am a full-stack(FE-heavy) developer with expertise principally in 
          Node.js(using Javasccript but mostly Typescript), React, VueJs, Next, Nest and other frameworks,
          Passionate about technology, I am constantly seeking new opportunities 
          to accelerate my professional and personal growth.
          I have a knack for learning new skills and tools quickly and hope to make a positive contribution, 
          aiming to deliver the best possible results.
        </SectionParagraph>
        <SectionParagraph>
          I'm currently working full-time at
          <LinkBtn link="https://www.trileotech.com" text="IBM"/>
        </SectionParagraph>
        <SectionParagraph>
          I began my journey into web development while pursuing my Bachelor's degree in Information Systems at. 
          <LinkBtn link="https://www.trileotech.com" text="PUC-Campinas"/>
          During my time at the university, I took various courses that covered a wide range of topics, including
          Python, C, Java, Web development, Mobile app development (using Kotlin and Flutter),
          fundamentals and advanced concepts of Databases, UI/UX design, the software engineering process, Computer architecture,
          Logic in programming, AI, and other subjects that were integral to the curriculum.
          Building upon the foundation of knowledge I gained during my initial year at college, 
        </SectionParagraph>
        <SectionParagraph>
          I successfully secured an internship at IBM with a focus on web development. Joining the CIO (Config in Order) department, 
          I had the privilege of participating in projects that honed my expertise in the Vue framework.
          Additionally, I had the opportunity to work with databases like DB2 and MongoDb, along with Moongose,
          a highly valuable library for Node.js backend development.
          Furthermore, I immersed myself in backend and API development, primarily utilizing the Nest framework.
          I actively contributed to projects that involved Node.js coupled with TypeScript.
          My exploration extended to the realm of DevOps, deepening my understanding of Docker.
          Over the span of a year, I served as an intern within this field, which proved to be a pivotal period for my professional growth,
          ultimately leading to my transition into a full-time role.
          At present, I am full-time software developer of a global application team as a software developer.
          My responsibilities encompass the adept utilization of a diverse array of technologies, including React, Next.js, Redis, and Kafka.
        </SectionParagraph>
        <SectionParagraph>
          You can find my projects on my
          <LinkBtn link="https://github.com/malupressler" text="Github"/>
          or on my
          <LinkBtn link="/" text="Portfolio"/>
          page. I usually don't update my portfolio page but all my recent one's are on github.
        </SectionParagraph>
        <SectionParagraph>
          Outside of my work-life, I love to draw, take pictures,do some craftwork and listening to musics.
          or just hanging out.
        </SectionParagraph>
        <SectionParagraph>
          Credits to
          <LinkBtn link="https://aniketkotal.me/" text="@aniketkotal"/>
          for the project boilerplate!
        </SectionParagraph>
      </div>
      <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6"/>
      <div class="flex flex-col gap-5">
        <SectionTitle>Work</SectionTitle>
        <NuxtLayout name="section">
          <WorkListItem v-for="work in works" :key="work.id" :work="work"/>
        </NuxtLayout>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
import {useWorkStore} from "../store/workStore";
import TopImage from "../assets/imgs/about-image.jpg"

const workStore = useWorkStore();
const works = workStore.getAllWorks;
</script>
