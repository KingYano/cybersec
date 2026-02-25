<script setup lang="ts">
import type { NavigationMenuItem, FooterColumnsProps } from '@nuxt/ui'

const navigation = ref<NavigationMenuItem[]>([
  { label: 'Accueil', icon: 'i-lucide-home', to: '/' },
  { label: 'Services', icon: 'i-lucide-shield', to: '#services' },
  { label: 'Pourquoi nous', icon: 'i-lucide-award', to: '#pourquoi' },
  { label: 'Contact', icon: 'i-lucide-mail', to: '#contact' }
])

const footerColumns = ref<FooterColumnsProps['columns']>([
  {
    label: 'Services',
    children: [
      { label: 'Offensif', to: '#services' },
      { label: 'Défensif', to: '#services' },
      { label: 'Datascience', to: '#services' },
      { label: 'Consulting', to: '#services' }
    ]
  },
  {
    label: 'Entreprise',
    children: [
      { label: 'À propos', to: '#pourquoi' },
      { label: 'Contact', to: '#contact' },
      { label: 'Carrières', to: '#' }
    ]
  },
  {
    label: 'Ressources',
    children: [
      { label: 'Blog', to: '#' },
      { label: 'Documentation', to: '#' },
      { label: 'Support', to: '#' }
    ]
  }
])
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        <span class="text-primary-400 font-bold text-xl">Fidelilium</span>
      </template>

      <UNavigationMenu :items="navigation" />

      <template #right>
        <UColorModeButton />
        <UButton label="Devis gratuit" color="primary" variant="solid" to="#contact" />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>
      <template #top>
        <UFooterColumns :columns="footerColumns" />
      </template>

      <template #left>
        <span class="text-muted text-sm">&copy; {{ new Date().getFullYear() }} Fidelilium. Tous droits réservés.</span>
      </template>

      <template #right>
        <UButton icon="i-simple-icons-linkedin" color="neutral" variant="ghost" to="https://linkedin.com" target="_blank" aria-label="LinkedIn" />
        <UButton icon="i-simple-icons-x" color="neutral" variant="ghost" to="https://x.com" target="_blank" aria-label="X" />
        <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" to="https://github.com" target="_blank" aria-label="GitHub" />
      </template>
    </UFooter>
  </UApp>
</template>
