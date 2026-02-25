<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

// Hero links
const heroLinks = ref<ButtonProps[]>([
  {
    label: 'Découvrir nos services',
    color: 'primary',
    size: 'xl',
    to: '#services',
    trailingIcon: 'i-lucide-arrow-down'
  },
  {
    label: 'Nous contacter',
    color: 'neutral',
    variant: 'outline',
    size: 'xl',
    to: '#contact',
    trailingIcon: 'i-lucide-mail'
  }
])

// Services
const services = ref([
  {
    title: 'Offensif',
    description: 'Simulation d\'attaques réelles pour identifier les vulnérabilités et tester la résilience de vos systèmes de sécurité.',
    icon: 'i-lucide-swords',
    features: ['Red Team', 'Pentest', 'Audit technique', 'Tests d\'intrusion']
  },
  {
    title: 'Défensif',
    description: 'Surveillance proactive, détection et réponse aux menaces pour protéger votre infrastructure contre les cyberattaques.',
    icon: 'i-lucide-shield-check',
    features: ['SOC managé', 'Réponse à incident', 'Forensic', 'Threat Intelligence']
  },
  {
    title: 'Datascience',
    description: 'Exploitation avancée des données pour anticiper les menaces et optimiser vos défenses grâce à l\'intelligence artificielle.',
    icon: 'i-lucide-brain-circuit',
    features: ['Elastic Stack', 'Machine Learning', 'Parsing & SIEM', 'Analyse prédictive']
  },
  {
    title: 'Consulting',
    description: 'Accompagnement stratégique et opérationnel pour renforcer votre posture de sécurité et assurer votre conformité.',
    icon: 'i-lucide-handshake',
    features: ['Formation', 'Audit organisationnel', 'Conformité (ISO, NIS2)', 'Assistance RSSI']
  }
])

// Stats
const stats = ref([
  { value: '200+', label: 'Audits réalisés' },
  { value: '99.9%', label: 'Disponibilité SOC' },
  { value: '50+', label: 'Clients protégés' },
  { value: '15+', label: 'Experts certifiés' }
])

// CTA links
const ctaLinks = ref<ButtonProps[]>([
  {
    label: 'Demander un devis',
    color: 'primary',
    size: 'xl',
    to: '#contact'
  },
  {
    label: 'En savoir plus',
    color: 'neutral',
    variant: 'subtle',
    size: 'xl',
    to: '#services',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <div>
    <!-- Hero Section -->
    <UPageHero
      headline="Expert Cybersécurité"
      title="Protégez votre entreprise avec Fidelilium"
      description="Nous combinons expertise offensive, défensive et datascience pour sécuriser votre système d'information. De l'audit au SOC managé, nous vous accompagnons à chaque étape."
      orientation="horizontal"
      :links="heroLinks"
    >
      <div class="relative flex items-center justify-center">
        <div class="from-primary-500/20 to-primary-500/0 absolute inset-0 rounded-full bg-gradient-to-br blur-3xl" />
        <UIcon name="i-lucide-shield-check" class="text-primary-400 relative size-48 sm:size-64" />
      </div>
    </UPageHero>

    <!-- Stats Section -->
    <UPageSection class="border-default border-y">
      <div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-primary-400 text-4xl font-bold">{{ stat.value }}</div>
          <div class="text-muted mt-1 text-sm">{{ stat.label }}</div>
        </div>
      </div>
    </UPageSection>

    <!-- Services Section -->
    <UPageSection
      id="services"
      headline="Nos expertises"
      title="Des services de cybersécurité complets"
      description="De la sécurité offensive au consulting, nous couvrons l'ensemble du spectre de la cybersécurité pour protéger votre organisation."
    >
      <UPageGrid>
        <UPageCard
          v-for="service in services"
          :key="service.title"
          :title="service.title"
          :description="service.description"
          :icon="service.icon"
        >
          <div class="mt-4 flex flex-wrap gap-2">
            <UBadge
              v-for="feature in service.features"
              :key="feature"
              :label="feature"
              color="primary"
              variant="subtle"
              size="sm"
            />
          </div>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <!-- Why Us Section -->
    <UPageSection
      id="pourquoi"
      headline="Pourquoi Fidelilium"
      title="La confiance au coeur de notre engagement"
      description="Fidelilium, c'est une équipe d'experts passionnés qui met son savoir-faire au service de la protection de votre entreprise."
      :features="[
        {
          title: 'Expertise certifiée',
          description: 'Nos consultants sont certifiés OSCP, CISSP, CEH et disposent d\'une expérience terrain reconnue.',
          icon: 'i-lucide-award'
        },
        {
          title: 'Réactivité 24/7',
          description: 'Notre SOC surveille vos infrastructures en continu et intervient en moins de 15 minutes en cas d\'incident.',
          icon: 'i-lucide-clock'
        },
        {
          title: 'Solutions sur mesure',
          description: 'Chaque entreprise est unique. Nous adaptons nos prestations à votre contexte, vos risques et votre budget.',
          icon: 'i-lucide-settings'
        },
        {
          title: 'Approche globale',
          description: 'De l\'audit technique à la conformité réglementaire, nous couvrons tous les aspects de la cybersécurité.',
          icon: 'i-lucide-globe'
        },
        {
          title: 'Innovation continue',
          description: 'Nous utilisons les dernières technologies en datascience et IA pour anticiper les menaces émergentes.',
          icon: 'i-lucide-lightbulb'
        },
        {
          title: 'Transparence totale',
          description: 'Rapports détaillés, tableaux de bord en temps réel et communication claire à chaque étape.',
          icon: 'i-lucide-eye'
        }
      ]"
    />

    <!-- CTA Section -->
    <UPageCTA
      id="contact"
      title="Prêt à sécuriser votre entreprise ?"
      description="Contactez nos experts pour un audit gratuit de votre posture de sécurité. Nous vous répondons sous 24h."
      variant="subtle"
      :links="ctaLinks"
    />
  </div>
</template>
