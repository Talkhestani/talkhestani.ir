<script lang="ts" setup>
import ContactForm from '@/forms/ContactForm.vue';
import { Github } from 'lucide-vue-next';
</script>

<template>
    <section id="contact" class="py-24 px-6 lg:px-16 dark:bg-zinc-950">
        <div class="max-w-6xl mx-auto">
            <h2
                class="relative text-4xl font-mono font-bold after:content[''] after:w-16 after:border-b after:border-1 after:absolute after:-bottom-5 after:left-0 ">
                Get in Touch
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">
                <div>
                    <h3 class="text-2xl font-mono mb-6">Let's Talk</h3>
                    <p class="text-gray-400 mb-8">Have a project in mind or want to discuss potential opportunities?
                        Drop me a message and I'll get back to you as soon as possible.</p>
                    <div class="space-y-6">
                        <div class="flex items-center">
                            <div
                                class="w-12 h-12 border border-zinc-500 rounded-sm flex items-center justify-center mr-4">
                                <span class="w-6 h-6 fill-none stroke-1 stroke-zinc-500"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                        </path>
                                    </svg></span>
                            </div>
                            <div>
                                <p class="text-sm text-gray-400">Email</p>
                                <a href="https://mailto:talkhestani@outlook.com" target="_blank"
                                    class="hover:text-gray-500 transition-colors">talkhestani@outlook.com</a>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div
                                class="w-12 h-12 border border-zinc-500 rounded-sm flex items-center justify-center mr-4">
                                <span class="w-6 h-6 fill-none stroke-1 stroke-zinc-500"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                                        </path>
                                    </svg></span>
                            </div>
                            <div>
                                <p class="text-sm text-gray-400">Phone</p>
                                <a href="tel:+989334701079" target="_blank"
                                    class="hover:text-gray-500 transition-colors">+989334701079</a>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div
                                class="w-12 h-12 border border-zinc-500 rounded-sm flex items-center justify-center mr-4">
                                <span class="w-6 h-6 fill-none stroke-1 stroke-zinc-500"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                        </path>
                                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg></span>
                            </div>
                            <div>
                                <p class="text-sm text-gray-400">Location</p>
                                <a href="https://maps.google.com" target="_blank"
                                    class="hover:text-gray-500 transition-colors">Iran, Arak</a>
                            </div>
                        </div>
                        <div class="pt-8">
                            <h4 class="text-lg font-mono mb-4">Find me on</h4>
                            <div class="flex space-x-4">
                                <a href="https://github.com/talkhestani" target="_blank">
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
</template>