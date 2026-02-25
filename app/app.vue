<script setup lang="ts">
import type { NavigationMenuItem, FooterColumnsProps } from '@nuxt/ui'

const navigation = ref<NavigationMenuItem[]>([
  { label: 'Accueil', icon: 'i-lucide-home', to: '/' },
  { label: 'Services', icon: 'i-lucide-shield', to: '#services' },
  { label: 'Pourquoi nous', icon: 'i-lucide-award', to: '#pourquoi' },
  { label: 'Actualités', icon: 'i-lucide-newspaper', to: '#actualites' },
  { label: 'Contact', icon: 'i-lucide-mail', to: '#contact' }
])

const footerColumns = ref<FooterColumnsProps['columns']>([
  {
    label: 'Intelligence Artificielle',
    children: [
      { label: 'Solutions IA sur mesure', to: '#services' },
      { label: 'Formations en IA immersive', to: '#services' },
      { label: 'Stratégie numérique et IA', to: '#services' }
    ]
  },
  {
    label: 'Cybersécurité',
    children: [
      { label: 'CERT FIDELILIUM', to: '#services' },
      { label: 'Pentest', to: '#services' },
      { label: 'Cybersécurité managée', to: '#services' },
      { label: 'Architecture sécurisée', to: '#services' }
    ]
  },
  {
    label: 'Conseil & Conformité',
    children: [
      { label: 'Audits', to: '#services' },
      { label: 'Conformité NIS 2 / ISO 27001', to: '#services' },
      { label: 'Sustainable IT', to: '#services' }
    ]
  },
  {
    label: 'Entreprise',
    children: [
      { label: 'À propos', to: '#pourquoi' },
      { label: 'Actualités', to: '#actualites' },
      { label: 'Contact', to: '#contact' }
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
        <UButton icon="i-simple-icons-linkedin" color="neutral" variant="ghost" to="https://www.linkedin.com/company/fidelilium" target="_blank" aria-label="LinkedIn" />
      </template>
    </UFooter>
  </UApp>
</template>
