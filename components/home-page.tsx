'use client';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { siteConfig } from '@/siteConfig';

const serviceBlocks = [
  {
    title: 'Switchboards & Upgrades',
    copy: 'Safe, compliant upgrades done cleanly and properly.',
    image: '/images/switchboardafter.jpg'
  },
  {
    title: 'Fault Finding',
    copy: 'Fast diagnosis and fixes without the runaround.',
    image: '/images/switchboardbefore.jpg'
  },
  {
    title: 'Residential Electrical',
    copy: 'Lighting, power, fans and cabling for Perth homes.',
    image: '/images/lightinstall.jpg'
  }
];

const featuredReviews = siteConfig.reviews.slice(0, 4);
const workImages = [
  '/images/switchboardfinished.jpg',
  '/images/switchboardfinished.jpg',
  '/images/outdoorkitchenandspa.jpg',
  '/images/switchboardafter.jpg',
  '/images/lightinstall.jpg'
];

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative z-10 bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-yellow-300/20 bg-black/85 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <span className="font-display text-3xl tracking-wide">SM Electrical WA</span>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="tel:0427771905" className="font-semibold text-yellow-300">0427 771 905</a>
          </div>
        </nav>
        {open && (
          <div className="space-y-3 border-t border-yellow-300/20 px-4 py-4 md:hidden">
            <a className="block" href="#services">Services</a>
            <a className="block" href="#reviews">Reviews</a>
            <a className="block text-yellow-300" href="tel:0427771905">0427 771 905</a>
          </div>
        )}
      </header>

      <section className="relative min-h-[84vh] md:min-h-[88vh]">
        <Image src="/images/switchboardafter.jpg" alt="Electrical work in Perth" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/75" />
        <div className="relative mx-auto flex min-h-[84vh] md:min-h-[88vh] w-full max-w-6xl items-center px-4 py-14 md:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-300">Perth Residential Electrician</p>
            <h1 className="font-display text-5xl leading-[0.95] text-yellow-300 md:text-8xl">Perth Electrician That Actually Shows Up.</h1>
            <p className="mt-5 max-w-xl text-lg font-semibold text-zinc-200">No chasing. No runaround. Just clean, reliable electrical work done right.</p>
            <div className="mt-7 flex flex-wrap gap-3 pb-14 md:pb-0">
              <a href="tel:0427771905" className="rounded-full bg-yellow-300 px-7 py-3 text-base font-bold text-black">Call Sam Now</a>
              <a href="#quote" className="rounded-full border border-yellow-300/70 px-7 py-3 text-base font-semibold text-yellow-200">Get a Free Quote</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-wrap gap-x-8 gap-y-3 px-4 py-6 text-sm font-semibold uppercase tracking-wide text-zinc-100 md:py-7">
        {['Perth Local', 'Fully Licensed', 'Shows Up On Time', 'Clean, Tidy Work'].map((item) => (
          <p key={item}>✔ {item}</p>
        ))}
      </section>

      <section className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:gap-12 md:py-16">
        <Image src="/images/switchboardfinished.jpg" alt="Sam on site" width={760} height={520} sizes="(max-width: 768px) 100vw, 45vw" className="h-auto w-full rounded-sm object-cover" />
        <div>
          <h2 className="font-display text-5xl">Meet Sam</h2>
          <p className="mt-4 max-w-lg text-xl font-medium text-zinc-200">Straightforward electrical work across Perth. No upsells, no mucking around — just reliable service and clean installs.</p>
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-6xl px-4 py-14 md:py-16">
        <h2 className="font-display text-5xl">What Sam Does</h2>
        <p className="mt-2 text-zinc-300">Fast, reliable electrical work across Perth — no delays.</p>
        <div className="mt-8 space-y-6">
          {serviceBlocks.map((service) => (
            <article key={service.title} className="relative overflow-hidden">
              <Image src={service.image} alt={service.title} width={1400} height={500} sizes="100vw" className="h-56 w-full object-cover md:h-72" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/30" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-display text-4xl text-white">{service.title}</h3>
                <p className="text-zinc-100">{service.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto w-full max-w-5xl px-4 py-14 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yellow-300">★★★★★ Google Reviews</p>
        <h2 className="mt-2 font-display text-5xl">What Perth Clients Say</h2>
        <div className="mt-10 space-y-10 md:space-y-12">
          {featuredReviews.map(([name, review]) => {
            const [first, ...rest] = review.split('. ');
            return (
              <blockquote key={name} className="border-l-2 border-yellow-300 pl-5">
                <p className="mb-2 text-2xl text-yellow-300">★★★★★</p>
                <p className="text-lg leading-relaxed text-zinc-100"><strong>{first}{rest.length ? '. ' : ''}</strong>{rest.join('. ')}</p>
                <p className="mt-3 font-bold">— {name}</p>
              </blockquote>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 md:py-16">
        <h2 className="font-display text-5xl">Recent Work</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {workImages.map((img) => (
            <div key={img} className="aspect-[4/3] overflow-hidden">
              <Image src={img} alt="Recent electrical work" width={900} height={700} sizes="(max-width: 768px) 100vw, 33vw" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section id="quote" className="bg-yellow-300 py-14 text-black md:py-16">
        <div className="mx-auto w-full max-w-4xl px-4">
          <h2 className="font-display text-5xl">Need an Electrician? Get It Sorted Today.</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:0427771905" className="rounded-full bg-black px-6 py-3 text-base font-bold text-yellow-300">Call Now</a>
            <a href="#quote-form" className="rounded-full border border-black px-6 py-3 text-base font-semibold">Request Quote</a>
          </div>
          <p className="mt-3 text-sm font-semibold">Usually responds within 1–2 hours</p>
          <form id="quote-form" action="/api/quote" method="post" className="mt-8 space-y-3">
            <input name="name" required placeholder="Name" className="w-full rounded-none border border-black/25 bg-white px-4 py-3" />
            <input name="phone" required placeholder="Phone" className="w-full rounded-none border border-black/25 bg-white px-4 py-3" />
            <textarea name="message" required placeholder="Message" className="min-h-32 w-full rounded-none border border-black/25 bg-white px-4 py-3" />
            <button className="w-full rounded-none bg-black py-3 text-lg font-bold text-yellow-300">Get a Free Quote</button>
          </form>
        </div>
      </section>

      <a href="tel:0427771905" className="fixed bottom-3 left-4 right-4 z-50 rounded-full bg-yellow-300 px-6 py-4 text-center text-base font-bold text-black shadow-xl md:hidden">
        Call Now
      </a>

      <footer className="border-t border-yellow-300/20 py-10 text-center text-zinc-300">
        <p className="font-display text-3xl text-white">SM Electrical WA</p>
        <p className="mt-2">Quality work. No robots.</p>
        <p className="mt-2"><a href="tel:0427771905" className="text-yellow-300">{siteConfig.phone}</a> · {siteConfig.email} · Perth WA</p>
      </footer>
    </main>
  );
}
