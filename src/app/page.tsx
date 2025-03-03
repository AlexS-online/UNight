'use client';

import React from 'react';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Concept from '@/components/Concept/Concept';
import About from '@/components/About/About';
import Partners from '@/components/Partners/Partners';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Concept />
      <About />
      <Partners />
      <Contact />
    </main>
  );
} 