import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "./SmoothScroll";

gsap.registerPlugin(ScrollTrigger);




const assets = {
  mockup:
    'https://www.figma.com/api/mcp/asset/ad7b93eb-71ed-428c-b635-4c8ab7f2b957.png',
  showcase:
    'https://www.figma.com/api/mcp/asset/e3916b58-a34c-41d3-8003-c0fc4ff703c7.png',
  team:
    'https://www.figma.com/api/mcp/asset/a145adc1-4231-46e5-a37b-80128cb1ae5b.png',
  author:
    'https://www.figma.com/api/mcp/asset/cfc8e615-1a43-431c-a84c-c06c699f91a8.png',
  reviewer:
    'https://www.figma.com/api/mcp/asset/398aa7a9-1d8f-4248-b2f9-c3ecb49c59a8.png',
  reviewerAlt:
    'https://www.figma.com/api/mcp/asset/a7e70f2e-d29a-40a5-a7bc-de51a4b60897.png',
  reviewerAlt2:
    'https://www.figma.com/api/mcp/asset/c8aaff2e-4e34-42d9-b2cd-2dd8c651b1d8.png',
  logo:
    'https://www.figma.com/api/mcp/asset/4dfc366c-8366-40e4-a234-d5946ccfeb5d.svg',
  partner:
    'https://www.figma.com/api/mcp/asset/45b1ee4c-7ba3-4953-b251-68b07f6ea451.svg',
  arrow:
    'https://www.figma.com/api/mcp/asset/07e22bec-8fc8-4a3d-98a1-ea764cfe9586.svg',
  chevron:
    'https://www.figma.com/api/mcp/asset/2265b448-c040-4f64-b115-47eaa7ee1482.svg',
  calendar:
    'https://www.figma.com/api/mcp/asset/69defb28-4217-461c-bcf2-a893d8cd6a0e.svg',
  branch:
    'https://www.figma.com/api/mcp/asset/f9de156f-9d96-4bc1-88d1-94999f7c400a.svg',
  activity:
    'https://www.figma.com/api/mcp/asset/3754f887-c04b-48fa-8ba1-76f5c4f5476e.svg',
  cpu:
    'https://www.figma.com/api/mcp/asset/77620a9a-3b35-4170-86de-3dd7daf80be7.svg',
  star:
    'https://www.figma.com/api/mcp/asset/0df378f9-c635-4037-a2b8-1a600efb0083.svg',
  check:
    'https://www.figma.com/api/mcp/asset/63f5cd5f-d452-46a0-80b8-66b14eee2ff3.svg',
  mail:
    'https://www.figma.com/api/mcp/asset/ae4ba638-b667-47a5-9180-1ae6711e9f42.svg',
  plus:
    'https://www.figma.com/api/mcp/asset/a3489f44-7cb9-474e-abe6-0135f75a09da.svg',
  twitter:
    'https://www.figma.com/api/mcp/asset/61bb8b43-bf63-4b3b-899f-800fccd83024.svg',
  github:
    'https://www.figma.com/api/mcp/asset/ddb046ee-f90b-4416-86a4-0accf6a04638.svg',
  linkedin:
    'https://www.figma.com/api/mcp/asset/df8f4b20-227c-45de-aeec-288b5588a8ff.svg',
  youtube:
    'https://www.figma.com/api/mcp/asset/9d3c0fbf-4600-48b2-b50f-082b8f9f3e46.svg',
}

const navItems = ['Features', 'Integrations', 'Pricing', 'About', 'FAQ']
const partners = ['Linear', 'Vercel', 'Retool', 'Supabase', 'Stripe', 'Clerk']
const stats = [
  ['99.99%', 'Uptime Guaranteed'],
  ['45M+', 'Tasks Routed Daily'],
  ['< 12ms', 'Average Latency'],
  ['14 Days', 'No-CC Free Trial'],
]
const features = [
  [
    assets.branch,
    'Visual Path Builder',
    'Drag, drop, and configure paths between any data structures without writing code.',
  ],
  [
    assets.activity,
    'Real-time Auditing',
    'Inspect payloads down to the millisecond with live streaming performance charts.',
  ],
  [
    assets.cpu,
    'Edge Processing',
    'Run routing logic close to your users with resilient distributed execution.',
  ],
]
const steps = [
  ['01', 'Install Connector', 'Authorize source systems and select the payloads you want AuraFlow to observe.'],
  ['02', 'Create Logic Layers', 'Build conditional routes, fallback paths, and alerting rules from reusable blocks.'],
  ['03', 'Ship Automatically', 'Deploy live workflows with rollback controls and deep operational telemetry.'],
]
const testimonials = [
  [
    'AuraFlow let us replace brittle scripts with observable workflows. The team shipped our migration plan in a single afternoon.',
    'Nia Vaughn',
    'VP Engineering, Method Labs',
    assets.reviewer,
  ],
  [
    'The path builder is fast, precise, and surprisingly calm. We can finally see what every service is doing.',
    'Leo Marin',
    'Platform Lead, HatchOps',
    assets.reviewerAlt,
  ],
  [
    'We needed enterprise controls without slowing product teams down. AuraFlow gave us both.',
    'Priya Shah',
    'Head of Infrastructure, Ozone',
    assets.reviewerAlt2,
  ],
]
const plans = [
  {
    name: 'Starter',
    description: 'For small teams connecting their first automated pipelines.',
    price: '$29',
    suffix: '/month',
    features: ['3 active workflows', '10,000 runs per month', 'Basic log retention', 'Email support access'],
    action: 'Start trial',
  },
  {
    name: 'Growth',
    description: 'For scaling product teams with production automation needs.',
    price: '$79',
    suffix: '/month',
    featured: true,
    features: [
      '25 active workflows',
      '250,000 runs per month',
      '30 day audit log history',
      'Priority support queue',
      'Team roles and shared workspaces',
    ],
    action: 'Start free trial',
  },
  {
    name: 'Enterprise',
    description: 'For high-scale engineering pipelines requiring security standards.',
    price: 'Custom',
    features: [
      'Millions of runs per month',
      'SOC2 compliance environments',
      '99.99% uptime contract guarantee',
      'Dedicated technical support partner',
      'Single-Sign-On (SSO / SAML)',
    ],
    action: 'Contact sales',
  },
]
const faqs = [
  [
    'Does AuraFlow store sensitive payload data?',
    'No. By default, payload body structures are inspected ephemeral-only for routing filters. You can toggle strict payload masking inside dashboard security panels.',
  ],
  [
    'How does the edge engine prevent latency?',
    'We distribute lightweight JavaScript route environments across 40+ global cloud regions. Your webhook triggers evaluate locally within 10ms of trigger initiation.',
  ],
  [
    'What happens if a connected system fails?',
    'AuraFlow executes pre-configured retry states automatically. If timeouts persist, we secure the run data inside a quarantined error queue and notify your team via Slack.',
  ],
  [
    'Can I manage paths programmatically?',
    'Absolutely. AuraFlow ships with a robust Terraform provider and custom CLI companion tools for declarative state configurations.',
  ],
]

function Icon({ src, size = 16, alt = '' }) {
  return (
    <span
      className="inline-grid shrink-0 place-items-center overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img src={src} alt={alt} className="h-full w-full object-contain" />
    </span>
  )
}

function Logo({ inverse = false }) {
  return (
    <a className="flex items-center gap-2" href="#top" aria-label="AuraFlow home">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-600">
        <Icon src={assets.logo} size={18} />
      </span>
      <span className={`font-display text-xl font-extrabold ${inverse ? 'text-white' : 'text-slate-900'}`}>
        AuraFlow
      </span>
    </a>
  )
}

function Button({ children, icon = assets.arrow, variant = 'primary', block = false }) {
  const base =
    'inline-flex items-center justify-center gap-2 min-h-11 px-6 py-3 rounded-lg border border-transparent font-bold text-[15px] leading-none whitespace-nowrap'
  const styles = {
    primary: 'bg-indigo-600 text-white shadow-[0_4px_6px_rgba(79,70,229,0.25)]',
    secondary: 'border-slate-200 bg-white text-slate-900',
  }
  return (
    <a className={`${base} ${styles[variant]} ${block ? 'w-full' : ''}`} href="#pricing">
      {children}
      {icon && <Icon src={icon} size={16} />}
    </a>
  )
}

function Badge({ children }) {
  return (
    <span className="inline-flex min-h-[26px] items-center rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-extrabold uppercase leading-none text-indigo-600 whitespace-nowrap">
      {children}
    </span>
  )
}

function SectionHeader({ eyebrow, title, copy, align = 'center' }) {
  const centered = align === 'center'
  return (
    <div className={`flex w-full flex-col gap-4 ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
      <Badge>{eyebrow}</Badge>
      <h2 className="font-display max-w-[820px] text-[clamp(32px,3.2vw,40px)] font-extrabold leading-[1.2] text-slate-900">
        {title}
      </h2>
      <p className="max-w-[640px] text-base leading-normal text-slate-600">{copy}</p>
    </div>
  )
}

function FeatureCard({ icon, title, copy }) {
  return (
    <article className="flex min-h-52 flex-col items-start gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-50">
        <Icon src={icon} size={24} />
      </span>
      <div className="flex flex-col gap-3">
        <h3 className="font-display text-xl font-extrabold text-slate-900">{title}</h3>
        <p className="text-[15px] leading-normal text-slate-600">{copy}</p>
      </div>
    </article>
  )
}

function PricingCard({ plan }) {
  return (
    <article
      className={`relative flex flex-col gap-8 rounded-2xl p-8 ${
        plan.featured
          ? 'border border-indigo-600 bg-white shadow-[0_14px_30px_rgba(79,70,229,0.12)]'
          : 'border border-slate-200 bg-slate-50'
      }`}
    >
      {plan.featured && (
        <span className="absolute right-6 top-6 rounded-full bg-indigo-50 px-2.5 py-1.5 text-xs font-extrabold text-indigo-600">
          Popular
        </span>
      )}
      <div className="flex flex-col gap-4">
        <h3 className="font-display text-2xl font-extrabold text-slate-900">{plan.name}</h3>
        <p className="text-[15px] leading-normal text-slate-600">{plan.description}</p>
        <div className="flex items-baseline gap-1">
          <span className="font-display text-[40px] font-black leading-none text-slate-900">
            {plan.price}
          </span>
          {plan.suffix && <small className="text-sm text-slate-600">{plan.suffix}</small>}
        </div>
      </div>
      <ul className="m-0 flex flex-1 list-none flex-col gap-4 p-0">
        {plan.features.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-slate-900">
            <Icon src={assets.check} size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={plan.featured ? 'primary' : 'secondary'}
        block
        icon={plan.name === 'Enterprise' ? assets.mail : assets.arrow}
      >
        {plan.action}
      </Button>
    </article>
  )
}

function App() {
  const mainRef = useRef(null)
  const pad = 'px-5 py-[72px] lg:px-[max(20px,5.55vw)] lg:py-[120px]'

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    const ctx = gsap.context(() => {
      // --- Hero entrance timeline (runs once on load) ---
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('header', { y: -28, opacity: 0, duration: 0.7 })
        .from(
          '#top > section:first-of-type h1',
          { y: 36, opacity: 0, duration: 0.8 },
          '-=0.35',
        )
        .from(
          '#top > section:first-of-type p',
          { y: 24, opacity: 0, duration: 0.6 },
          '-=0.5',
        )
        .from(
          '#top > section:first-of-type .flex-wrap',
          { y: 20, opacity: 0, duration: 0.6 },
          '-=0.4',
        )
        .from(
          '#top > section:first-of-type img',
          { y: 48, opacity: 0, scale: 0.97, duration: 0.9 },
          '-=0.35',
        )

      // --- Scroll-triggered reveals for every page section ---
      gsap.utils.toArray('main#top > section').forEach((section, index) => {
        if (index === 0) return // hero handled by the entrance timeline
        gsap.from(section.children, {
          scrollTrigger: { trigger: section, start: 'top 82%' },
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
        })
      })

      // --- Stagger cards inside grids (features / stats / testimonials / pricing) ---
      gsap.utils.toArray('main#top section .grid').forEach((grid) => {
        if (grid.closest('footer')) return
        gsap.from(grid.children, {
          scrollTrigger: { trigger: grid, start: 'top 85%' },
          y: 32,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        })
      })

      // --- Footer fade-in ---
      gsap.from('footer', {
        scrollTrigger: { trigger: 'footer', start: 'top 90%' },
        y: 32,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main id="top" ref={mainRef} className="w-full overflow-hidden bg-slate-50">
      
      <SmoothScroll />

      <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-slate-200 bg-slate-50/90 px-5 backdrop-blur-md md:h-20 md:flex-wrap md:py-4 lg:px-[max(20px,5.55vw)]">
        <div className="flex items-center gap-10">
          <Logo />
          
        </div>
        <nav aria-label="Primary navigation" className="hidden gap-6 text-sm font-medium text-slate-600 lg:flex">
            {navItems.map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </nav>
        <div className="flex items-center gap-4 text-sm font-bold text-slate-900">
          <a href="#signin">Sign in</a>
          <Button>Start free trial</Button>
        </div>
      </header>

      <section className="flex flex-col items-center gap-14 px-5 pt-16 pb-[88px] lg:px-[max(20px,5.55vw)] lg:pt-20 lg:pb-[120px]">
        <div className="flex flex-col items-center gap-6 text-center">
          <a className="flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white py-1.5 pr-4 pl-1.5 text-[13px] font-semibold text-slate-600" href="#features">
            <Badge>New Release</Badge>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">Introducing automated workflow triggers</span>
            <Icon src={assets.chevron} size={12} />
          </a>
          <h1 className="font-display max-w-[900px] text-[clamp(42px,5vw,64px)] font-black leading-[1.1] text-slate-900">
            Streamline your operational data flow in real-time
          </h1>
          <p className="max-w-[680px] text-lg leading-[1.6] text-slate-600">
            Connect all your software tools, configure custom automated paths,
            and gain deep performance visibility. Built for fast-moving
            engineering teams.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button>Deploy in 5 minutes</Button>
            <Button variant="secondary" icon={assets.calendar}>
              Book a personal demo
            </Button>
          </div>
        </div>
        <div className="h-[300px] w-full max-w-[1000px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_24px_48px_rgba(15,23,42,0.03)] lg:h-[420px] lg:rounded-2xl xl:h-[560px]">
          <img src={assets.mockup} alt="AuraFlow dashboard preview" className="h-full w-full object-cover" />
        </div>
      </section>

      <section aria-label="Trusted partners" className="flex flex-col items-center gap-6 border-y border-slate-200 bg-white px-5 py-12 lg:px-[max(20px,5.55vw)]">
        <p className="text-sm font-extrabold uppercase text-slate-600">Trusted by operations teams worldwide</p>
        <div className="flex flex-wrap items-center justify-center gap-5 md:w-full md:max-w-[1100px] lg:justify-between">
          {partners.map((partner) => (
            <span key={partner} className="flex items-center gap-2 font-display text-lg font-extrabold text-slate-600">
              <Icon src={assets.partner} size={20} />
              {partner}
            </span>
          ))}
        </div>
      </section>

      <section aria-label="AuraFlow platform stats" className="grid grid-cols-1 gap-4 px-5 py-[72px] sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:px-[max(20px,5.55vw)] lg:py-20">
        {stats.map(([value, label]) => (
          <article key={label} className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_6px_rgba(15,23,42,0.03)]">
            <strong className="font-display text-4xl font-black leading-none text-indigo-600">{value}</strong>
            <span className="text-sm font-semibold text-slate-600">{label}</span>
          </article>
        ))}
      </section>

      <section id="features" className={`flex flex-col items-center gap-16 bg-white ${pad}`}>
        <SectionHeader
          eyebrow="Key capabilities"
          title="Everything you need to automate workflows"
          copy="AuraFlow aggregates logs, tracks schema modifications, and triggers action pipelines exactly where your engineering stack operates."
        />
        <div className="grid w-full max-w-[1120px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([icon, title, copy]) => (
            <FeatureCard icon={icon} title={title} copy={copy} key={title} />
          ))}
        </div>
      </section>

      <section id="integrations" className={`grid grid-cols-1 items-center gap-10 bg-slate-50 lg:grid-cols-[minmax(0,1fr)_minmax(320px,520px)] lg:gap-16 ${pad}`}>
        <div>
          <SectionHeader
            align="left"
            eyebrow="Integrations"
            title="Configure and ship in seconds"
            copy="Map how data should move, observe every event, and keep teams informed from one clean command center."
          />
          <div className="mt-10 flex flex-col gap-6">
            {steps.map(([number, title, copy]) => (
              <article key={title} className="flex items-start gap-4 text-left">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-indigo-50 text-xs font-extrabold text-indigo-600">
                  {number}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-base font-extrabold text-slate-900">{title}</h3>
                  <p className="text-[15px] leading-normal text-slate-600">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_48px_rgba(15,23,42,0.04)]">
          <img src={assets.showcase} alt="AuraFlow workflow map" className="min-h-40 w-full object-cover md:min-h-80" />
        </div>
      </section>

      <section id="about" className={`grid grid-cols-1 items-center gap-10 bg-white lg:grid-cols-[minmax(320px,520px)_minmax(0,560px)] lg:gap-16 ${pad}`}>
        <img
          src={assets.team}
          alt="AuraFlow engineering team collaborating"
          className="h-72 w-full rounded-2xl object-cover md:h-[360px]"
        />
        <div className="flex flex-col items-center gap-[18px] text-center lg:items-start lg:text-left">
          <Badge>About</Badge>
          <h2 className="font-display text-[clamp(32px,3.2vw,40px)] font-extrabold leading-[1.2] text-slate-900">
            Engineered for developers, trusted by operators
          </h2>
          <p className="text-[15px] leading-normal text-slate-600">
            We pair robust developer primitives with executive-ready visibility,
            so every automated process can be tested, shipped, and audited with
            confidence.
          </p>
          <div className="mt-2.5 flex items-center gap-3">
            <img src={assets.author} alt="Mia Ren" className="h-10 w-10 rounded-full object-cover" />
            <span className="flex flex-col gap-0.5">
              <strong className="text-sm text-slate-900">Mia Ren</strong>
              <small className="text-xs text-slate-600">Founder and CEO</small>
            </span>
          </div>
        </div>
      </section>

      <section className={`flex flex-col items-center gap-16 bg-slate-50 ${pad}`}>
        <SectionHeader
          eyebrow="Testimonials"
          title="What developers are shipping with AuraFlow"
          copy="Engineering teams use AuraFlow to replace manual routing, brittle webhooks, and hard-to-debug automation scripts."
        />
        <div className="grid w-full max-w-[1120px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(([quote, name, role, avatar]) => (
            <article key={name} className="flex flex-col gap-[18px] rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex gap-[3px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Icon src={assets.star} size={14} key={index} />
                ))}
              </div>
              <p className="text-[15px] leading-normal text-slate-600">{quote}</p>
              <div className="mt-auto flex items-center gap-3">
                <img src={avatar} alt={name} className="h-10 w-10 rounded-full object-cover" />
                <span className="flex flex-col gap-0.5">
                  <strong className="text-sm text-slate-900">{name}</strong>
                  <small className="text-xs text-slate-600">{role}</small>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className={`flex flex-col items-center gap-16 bg-white ${pad}`}>
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, scale-aligned pricing"
          copy="Choose the plan that fits your automation volume today. Upgrade when you are ready to route more."
        />
        <div className="grid w-full grid-cols-1 items-stretch gap-6 md:max-w-[760px] md:grid-cols-2 lg:max-w-[1120px] lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard plan={plan} key={plan.name} />
          ))}
        </div>
      </section>

      <section id="faq" className={`flex flex-col items-center gap-16 bg-slate-50 ${pad}`}>
        <SectionHeader
          eyebrow="Questions"
          title="Frequently asked questions"
          copy="Can't find the exact technical specifications you are looking for? Contact our development support channel."
        />
        <div className="flex w-full max-w-[800px] flex-col gap-4">
          {faqs.map(([question, answer]) => (
            <article key={question} className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between gap-5">
                <h3 className="font-display text-base font-extrabold text-slate-900">{question}</h3>
                <Icon src={assets.plus} size={18} />
              </div>
              <p className="text-sm leading-normal text-slate-600">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="flex flex-col gap-16 bg-slate-900 px-5 pt-20 pb-12 lg:px-[max(20px,5.55vw)]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[minmax(260px,1.35fr)_repeat(3,minmax(140px,1fr))]">
          <div className="flex flex-col items-start gap-6">
            <Logo inverse />
            <p className="max-w-[300px] text-sm leading-normal text-slate-200">
              Real-time pipeline orchestration, engineered for rapid
              development stacks.
            </p>
            <div className="flex gap-4">
              {[assets.twitter, assets.github, assets.linkedin, assets.youtube].map(
                (src) => (
                  <a href="#social" key={src} aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-full bg-slate-800">
                    <Icon src={src} size={16} />
                  </a>
                ),
              )}
            </div>
          </div>
          {[
            ['Product', 'Features', 'Integrations', 'Pricing', 'Status Monitoring'],
            ['Resources', 'Documentation', 'API Reference', 'Guides', 'GitHub SDKs'],
            ['Company', 'About Us', 'Engineering Blog', 'Careers', 'Security & Trust'],
          ].map(([title, ...links]) => (
            <div className="flex flex-col items-start gap-3" key={title}>
              <h3 className="mb-1 text-sm font-extrabold uppercase text-white">{title}</h3>
              {links.map((link) => (
                <a href="#top" key={link} className="text-sm leading-normal text-slate-200">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between gap-6 border-t border-slate-800 pt-8 text-[13px] text-slate-200 md:flex-row md:items-center">
          <p>&copy; 2026 AuraFlow Inc. All rights reserved.</p>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#sla">SLA Agreement</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
