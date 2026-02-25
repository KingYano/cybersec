<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

// Hero
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

// Services par catégorie
const serviceCategories = ref([
  {
    label: 'Intelligence Artificielle',
    icon: 'i-lucide-brain-circuit',
    services: [
      {
        title: 'Solutions IA sur mesure',
        description: 'Adaptez les algorithmes IA les plus innovants à vos besoins spécifiques, afin de créer des solutions personnalisées qui dépassent vos attentes. Chaque détail, des interfaces intuitives aux fonctionnalités avant-gardistes, est minutieusement conçu pour vous aider à atteindre le succès.',
        icon: 'i-lucide-cpu'
      },
      {
        title: 'Formations en IA immersive',
        description: 'Plongez dans l\'univers de l\'IA avec nos programmes de formation immersifs. Devenez le maître de votre destin numérique en apprenant à utiliser nos solutions avec aisance et confiance. L\'avenir appartient à ceux qui maîtrisent l\'IA, et nous sommes là pour vous y préparer.',
        icon: 'i-lucide-graduation-cap'
      },
      {
        title: 'Stratégie numérique et IA',
        description: 'Dans un monde où l\'innovation est la clé de la réussite, l\'IA se positionne comme le catalyseur de la transformation digitale. Nos consultants anticipent les tendances futures pour offrir une stratégie d\'IA visionnaire. Gouvernance numérique renforcée, organisation agile et opérations fluides.',
        icon: 'i-lucide-lightbulb'
      }
    ]
  },
  {
    label: 'Cybersécurité',
    icon: 'i-lucide-shield-check',
    services: [
      {
        title: 'Assistance immédiate en cas de cyberattaque',
        description: 'Notre équipe d\'intervention d\'urgence (CERT FIDELILIUM) est prête à agir rapidement pour contenir et neutraliser la menace, limitant les dommages et réduisant les temps d\'arrêt. Disponible 24/7 pour protéger vos actifs numériques.',
        icon: 'i-lucide-siren'
      },
      {
        title: 'PENTEST : tests d\'intrusion',
        description: 'Évaluez la sécurité de votre système d\'information, réseau ou application web (y compris mobile) en simulant une attaque par des acteurs malveillants. Méthodologie OWASP avec analyse statique et dynamique, en boîte noire, grise et blanche.',
        icon: 'i-lucide-search-code'
      },
      {
        title: 'Sécurisation et durcissement des architectures numériques',
        description: 'Maximisez la valeur de votre patrimoine numérique grâce à une architecture du système d\'information alignée sur vos objectifs stratégiques. Nous intégrons les principes de défense en profondeur et de Zero Trust pour une protection optimale.',
        icon: 'i-lucide-network'
      },
      {
        title: 'Cybersécurité managée by FIDELILIUM',
        description: 'Service de supervision et de protection continue de vos infrastructures. Notre SOC surveille, détecte et répond aux menaces en temps réel pour vous permettre de vous concentrer sur votre cœur de métier.',
        icon: 'i-lucide-monitor-check'
      }
    ]
  },
  {
    label: 'Conseil & Conformité',
    icon: 'i-lucide-scale',
    services: [
      {
        title: 'Audits organisationnels et techniques',
        description: 'Au cours de l\'audit, il est procédé au contrôle du niveau de la cybersécurité en observant de manière détaillée l\'adoption ou non des mesures organisationnelles et techniques généralement conseillées.',
        icon: 'i-lucide-clipboard-check'
      },
      {
        title: 'Conformité',
        description: 'Mise en conformité et suivi des référentiels réglementaires : NIS 2, ISO 27001, IEC 62 443, PCI-DSS, RGPD. Nous vous accompagnons de l\'évaluation initiale jusqu\'à la certification.',
        icon: 'i-lucide-file-check'
      },
      {
        title: 'Expertise NIS 2',
        description: 'Accompagnement dédié à la directive européenne NIS 2. Évaluation de votre exposition, définition de votre feuille de route de conformité et mise en œuvre des mesures techniques et organisationnelles requises.',
        icon: 'i-lucide-landmark'
      },
      {
        title: 'Sustainable IT',
        description: 'Repensez vos approches technologiques en mettant l\'accent sur la durabilité environnementale et l\'efficacité énergétique. Nous intégrons des pratiques respectueuses de l\'environnement dans la gestion de votre numérique.',
        icon: 'i-lucide-leaf'
      }
    ]
  }
])

const activeCategory = ref(0)

// Stats
const stats = ref([
  { value: '40+', label: 'Années d\'expérience cumulées' },
  { value: '24/7', label: 'Disponibilité CERT' },
  { value: 'ANSSI', label: 'Experts certifiés' },
  { value: '11', label: 'Services spécialisés' }
])

// Actualités
const actualites = ref([
  {
    title: 'FIDELILIUM au cœur de la cybersécurité spatiale européenne',
    description: 'Nicolas Malbec, CEO de FIDELILIUM, a participé à CYSAT Europe 2025, l\'événement de référence dédié à la cybersécurité appliquée aux systèmes spatiaux.',
    date: '2025-04-23',
    badge: 'Événement',
    icon: 'i-lucide-rocket'
  },
  {
    title: 'Sponsor de Unlock Your Brain – Harden Your System',
    description: 'FIDELILIUM est fier d\'avoir été sponsor de la 10ème édition de l\'UYBHYS, événement phare de la cybersécurité organisé par La Cantine numérique à Brest les 7 et 8 novembre.',
    date: '2025-11-07',
    badge: 'Sponsoring',
    icon: 'i-lucide-lock'
  },
  {
    title: 'Première édition de l\'OpenSSL Conference à Prague',
    description: 'Du 7 au 9 octobre 2025, Prague a accueilli la toute première édition de l\'OpenSSL Conference, un événement dédié à l\'écosystème OpenSSL, à la cryptographie et à la sécurité des communications. Plus de 400 participants de plus de 30 pays.',
    date: '2025-10-07',
    badge: 'Événement',
    icon: 'i-lucide-key-round'
  },
  {
    title: 'Défense Angels s\'allie à FIDELILIUM',
    description: 'Défense Angels, réseau de business angels positionné sur les technologies sensibles, annonce un partenariat stratégique avec FIDELILIUM. Au programme : sécurisation des startups deeptech, formation cyber et conformité ISO 27001 / NIS 2.',
    date: '2025-05-12',
    badge: 'Partenariat',
    icon: 'i-lucide-shield-plus'
  },
  {
    title: 'Mastère Cyberdéfense labellisé SecNumedu par l\'ANSSI',
    description: 'Le Mastère Cyberdéfense de l\'École Hexagone, dirigé par le Commandant Nicolas Malbec, a été labellisé SecNumedu par l\'ANSSI. Partenaires : Stormshield (Airbus), Outscale (Dassault Systèmes), HarfangLab.',
    date: '2025-03-01',
    badge: 'Formation',
    icon: 'i-lucide-graduation-cap'
  },
  {
    title: 'WINSEARCH et FIDELILIUM unissent leurs forces',
    description: 'WINSEARCH, cabinet de recrutement du groupe PROMAN, et FIDELILIUM annoncent la signature d\'un partenariat pour renforcer leurs actions commerciales et répondre aux besoins croissants en recrutement cyber.',
    date: '2024-12-10',
    badge: 'Partenariat',
    icon: 'i-lucide-handshake'
  },
  {
    title: 'Lancement de la 12ème édition du Cybermois',
    description: 'FIDELILIUM participe au #Cybermois2024 en tant qu\'acteur #CyberEngagés. Invité au lancement à l\'Assemblée nationale, représenté par Nicolas Malbec et Niels Merceron. Tables rondes sur les menaces cyber et la souveraineté numérique.',
    date: '2024-10-01',
    badge: 'Engagement',
    icon: 'i-lucide-calendar'
  },
  {
    title: 'Cybersécurité et industrie du futur',
    description: 'Nicolas Malbec a pris la parole lors d\'un afterwork chez Coentreprendre78 et l\'École Hexagone à Versailles, aux côtés de Julien Bonneau (Sociacom) et Manoel Bizien (Stormshield), sur la cybersécurité des systèmes industriels.',
    date: '2024-09-15',
    badge: 'Conférence',
    icon: 'i-lucide-factory'
  },
  {
    title: 'Jeunes IHEDN – Afrique et Cyber',
    description: 'Nicolas Malbec a assisté à une conférence sur la cybersécurité en Afrique organisée par Les Jeunes IHEDN à l\'ambassade du Gabon, avec Clément Domingo (Hackers Without Border), Didier Simba (CESIA) et Oumar Sow (PwC).',
    date: '2024-01-19',
    badge: 'Conférence',
    icon: 'i-lucide-globe'
  }
])

// Contact form
const contactForm = reactive({
  nom: '',
  email: '',
  entreprise: '',
  telephone: '',
  sujet: '',
  message: ''
})

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

const showAllActualites = ref(false)
const displayedActualites = computed(() =>
  showAllActualites.value ? actualites.value : actualites.value.slice(0, 6)
)

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function onSubmit() {
  // Placeholder for form submission
  alert('Merci ! Votre message a bien été envoyé. Nous vous répondrons sous 24h.')
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <UPageHero
      headline="Expert Cybersécurité & IA"
      title="Vous offrir le meilleur de la transformation numérique, en toute cybersécurité"
      description="Fondée par deux détenteurs du titre d'expert en sécurité des systèmes d'information de l'ANSSI, FIDELILIUM cumule plus de 40 ans d'expérience dans la défense des systèmes d'information. Préserver la confidentialité, l'intégrité et la disponibilité de vos actifs numériques."
      orientation="horizontal"
      :links="heroLinks"
    >
      <div class="relative flex items-center justify-center">
        <div class="from-primary-500/20 to-primary-500/0 absolute inset-0 rounded-full bg-gradient-to-br blur-3xl" />
        <UIcon name="i-lucide-shield-check" class="text-primary-400 relative size-48 sm:size-64" />
      </div>
    </UPageHero>

    <!-- Stats -->
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
      title="Des services complets en cybersécurité et intelligence artificielle"
      description="De la sécurité offensive au consulting, de l'IA sur mesure au numérique responsable, nous couvrons l'ensemble du spectre pour protéger et transformer votre organisation."
    >
      <!-- Category Tabs -->
      <UTabs
        :items="serviceCategories.map((cat, i) => ({ label: cat.label, icon: cat.icon, value: String(i) }))"
        :default-value="'0'"
        class="w-full"
        @update:model-value="(val: string | number) => activeCategory = Number(val)"
      >
        <template #content="{ item }">
          <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <UCard
              v-for="service in serviceCategories[Number(item?.value)]?.services"
              :key="service.title"
              class="h-full"
            >
              <div class="flex items-start gap-4">
                <div class="bg-primary-500/10 flex size-12 shrink-0 items-center justify-center rounded-lg">
                  <UIcon :name="service.icon" class="text-primary-400 size-6" />
                </div>
                <div>
                  <h3 class="text-highlighted text-lg font-semibold">{{ service.title }}</h3>
                  <p class="text-muted mt-2 text-sm leading-relaxed">{{ service.description }}</p>
                </div>
              </div>
            </UCard>
          </div>
        </template>
      </UTabs>
    </UPageSection>

    <!-- Why Us Section -->
    <UPageSection
      id="pourquoi"
      headline="Pourquoi FIDELILIUM"
      title="La confiance au cœur de notre engagement"
      description="Experts en cyberdéfense, souveraineté et transformation numérique, nous mettons notre savoir-faire au service de la protection de votre entreprise."
      :features="[
        {
          title: 'Expertise ANSSI',
          description: 'Fondée par deux détenteurs du titre d\'expert en sécurité des systèmes d\'information de l\'ANSSI avec plus de 40 ans d\'expérience cumulée.',
          icon: 'i-lucide-award'
        },
        {
          title: 'CERT FIDELILIUM 24/7',
          description: 'Notre équipe d\'intervention d\'urgence est disponible 24h/24 et 7j/7 pour contenir et neutraliser rapidement toute cybermenace.',
          icon: 'i-lucide-siren'
        },
        {
          title: 'Double expertise Cyber & IA',
          description: 'Une approche unique combinant cybersécurité et intelligence artificielle pour anticiper les menaces et optimiser vos défenses.',
          icon: 'i-lucide-brain-circuit'
        },
        {
          title: 'Conformité réglementaire',
          description: 'Accompagnement complet : NIS 2, ISO 27001, IEC 62 443, PCI-DSS, RGPD. De l\'évaluation initiale à la certification.',
          icon: 'i-lucide-scale'
        },
        {
          title: 'Engagement CyberEngagés',
          description: 'Acteur reconnu de l\'écosystème cyber français, partenaire du Cybermois et sponsor d\'événements majeurs comme UYBHYS et CYSAT.',
          icon: 'i-lucide-heart-handshake'
        },
        {
          title: 'Numérique responsable',
          description: 'Nous intégrons le Sustainable IT dans notre approche pour réduire l\'empreinte environnementale de vos systèmes d\'information.',
          icon: 'i-lucide-leaf'
        }
      ]"
    />

    <!-- Actualités Section -->
    <UPageSection
      id="actualites"
      headline="Actualités"
      title="Les dernières nouvelles de FIDELILIUM"
      description="Conférences, partenariats et engagements : suivez l'actualité de notre équipe au cœur de l'écosystème cybersécurité."
    >
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="actu in displayedActualites"
          :key="actu.title"
          class="h-full"
        >
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <UBadge :label="actu.badge" color="primary" variant="subtle" size="sm" />
              <span class="text-muted text-xs">{{ formatDate(actu.date) }}</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon :name="actu.icon" class="text-primary-400 mt-1 size-5 shrink-0" />
              <h3 class="text-highlighted font-semibold leading-tight">{{ actu.title }}</h3>
            </div>
            <p class="text-muted text-sm leading-relaxed">{{ actu.description }}</p>
          </div>
        </UCard>
      </div>
      <div v-if="actualites.length > 6" class="mt-8 flex justify-center">
        <UButton
          :label="showAllActualites ? 'Voir moins' : `Voir toutes les actualités (${actualites.length})`"
          variant="outline"
          color="neutral"
          :icon="showAllActualites ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
          @click="showAllActualites = !showAllActualites"
        />
      </div>
    </UPageSection>

    <!-- Contact Form Section -->
    <UPageSection
      id="contact"
      headline="Contact"
      title="Échangeons sur vos besoins"
      description="Remplissez le formulaire ci-dessous et nos experts vous répondront sous 24h pour un premier échange gratuit."
    >
      <div class="mx-auto max-w-2xl">
        <UCard>
          <UForm :state="contactForm" @submit="onSubmit">
            <div class="flex flex-col gap-4">
              <div class="grid gap-4 sm:grid-cols-2">
                <UFormField label="Nom complet" name="nom" required>
                  <UInput v-model="contactForm.nom" placeholder="Jean Dupont" icon="i-lucide-user" class="w-full" />
                </UFormField>
                <UFormField label="Email" name="email" required>
                  <UInput v-model="contactForm.email" type="email" placeholder="jean@entreprise.fr" icon="i-lucide-mail" class="w-full" />
                </UFormField>
              </div>
              <div class="grid gap-4 sm:grid-cols-2">
                <UFormField label="Entreprise" name="entreprise">
                  <UInput v-model="contactForm.entreprise" placeholder="Nom de votre entreprise" icon="i-lucide-building-2" class="w-full" />
                </UFormField>
                <UFormField label="Téléphone" name="telephone">
                  <UInput v-model="contactForm.telephone" type="tel" placeholder="+33 6 00 00 00 00" icon="i-lucide-phone" class="w-full" />
                </UFormField>
              </div>
              <UFormField label="Sujet" name="sujet" required>
                <USelect
                  v-model="contactForm.sujet"
                  placeholder="Sélectionnez un sujet"
                  :items="[
                    'Audit de cybersécurité',
                    'Test d\'intrusion (Pentest)',
                    'Solutions IA sur mesure',
                    'Conformité NIS 2 / ISO 27001',
                    'Cybersécurité managée',
                    'Formation',
                    'Assistance urgente (CERT)',
                    'Autre'
                  ]"
                  class="w-full"
                />
              </UFormField>
              <UFormField label="Message" name="message" required>
                <UTextarea
                  v-model="contactForm.message"
                  placeholder="Décrivez votre besoin..."
                  :rows="5"
                  class="w-full"
                />
              </UFormField>
              <div class="flex justify-end">
                <UButton type="submit" label="Envoyer le message" icon="i-lucide-send" size="lg" />
              </div>
            </div>
          </UForm>
        </UCard>
      </div>
    </UPageSection>

    <!-- CTA -->
    <UPageCTA
      title="Prêt à sécuriser votre entreprise ?"
      description="Contactez nos experts pour un audit gratuit de votre posture de sécurité. Notre équipe vous répond sous 24h."
      variant="subtle"
      :links="ctaLinks"
    />
  </div>
</template>
