<script setup lang="ts">
import { Home, User, Terminal, Lamp, Mail, Moon, Sun } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import { useColorMode } from '@vueuse/core'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const mode = useColorMode()
const activeSection = ref<string | null>(null)

const navItems = [
    { id: 'home', icon: Home, tooltip: 'Home - Back top up' },
    { id: 'about', icon: User, tooltip: 'About Me - My Background & Experience' },
    { id: 'projects', icon: Terminal, tooltip: 'Projects - View My Work' },
    { id: 'skills', icon: Lamp, tooltip: 'Skills - My Technical Expertise' },
    // { id: 'process', icon: Clipboard, tooltip: 'Process - How I Approach Projects' },
    { id: 'contact', icon: Mail, tooltip: 'Contact - Get In Touch' }
]

const handleScroll = () => {
    const scrollPosition = window.scrollY + 100

    navItems.forEach(item => {
        const section = document.getElementById(item.id)
        if (!section) return

        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            activeSection.value = item.id
        }
    })
}

const scrollToSection = (sectionId: string) => {
    activeSection.value = sectionId
    const section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div
        class="fixed top-0 left-0 h-screen w-20 border-slate-200 dark:bg-zinc-900 border-r dark:border-zinc-800 flex flex-col items-center py-8 z-50">
        <Avatar class="mb-8">
            <AvatarImage src="https://github.com/talkhestani.png" alt="@talkhestani" />
            <AvatarFallback>T</AvatarFallback>
        </Avatar>

        <nav class="flex flex-col justify-center items-center gap-4">
            <TooltipProvider v-for="item in navItems" :key="item.id">
                <Tooltip>
                    <TooltipTrigger as-child>
                        <Button variant="outline"
                            class="rounded-xs"
                            :class="{ 'border-1 dark:border-white border-black': activeSection === item.id }"
                            @click="scrollToSection(item.id)">
                            <component :is="item.icon" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p>{{ item.tooltip }}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </nav>

        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger as-child class="mb-18">
                    <Button v-if="mode === 'light'" variant="outline" class="mt-auto rounded-xs" @click="mode = 'dark'">
                        <Moon />
                    </Button>
                    <Button v-else variant="outline" class="mt-auto rounded-xs" @click="mode = 'light'">
                        <Sun />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                    <p>Toggle Dark/Light Mode</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>
</template>