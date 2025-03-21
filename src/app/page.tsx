'use client';

import React from 'react';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Concept from '@/components/Concept/Concept';
import Accommodation from '@/components/Accommodation/Accommodation';
import AdditionalServices from '@/components/AdditionalServices/AdditionalServices';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <main className="text-[14px] sm:text-base overflow-x-hidden">
      <Header />
      <Hero />
      <Concept />
      <Accommodation />
      <AdditionalServices />
      <Contact />
    </main>
  );
} 