<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge'
import axios from 'axios'
import { onMounted, reactive } from 'vue';
import EXCLUDE_REPO from '@/constants/exclude'

interface RepositoryInterface {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: Owner;
    html_url: string;
    description?: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage?: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language?: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    has_discussions: boolean;
    forks_count: number;
    mirror_url?: any;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license?: License;
    allow_forking: boolean;
    is_template: boolean;
    web_commit_signoff_required: boolean;
    topics: string[];
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
}

interface License {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
}

interface Owner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    user_view_type: string;
    site_admin: boolean;
}

const repos = reactive<RepositoryInterface[]>([])


onMounted(async () => {
    try {
        const response = await axios.get<RepositoryInterface[]>("https://api.github.com/users/talkhestani/repos")
        const filtered_data = response.data.filter(repo => {
            return EXCLUDE_REPO.indexOf(repo.name.toUpperCase()) == -1
        })
        repos.push(...filtered_data)
        console.log(repos);
    } catch { }
})
</script>

<template>
    <section id="projects" class="py-24 px-6 lg:px-16 dark:bg-zinc-950">
        <div class="max-w-6xl mx-auto">
            <h2
                class="relative text-4xl font-mono font-bold after:content[''] after:w-16 after:border-b after:border-1 after:absolute after:-bottom-5 after:left-0 ">
                Projects
            </h2>

            <div class="grid md:grid-cols-2 gap-8 mt-12 fade-in">
                <div v-for="repo in repos"
                    class="dark:bg-black border rounded-xs overflow-hidden hover-card group">
                    <div class="h-56 md:h-80 lg:h-80 bg-zinc-800 relative overflow-hidden">
                        <img :src="`https://opengraph.githubassets.com/${repo.id}/talkhestani/${repo.name}`"
                            loading="lazy" :alt="repo.name" class="w-full">
                        <div
                            class="absolute inset-0 hidden group-hover:flex transition-all items-center justify-center">
                            <div
                                class="backdrop-blur-sm bg-black/70 absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 z-10">
                                <Button variant="default">
                                    <a :href="repo.url">Source Code</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 font-mono">{{ repo.name.replace('-', '').toUpperCase() }}</h3>
                        <p v-if="repo.description" class="dark:text-gray-400 mb-4">{{ repo.description }}</p>
                        <div v-if="repo.topics" class="flex flex-wrap gap-2 mb-4">
                            <Badge v-for="topic in repo.topics" variant="outline" class="rounded-xs">{{ topic }}</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>