<template>
  <div class="flex min-h-screen items-center justify-center">
    <UCard class="w-full max-w-md">
      <template #header>
        <h1 class="text-2xl font-bold">Welcome to Nuxt 4</h1>
      </template>

      <p class="text-gray-500 dark:text-gray-400">
        This project is set up with <strong>TypeScript</strong> and <strong>Nuxt UI 4</strong>.
      </p>

      <template #footer>
        <UButton to="https://nuxt.com" target="_blank" label="Nuxt Docs" />
        <UButton to="https://ui.nuxt.com" target="_blank" label="Nuxt UI Docs" variant="outline" class="ml-2" />
      </template>
    </UCard>
  </div>
</template>
