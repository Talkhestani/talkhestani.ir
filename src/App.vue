<script setup lang="ts">
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue';
import Projects from '@/pages/Projects.vue';
import Skills from '@/pages/Skills.vue';
import Contact from '@/pages/Contact.vue';
import { Toaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css'
</script>

<template>
    <Navbar />
    <main class="ml-20">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </main>
    <Toaster />
    <Footer />
</template>