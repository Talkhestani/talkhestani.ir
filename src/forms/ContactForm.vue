<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import axios from 'axios'
import { ref } from 'vue'
import { toast } from 'vue-sonner'


const isLoading = ref(false)

const formSchema = toTypedSchema(z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Invalid email format."),
    message: z.string().min(5, "Message must be at least 5 characters.")
}))

const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit(async (values) => {
    isLoading.value = true
    
    try {
        await axios.post("https://portfolio-contact-microservice.siralidadi.workers.dev/", values)
        toast.success('Message send successfully.')
        form.resetForm()
    } catch {
        toast.error('There was a problem sending the message.')
    }

    isLoading.value = false
})
</script>


<template>
    <Card class="rounded-xs">
        <form @submit="onSubmit">
            <CardHeader>
                <CardTitle class="text-2xl font-mono mb-6">Send Message</CardTitle>
            </CardHeader>
            <CardContent class="mt-4 space-y-4">
                <FormField v-slot="{ componentField }" name="name">
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input class="rounded-xs py-6 mt-1" type="text" placeholder="Your name" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="email">
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input class="rounded-xs py-6 mt-1" type="text" placeholder="Your email" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="message">
                    <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                            <Input class="rounded-xs py-6 mt-1" type="text" placeholder="Your message" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
            </CardContent>
            <CardFooter class="flex justify-between px-6 pb-6 mt-8">
                <Button :disabled="isLoading" class="w-full rounded-xs py-6 cursor-pointer">Send Message</Button>
            </CardFooter>
        </form>
    </Card>
</template>