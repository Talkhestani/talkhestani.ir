<script lang="ts" setup>
const skills = {
    frontend: {
        'HTML': '/html.svg',
        'CSS': '/css.svg',
        'JavaScript': '/javascript.svg',
        'Tailwind CSS': '/tailwind.svg',
        'Alpine': '/alpine.svg'
    },
    backend: {
        'Python': '/python.svg',
        'Django': '/django.svg',
        'Flask': '/flask.svg'
    },
    database: {
        'PostgreSQL': '/postgreSQL.svg',
        'SQLite': '/sqlite.svg'
    },
    tools: {
        'VS Code': '/vscode.svg',
        'Figma': '/figma.svg',
        'Git': '/git.svg'
    },
    other: {
        'Linux': '/linux.svg',
    }
}
</script>

<template>
            <section id="skills" class="py-24 px-6 lg:px-16 bg-slate-200/20 dark:bg-black in-view">
            <div class="max-w-6xl mx-auto">
                <h2
                    class="relative text-4xl font-mono font-bold after:content[''] after:w-16 after:border-b after:border-1 after:absolute after:-bottom-5 after:left-0 ">
                    Technical Skills
                </h2>
                <div class="mt-12">
                    <div class="grid grid-cols-3 gap-8">
                        <div class="col-span-3 md:col-span-1" v-for="(skill, key) in skills">
                            <h3
                                class="relative font-mono after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-[50%] after:h-[1px] after:bg-gradient-to-r after:from-white after:to-transparent">
                                {{ key.toUpperCase() }}
                            </h3>

                            <ul class="flex flex-col gap-2 mt-4">
                                <li v-for="(item, key) in skill" class="flex gap-2 items-center border-b py-1">
                                    <div class="w-5">
                                        <img class="dark:invert dark:brightness-0 dark:opacity-80" :src="item" alt="{{ key }}">
                                    </div>
                                    <span class="text-sm text-primary">{{ key }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>