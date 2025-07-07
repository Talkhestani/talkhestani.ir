<script lang="ts" setup>
import { Button } from '@/components/ui/button';
</script>

<template>
    <section id="home" class="min-h-screen flex items-center dark:bg-zinc-950 px-6 lg:px-16">
        <div class="max-w-4xl w-full mx-auto">
            <div class="space-y-4 fade-up">
                <div>
                    <span class="text-base sm:text-lg md:text-xl font-mono text-gray-400">Hello I'm</span>
                    <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold font-mono leading-tight mt-2">M.H Talkhestani
                    </h1>
                    <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold font-mono leading-tight text-gray-400 mt-2">
                        Full Stack Developer.</h2>
                </div>

                <p class="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl">
                    I craft modern, scalable web applications with clean code and great user experience.
                </p>

                <div class="flex flex-wrap gap-4 pt-6">
                    <Button class="rounded-xs py-6" variant="default" as-child>
                        <a href="#projects" class="btn-primary">View Projects</a>
                    </Button>

                    <Button class="rounded-xs py-6" variant="outline" as-child>
                        <a href="#contact" class="btn-secondary">Get In Touch</a>
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>