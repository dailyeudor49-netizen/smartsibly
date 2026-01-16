'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import {
  Star, CheckCircle, Shield, Zap, ChevronDown, ChevronLeft, ChevronRight,
  Timer, Truck, X, Wind, Battery, Navigation, Smartphone, Trash2, Droplets,
  Gauge, Volume2, Cpu, Wifi, Layers, Maximize, ShieldCheck, RefreshCw, ThumbsUp,
  Dog, Home, Clock, Sparkles
} from 'lucide-react';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function RobotAspirapolvereProLanding() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [orderData, setOrderData] = useState({ name: '', phone: '', address: '' });
  const [submitError, setSubmitError] = useState('');
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);
  const [stockLeft] = useState(4);
  const [openFeature, setOpenFeature] = useState<number | null>(null);

  const slides = [
    '/images/robot-asp/1.png',
    '/images/robot-asp/2.png',
    '/images/robot-asp/3.png',
    '/images/robot-asp/4.png',
    '/images/robot-asp/5.png',
    '/images/robot-asp/6.png',
  ];

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Auto-slide
  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length, autoSlide]);

  const stopAutoSlide = () => setAutoSlide(false);

  const openOrderPopup = () => {
    document.getElementById('order-form-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!orderData.name.trim() || !orderData.phone.trim() || !orderData.address.trim()) {
      setSubmitError('Vyplňte prosím všechna pole!');
      return;
    }
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const tmfpInput = e.currentTarget.querySelector('input[name="tmfp"]') as HTMLInputElement;
      const tmfp = tmfpInput?.value || '';

      const params = new URLSearchParams({
        uid: '019a913c-483e-7c52-ba2a-c2435daa4254',
        key: 'df01e23521627b9519a81f',
        offer: '597',
        lp: '597',
        name: orderData.name,
        tel: orderData.phone,
        'street-address': orderData.address,
        ua: navigator.userAgent,
        tmfp: tmfp,
      });

      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');
      const utmMedium = urlParams.get('utm_medium');
      const utmCampaign = urlParams.get('utm_campaign');
      const utmContent = urlParams.get('utm_content');
      const utmTerm = urlParams.get('utm_term');

      if (utmSource) params.append('utm_source', utmSource);
      if (utmMedium) params.append('utm_medium', utmMedium);
      if (utmCampaign) params.append('utm_campaign', utmCampaign);
      if (utmContent) params.append('utm_content', utmContent);
      if (utmTerm) params.append('utm_term', utmTerm);

      await fetch('https://offers.supertrendaffiliateprogram.com/forms/api/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      router.push('/ty/ty-rc-robot-cs');
    } catch (error) {
      console.error(error);
      router.push('/ty/ty-rc-robot-cs');
    } finally {
      setIsSubmitting(false);
    }
  };

  const comparisonData = [
    { feature: "Vysávání + Mopování", robot: "OBĚ FUNKCE", without: "Pouze vysávání" },
    { feature: "Vyprazdňování", robot: "AUTOMATICKY 60 DNÍ", without: "Ruční každý den" },
    { feature: "Chlupy a vlasy", robot: "KARTÁČ PROTI ZAMOTÁNÍ", without: "Zamotávají se a zasekávají" },
    { feature: "Navigace", robot: "LIDAR LASER 360°", without: "Náhodná, naráží do všeho" },
    { feature: "Filtr na alergie", robot: "HEPA H13 CERTIFIKOVANÝ", without: "Základní filtr" },
    { feature: "Celková cena", robot: "1 999 Kč SE STANICÍ", without: "12 000+ Kč za stejné funkce" },
  ];

  const faqs = [
    {
      question: "Jak funguje platba?",
      answer: "Platíte při doručení, hotově kurýrovi. Nemusíte nic platit online. Vyplníte formulář, zavoláme vám pro potvrzení a balík obdržíte za 24-48 hodin. Žádné riziko."
    },
    {
      question: "Musím ho vyprazdňovat každý den?",
      answer: "Ne, stanice ho automaticky vyprázdní do 3litrového sáčku. Sáček měníte každé 2 měsíce. Nikdy se nedotknete prachu."
    },
    {
      question: "Funguje na zvířecí chlupy?",
      answer: "Ano, kartáč proti zamotání je navržen pro chlupy a dlouhé vlasy. Nikdy se nezasekne. Potvrzuje to přes 800 zákazníků se zvířaty."
    },
    {
      question: "Co když se mi nebude líbit?",
      answer: "Máte 30 dní na vrácení. Plná náhrada, vrácení zdarma, žádné otázky. Ale 96 % zákazníků si ho nechává."
    }
  ];

  const reviews = [
    { nome: 'Tomáš K.', paese: 'Česká republika', flag: '🇨🇿', testo: 'Tři velcí psi. Vysával jsem KAŽDÝ DEN. S tímto robotem vysávám jednou za TÝDEN jen rohy. 90 % práce dělá on. Nejlepší nákup za posledních 5 let.', stelle: 5, data: 'před 5 dny', risposta: 'Tomáši, děkujeme! Majitelé zvířat jsou naši nejspokojenější zákazníci.' },
    { nome: 'Petra N.', paese: 'Česká republika', flag: '🇨🇿', testo: 'Manžel byl skeptický. "Za tuhle cenu to bude hračka". Po 2 týdnech se mi omluvil. Čistí LÉPE než náš starý Roomba za 15 000 Kč. Stanice, která sama vyprazdňuje, je geniální.', stelle: 5, data: 'před týdnem' },
    { nome: 'Martin S.', paese: 'Česká republika', flag: '🇨🇿', testo: 'Byt 85m² na dvou patrech. Nosím ho nahoru a dolů a všechno udělá sám. Nekonečná baterie, nikdy jsem ho nemusel přerušit uprostřed. Tichý, pouštím ho když pracuji z domu.', stelle: 5, data: 'před 3 dny', risposta: 'Martine, přesně! Baterie 5200mAh vydrží až 6 hodin!' },
    { nome: 'Hana L.', paese: 'Česká republika', flag: '🇨🇿', testo: 'Je mi 68 let a mám problémy se zády. Nemůžu už vysávat. Tento robot mi změnil život. Naprogramuji ho a on udělá všechno. Konečně si můžu užívat čistý byt bez bolesti.', stelle: 5, data: 'před 4 dny' },
    { nome: 'Jakub V.', paese: 'Česká republika', flag: '🇨🇿', testo: 'Alergik na roztoče celý život. Od té doby, co používám tohoto robota s HEPA filtrem, vstávám bez ucpaného nosu. Rozdíl je OBROVSKÝ. Měl jsem ho koupit už dávno.', stelle: 5, data: 'před 2 týdny', risposta: 'Jakube, HEPA H13 filtr opravdu dělá rozdíl pro alergiky!' },
    { nome: 'Lenka W.', paese: 'Česká republika', flag: '🇨🇿', testo: 'Porovnala jsem ho s Roborockem za 22 000 Kč od švagra. STEJNÉ FUNKCE. On tomu nevěřil. Ukázala jsem mu stanici, která vyprazdňuje a myje. Teď chce taky jeden.', stelle: 5, data: 'před týdnem' },
    { nome: 'Eva M.', paese: 'Česká republika', flag: '🇨🇿', testo: 'Dům se 3 kočkami. Chlupy byly noční můra. Teď robot projede 2x denně a dům je vždy perfektní. Návštěvy nevěří, že mám 3 kočky. NEJLEPŠÍ DÁREK, co jsem si kdy dala.', stelle: 5, data: 'před 6 dny' },
    { nome: 'Ondřej H.', paese: 'Česká republika', flag: '🇨🇿', testo: 'Dlouhá zima, dům stále zavřený. Prach se hromadil rychle. Teď robot čistí každý den, když jsem v práci. Vracím se domů a dýchám čistý vzduch. Stojí za každou korunu.', stelle: 5, data: 'před 10 dny', risposta: 'Ondřeji, přesně! Perfektní pro dlouhé zimy.' },
    { nome: 'Markéta T.', paese: 'Česká republika', flag: '🇨🇿', testo: 'Dlouhé vlasy všude, to byla moje noční můra. Tento robot je VŠECHNY vysaje, aniž by se zasekl. Kartáč se nikdy nezablokuje. Zkoušela jsem 3 roboty předtím, konečně jeden, co funguje!', stelle: 5, data: 'před 8 dny' },
    { nome: 'David B.', paese: 'Česká republika', flag: '🇨🇿', testo: 'Používám ho 2 měsíce, každý den. Žádné problémy. Kvalita je stejná jako u robotů za 25 000 Kč. Ušetřil jsem spoustu peněz a mám stále čistý byt. Doporučuji všem.', stelle: 5, data: 'před 12 dny', risposta: 'Davide, děkujeme za důvěru! Kvalita mluví sama za sebe.' },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans leading-relaxed">
      {/* Fingerprint Script */}
      <Script
        src="https://offers.supertrendaffiliateprogram.com/forms/tmfp/"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {/* Click Pixel */}
      <img
        src="https://offers.supertrendaffiliateprogram.com/forms/api/ck/?o=597&uid=019a913c-483e-7c52-ba2a-c2435daa4254&lp=597"
        style={{ width: '1px', height: '1px', display: 'none' }}
        alt=""
      />

      {/* Fixed CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-blue-600 shadow-2xl">
        <div className="max-w-md mx-auto px-4 py-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-red-600 font-bold text-sm animate-pulse">Zbývá pouze {stockLeft}!</span>
            <span className="text-green-700 font-black text-xl">1 999 Kč</span>
          </div>
          <button
            onClick={openOrderPopup}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-black text-lg hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>OBJEDNAT — PLATBA PŘI DORUČENÍ</span>
          </button>
        </div>
      </div>

      {/* URGENCY HEADER BAR */}
      <div className="bg-red-600 text-white py-2 text-center font-bold text-sm px-4">
        <div className="flex items-center justify-center gap-2">
          <Timer className="w-4 h-4 animate-pulse" />
          <span>BLESKOVÁ NABÍDKA — Končí za: {formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* Hero Title Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 pt-6 pb-4 md:py-8 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-red-500 text-white text-sm md:text-base font-bold py-2 px-4 rounded-full inline-block mb-4 animate-pulse">
            TOTÁLNÍ VÝPRODEJ — POSLEDNÍCH {stockLeft} KUSŮ
          </div>
          <h1 className="text-2xl md:text-4xl font-black mb-4 leading-tight tracking-tight">
            VYSÁVÁ, MOPUJE A VYPRAZDŇUJE SE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">JEDNÍM TAHEM</span>
          </h1>
          <p className="text-lg md:text-xl mb-4 text-gray-300">
            Zahoďte mop, kbelík a smeták. <span className="font-bold text-white">On všechno udělá sám.</span>
          </p>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 inline-block">
            <span className="line-through text-gray-400 text-xl">2 500 Kč</span>
            <span className="text-4xl md:text-5xl font-black text-white ml-3">1 999 Kč</span>
            <span className="block text-green-400 font-bold mt-1">Automatická stanice ZDARMA (hodnota 14 990 Kč)</span>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <main className="max-w-6xl mx-auto px-4 pt-6 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative border-2 border-gray-200">
              <img
                src={slides[currentSlide]}
                alt="Profesionální robotický vysavač se stanicí"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-lg animate-bounce">
                STANICE ZDARMA!
              </div>
              <div className="absolute top-3 right-3 bg-red-600 text-white text-sm font-bold px-3 py-2 rounded-lg shadow-lg">
                -{Math.round((1 - 1999/2500) * 100)}%
              </div>
              <button
                onClick={() => { stopAutoSlide(); setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => { stopAutoSlide(); setCurrentSlide((prev) => (prev + 1) % slides.length); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-2 overflow-x-auto pb-2">
              {slides.map((slide, i) => (
                <button
                  key={i}
                  onClick={() => { stopAutoSlide(); setCurrentSlide(i); }}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 cursor-pointer flex-shrink-0 ${
                    i === currentSlide ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={slide} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Key Features Mobile */}
            <div className="bg-gray-50 rounded-xl p-5 text-left lg:hidden border border-gray-200">
              <h3 className="text-lg font-black text-gray-800 mb-3 text-center">Proč je jiný než ostatní:</h3>
              <ul className="space-y-3 text-gray-700 text-base">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-800">Vysává a mopuje zároveň</strong> — Jeden průjezd, perfektní podlahy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Trash2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-800">Robot se sám vyprazdňuje do základny</strong> — Sáček měníte každé 2 měsíce.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Dog className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-800">Konec chlupů a vlasů</strong> — Kartáč proti zamotání, nikdy se nezasekne.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-800">Čistý vzduch</strong> — HEPA filtr zachytí 99,97 % alergenů.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Navigation className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-800">Laserová navigace</strong> — Mapuje byt, nenaráží do nábytku.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:sticky lg:top-4 lg:self-start">
            {/* Price Box */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 mb-6 shadow-xl relative overflow-hidden">
              {/* Sconto Badge */}
              <div className="absolute -top-1 -right-1 bg-red-600 text-white text-base font-black w-20 h-20 rounded-bl-3xl shadow-lg flex items-center justify-center text-center leading-tight transform rotate-0">
                -21%
              </div>

              <h2 className="text-xl font-black text-gray-900 mb-1">
                NovaClean X1 PRO + Stanice OMNI
              </h2>
              <p className="text-sm text-gray-500 mb-2">Profesionální robotický vysavač a mop</p>

              <div
                className="flex items-center space-x-2 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm font-bold">4,9/5</span>
                <span className="text-gray-500 text-sm underline">(1 248 recenzí)</span>
              </div>

              {/* Price */}
              <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 line-through text-xl">2 500 Kč</span>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">UŠETŘÍTE 501 Kč</span>
                </div>
                <div className="text-center">
                  <span className="text-5xl font-black text-green-700">1 999 Kč</span>
                </div>
              </div>

              {/* Delivery & Payment */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Doručení:</span>
                  <span className="font-bold text-gray-900 ml-auto">24-48 hodin</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Platba:</span>
                  <span className="font-bold text-gray-900 ml-auto">Při doručení</span>
                </div>
              </div>

              <button
                onClick={openOrderPopup}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-4 px-6 rounded-xl font-black text-lg transition-all cursor-pointer shadow-lg transform hover:scale-[1.02]"
              >
                OBJEDNAT — PLATBA PŘI DORUČENÍ
              </button>

              {/* Urgency */}
              <div className="flex items-center justify-center gap-2 mt-3 text-red-600 font-bold">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span>Za tuto cenu zbývá pouze {stockLeft} kusů!</span>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs mt-4">
                <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                  <Shield className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <span className="text-gray-700 font-medium">Záruka 2 roky</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                  <RefreshCw className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <span className="text-gray-700 font-medium">Vrácení 30 dní</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                  <ThumbsUp className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <span className="text-gray-700 font-medium">Podpora 24/7</span>
                </div>
              </div>
            </div>

            {/* Key Features Desktop */}
            <div className="hidden lg:block bg-gray-50 rounded-xl p-5 text-left border border-gray-200">
              <h3 className="text-lg font-black text-gray-800 mb-3 text-center">Proč je jiný než ostatní:</h3>
              <ul className="space-y-3 text-gray-700 text-base">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-800">Vysává a mopuje zároveň</strong> — Jeden průjezd, perfektní podlahy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Trash2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-800">Robot se sám vyprazdňuje do základny</strong> — Sáček měníte každé 2 měsíce.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Dog className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-800">Konec chlupů a vlasů</strong> — Kartáč proti zamotání, nikdy se nezasekne.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-800">Čistý vzduch</strong> — HEPA filtr zachytí 99,97 % alergenů.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Navigation className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-gray-800">Laserová navigace</strong> — Mapuje byt, nenaráží do nábytku.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* PROBLEMA / AGITAZIONE */}
      <section className="py-10 md:py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-black text-center mb-8 text-gray-900 tracking-tight">
            Zapomeňte na uklízení.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-md text-center">
              <div className="text-3xl mb-2">🦴</div>
              <h4 className="font-black text-gray-900 mb-1">Konec bolesti zad</h4>
              <p className="text-gray-500 text-sm">Už se neohýbáte. On projede všude.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-md text-center">
              <div className="text-3xl mb-2">🧹</div>
              <h4 className="font-black text-gray-900 mb-1">Ruce stále čisté</h4>
              <p className="text-gray-500 text-sm">Robot se sám vyprazdňuje do základny. Nikdy se nedotknete prachu.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-md text-center">
              <div className="text-3xl mb-2">🐕</div>
              <h4 className="font-black text-gray-900 mb-1">Zvířecí chlupy? Pryč</h4>
              <p className="text-gray-500 text-sm">Kartáč proti zamotání. Nikdy se nezasekne.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-md text-center">
              <div className="text-3xl mb-2">💨</div>
              <h4 className="font-black text-gray-900 mb-1">Konečně čistý vzduch</h4>
              <p className="text-gray-500 text-sm">HEPA filtr. Zachytí 99,97 % alergenů.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 text-white text-center shadow-2xl">
            <p className="text-lg md:text-xl mb-4">
              <span className="text-blue-400 font-bold">1 847 objednávek</span> za posledních 24 hodin
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-blue-400">6000 Pa</div>
                <p className="text-xs text-gray-300">Silné sání</p>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-blue-400">6 hodin</div>
                <p className="text-xs text-gray-300">Nekonečná baterie</p>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-blue-400">2 měsíce</div>
                <p className="text-xs text-gray-300">Bez vyprazdňování</p>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-blue-400">4,9/5</div>
                <p className="text-xs text-gray-300">1 248 recenzí</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAZIONE FEATURE */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
              ZDARMA V CENĚ (HODNOTA 14 990 Kč)
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900">
              STANICE, KTERÁ <span className="text-blue-600">ODSTRANÍ VEŠKEROU PRÁCI</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Robot se vrátí na základnu, vyprázdní se, vypere mop, nabije se. Je to vaše nová osobní pomocnice.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-start">
            {/* Box 1 */}
            <div
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:border-blue-500 transition-all cursor-pointer group"
              onClick={(e) => { e.stopPropagation(); setOpenFeature(openFeature === 0 ? null : 0); }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img src="/images/robot-asp/svuota.png" alt="Automatické vyprazdňování" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                {/* Desktop overlay */}
                <div className={`hidden md:flex absolute inset-0 items-end transition-all duration-500 ${openFeature === 0 ? 'bg-black/85' : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'}`}>
                  <div className="p-4 text-white w-full">
                    <div className="flex items-center justify-between">
                      <p className="font-black text-xl leading-tight">ROBOT SE SÁM VYPRAZDŇUJE DO ZÁKLADNY</p>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFeature === 0 ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFeature === 0 ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm text-white/90 leading-relaxed">
                        Vrátí se na základnu a SÁM se vyprázdní do 3litrového sáčku. <strong>Sáček měníte každé 2 měsíce.</strong> Nikdy více ruce v prachu. Nikdy více kýchání.
                      </p>
                    </div>
                    <p className={`text-sm text-white/80 transition-all duration-300 ${openFeature === 0 ? 'opacity-0 h-0' : 'opacity-100 mt-1'}`}>Sáček měníte každé 2 měsíce</p>
                  </div>
                </div>
              </div>
              {/* Mobile text outside */}
              <div className="md:hidden p-3 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="flex items-center justify-between">
                  <p className="font-black text-sm text-white leading-tight">ROBOT SE SÁM VYPRAZDŇUJE DO ZÁKLADNY</p>
                  <ChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${openFeature === 0 ? 'rotate-180' : ''}`} />
                </div>
                <p className={`text-sm text-blue-100 transition-all duration-300 ${openFeature === 0 ? 'hidden' : 'mt-1'}`}>Sáček měníte každé 2 měsíce</p>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFeature === 0 ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Vrátí se na základnu a SÁM se vyprázdní do 3litrového sáčku. Sáček měníte každé 2 měsíce. Nikdy více ruce v prachu.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:border-blue-500 transition-all cursor-pointer group"
              onClick={(e) => { e.stopPropagation(); setOpenFeature(openFeature === 1 ? null : 1); }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img src="/images/robot-asp/mocio.png" alt="Automatické mytí mopu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                {/* Desktop overlay */}
                <div className={`hidden md:flex absolute inset-0 items-end transition-all duration-500 ${openFeature === 1 ? 'bg-black/85' : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'}`}>
                  <div className="p-4 text-white w-full">
                    <div className="flex items-center justify-between">
                      <p className="font-black text-xl leading-tight">MOP ROBOTA VŽDY ČISTÝ</p>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFeature === 1 ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFeature === 1 ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm text-white/90 leading-relaxed">
                        Po každém mopování <strong>stanice vypere mop</strong> čistou vodou. Vy se ničeho nedotknete. Podlahy vždy perfektní.
                      </p>
                    </div>
                    <p className={`text-sm text-white/80 transition-all duration-300 ${openFeature === 1 ? 'opacity-0 h-0' : 'opacity-100 mt-1'}`}>Stanice ho vypere za vás</p>
                  </div>
                </div>
              </div>
              {/* Mobile text outside */}
              <div className="md:hidden p-3 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="flex items-center justify-between">
                  <p className="font-black text-sm text-white leading-tight">MOP ROBOTA VŽDY ČISTÝ</p>
                  <ChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${openFeature === 1 ? 'rotate-180' : ''}`} />
                </div>
                <p className={`text-sm text-blue-100 transition-all duration-300 ${openFeature === 1 ? 'hidden' : 'mt-1'}`}>Stanice ho vypere za vás</p>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFeature === 1 ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Po každém mopování stanice vypere mop čistou vodou. Vy se ničeho nedotknete. Podlahy vždy perfektní.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:border-blue-500 transition-all cursor-pointer group"
              onClick={(e) => { e.stopPropagation(); setOpenFeature(openFeature === 2 ? null : 2); }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img src="/images/robot-asp/muffa.png" alt="Sušení horkým vzduchem" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                {/* Desktop overlay */}
                <div className={`hidden md:flex absolute inset-0 items-end transition-all duration-500 ${openFeature === 2 ? 'bg-black/85' : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'}`}>
                  <div className="p-4 text-white w-full">
                    <div className="flex items-center justify-between">
                      <p className="font-black text-xl leading-tight">KONEC ZÁPACHU A PLÍSNÍ</p>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFeature === 2 ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFeature === 2 ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm text-white/90 leading-relaxed">
                        Suší mop při <strong>45°C</strong> po každém mopování. Žádné bakterie, žádné nepříjemné pachy. <strong>SKUTEČNÁ hygiena.</strong>
                      </p>
                    </div>
                    <p className={`text-sm text-white/80 transition-all duration-300 ${openFeature === 2 ? 'opacity-0 h-0' : 'opacity-100 mt-1'}`}>Rychlé sušení při 45°C</p>
                  </div>
                </div>
              </div>
              {/* Mobile text outside */}
              <div className="md:hidden p-3 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="flex items-center justify-between">
                  <p className="font-black text-sm text-white leading-tight">KONEC ZÁPACHU A PLÍSNÍ</p>
                  <ChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${openFeature === 2 ? 'rotate-180' : ''}`} />
                </div>
                <p className={`text-sm text-blue-100 transition-all duration-300 ${openFeature === 2 ? 'hidden' : 'mt-1'}`}>Rychlé sušení při 45°C</p>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFeature === 2 ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Suší mop při 45°C po každém mopování. Žádné bakterie, žádné nepříjemné pachy. SKUTEČNÁ hygiena.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 4 - Navigace + Baterie */}
            <div
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:border-blue-500 transition-all cursor-pointer group"
              onClick={(e) => { e.stopPropagation(); setOpenFeature(openFeature === 3 ? null : 3); }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img src="/images/robot-asp/laser.png" alt="LiDAR navigace" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                {/* Desktop overlay */}
                <div className={`hidden md:flex absolute inset-0 items-end transition-all duration-500 ${openFeature === 3 ? 'bg-black/85' : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'}`}>
                  <div className="p-4 text-white w-full">
                    <div className="flex items-center justify-between">
                      <p className="font-black text-xl leading-tight">LASEROVÁ NAVIGACE</p>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFeature === 3 ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFeature === 3 ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm text-white/90 leading-relaxed">
                        Mapuje celý byt s milimetrovou přesností. <strong>Vyhýbá se překážkám</strong>, nenaráží do nábytku. Vybitá baterie? <strong>Nabije se a sám pokračuje.</strong>
                      </p>
                    </div>
                    <p className={`text-sm text-white/80 transition-all duration-300 ${openFeature === 3 ? 'opacity-0 h-0' : 'opacity-100 mt-1'}`}>Mapuje, vyhýbá se překážkám, nikdy se nezastaví</p>
                  </div>
                </div>
              </div>
              {/* Mobile text outside */}
              <div className="md:hidden p-3 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="flex items-center justify-between">
                  <p className="font-black text-sm text-white leading-tight">LASEROVÁ NAVIGACE</p>
                  <ChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${openFeature === 3 ? 'rotate-180' : ''}`} />
                </div>
                <p className={`text-sm text-blue-100 transition-all duration-300 ${openFeature === 3 ? 'hidden' : 'mt-1'}`}>Mapuje, vyhýbá se překážkám</p>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFeature === 3 ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Mapuje celý byt s milimetrovou přesností. Vyhýbá se překážkám, nenaráží do nábytku. Nabije se a sám pokračuje.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 5 - Chlupy a vlasy */}
            <div
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:border-blue-500 transition-all cursor-pointer group"
              onClick={(e) => { e.stopPropagation(); setOpenFeature(openFeature === 4 ? null : 4); }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img src="/images/robot-asp/6.png" alt="Chlupy a vlasy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                {/* Desktop overlay */}
                <div className={`hidden md:flex absolute inset-0 items-end transition-all duration-500 ${openFeature === 4 ? 'bg-black/85' : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'}`}>
                  <div className="p-4 text-white w-full">
                    <div className="flex items-center justify-between">
                      <p className="font-black text-xl leading-tight">KONEC CHLUPŮ A VLASŮ</p>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFeature === 4 ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFeature === 4 ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm text-white/90 leading-relaxed">
                        Kartáč proti zamotání navržený pro <strong>zvířecí chlupy, dlouhé vlasy a odolné nečistoty</strong>. Nikdy se nezasekne. Vysaje vše na první průjezd.
                      </p>
                    </div>
                    <p className={`text-sm text-white/80 transition-all duration-300 ${openFeature === 4 ? 'opacity-0 h-0' : 'opacity-100 mt-1'}`}>Kartáč proti zamotání, nikdy se nezasekne</p>
                  </div>
                </div>
              </div>
              {/* Mobile text outside */}
              <div className="md:hidden p-3 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="flex items-center justify-between">
                  <p className="font-black text-sm text-white leading-tight">KONEC CHLUPŮ A VLASŮ</p>
                  <ChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${openFeature === 4 ? 'rotate-180' : ''}`} />
                </div>
                <p className={`text-sm text-blue-100 transition-all duration-300 ${openFeature === 4 ? 'hidden' : 'mt-1'}`}>Kartáč proti zamotání</p>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFeature === 4 ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Kartáč proti zamotání pro zvířecí chlupy, dlouhé vlasy a odolné nečistoty. Nikdy se nezasekne. Vysaje vše na první průjezd.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 6 */}
            <div
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:border-blue-500 transition-all cursor-pointer group"
              onClick={(e) => { e.stopPropagation(); setOpenFeature(openFeature === 5 ? null : 5); }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img src="/images/robot-asp/divano.png" alt="Ovládání aplikací" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                {/* Desktop overlay */}
                <div className={`hidden md:flex absolute inset-0 items-end transition-all duration-500 ${openFeature === 5 ? 'bg-black/85' : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'}`}>
                  <div className="p-4 text-white w-full">
                    <div className="flex items-center justify-between">
                      <p className="font-black text-xl leading-tight">OVLÁDÁNÍ Z GAUČE</p>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFeature === 5 ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFeature === 5 ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm text-white/90 leading-relaxed">
                        Dálkový ovladač v balení. Aplikace pokud chcete. <strong>"Alexa, ukliď dům"</strong> a on vyrazí. Vy se ani nezvednete.
                      </p>
                    </div>
                    <p className={`text-sm text-white/80 transition-all duration-300 ${openFeature === 5 ? 'opacity-0 h-0' : 'opacity-100 mt-1'}`}>Aplikace, Alexa, dálkový ovladač</p>
                  </div>
                </div>
              </div>
              {/* Mobile text outside */}
              <div className="md:hidden p-3 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="flex items-center justify-between">
                  <p className="font-black text-sm text-white leading-tight">OVLÁDÁNÍ Z GAUČE</p>
                  <ChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${openFeature === 5 ? 'rotate-180' : ''}`} />
                </div>
                <p className={`text-sm text-blue-100 transition-all duration-300 ${openFeature === 5 ? 'hidden' : 'mt-1'}`}>Aplikace, Alexa, dálkový ovladač</p>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFeature === 5 ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Dálkový ovladač v balení. Aplikace pokud chcete. "Alexa, ukliď dům" a on vyrazí. Vy se ani nezvednete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIFICHE TECNICHE */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-2 text-gray-900">
            ČÍSLA, KTERÁ MLUVÍ JASNĚ
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Porovnejte ho s top modely: nemá konkurenci.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
              <Gauge className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-black text-gray-900">6000 Pa</div>
              <p className="text-sm text-gray-500">Sací výkon</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
              <Battery className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-black text-gray-900">5200 mAh</div>
              <p className="text-sm text-gray-500">Baterie (6 hodin)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
              <Cpu className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-black text-gray-900">LiDAR 4.0</div>
              <p className="text-sm text-gray-500">Laserová navigace</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
              <Volume2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-black text-gray-900">&lt;55 dB</div>
              <p className="text-sm text-gray-500">Super tichý</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
              <Wifi className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-black text-gray-900">WiFi 5GHz</div>
              <p className="text-sm text-gray-500">Aplikace + Alexa/Google</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
              <Layers className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-black text-gray-900">3L stanice</div>
              <p className="text-sm text-gray-500">Sáček vydrží 2 měsíce</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
              <Maximize className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-black text-gray-900">20 mm</div>
              <p className="text-sm text-gray-500">Překonává překážky</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
              <ShieldCheck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-black text-gray-900">HEPA H13</div>
              <p className="text-sm text-gray-500">99,97 % alergenů</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-2 text-gray-900">
            NOVACLEAN X1 vs KONKURENCE
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Stejné funkce, o 10 000 Kč méně. Počítejte sami.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg text-xs md:text-base">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-2 md:px-4 py-2 md:py-3 text-left">Vlastnost</th>
                  <th className="px-2 md:px-4 py-2 md:py-3 text-center bg-green-600">NovaClean X1</th>
                  <th className="px-2 md:px-4 py-2 md:py-3 text-center">Jiné roboty</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-2 md:px-4 py-2 md:py-3 font-bold text-gray-900">{row.feature}</td>
                    <td className="px-2 md:px-4 py-2 md:py-3 text-center font-bold text-green-700 bg-green-50">{row.robot}</td>
                    <td className="px-2 md:px-4 py-2 md:py-3 text-center text-gray-500">{row.without}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* URGENCY STRIP */}
      <section className="bg-red-600 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white text-xl font-black mb-3">
            Totální výprodej — Zbývá pouze {stockLeft} kusů
          </p>
          <p className="text-white/80 mb-4">Až se vyprodají, cena se vrátí na 2 500 Kč. Stanice zdarma pouze pro tyto poslední kusy.</p>
          <button
            onClick={openOrderPopup}
            className="bg-white text-red-600 hover:bg-gray-100 py-4 px-10 rounded-xl font-black text-xl transition-all cursor-pointer shadow-lg"
          >
            OBJEDNAT — 1 999 Kč
          </button>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews-section" className="py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-2">
            1 248 SPOKOJENÝCH ZÁKAZNÍKŮ
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
            <span className="text-white font-bold">4,9/5</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((review, i) => (
              <div key={i} className={`bg-white rounded-xl p-5 shadow ${i >= visibleReviews ? 'hidden md:block' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold text-lg">
                    {review.nome[0]}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{review.nome}</p>
                    <p className="text-sm text-gray-500">{review.flag} {review.paese}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(review.stelle)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">{review.data}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{review.testo}</p>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded font-medium">Ověřený nákup</span>
                {review.risposta && (
                  <div className="mt-3 bg-gray-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
                    <p className="text-xs font-bold text-gray-600 mb-1">Odpověď prodejce:</p>
                    <p className="text-gray-600 text-sm">{review.risposta}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {visibleReviews < reviews.length && (
            <div className="text-center mt-6 md:hidden">
              <button
                onClick={() => setVisibleReviews(prev => Math.min(prev + 4, reviews.length))}
                className="bg-white text-gray-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all cursor-pointer"
              >
                Zobrazit další recenze
              </button>
            </div>
          )}
        </div>
      </section>

      {/* GARANZIA */}
      <section className="py-12 bg-green-50 border-y border-green-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-white border-4 border-green-500 rounded-full flex flex-col items-center justify-center shadow-xl">
                <span className="text-green-600 font-black text-4xl">30</span>
                <span className="text-gray-900 font-bold text-xs uppercase">Dní</span>
                <span className="text-green-600 font-bold text-sm">Záruka</span>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                NELÍBÍ SE VÁM? VRÁTÍME VÁM VŠE. TEČKA.
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                Máte 30 dní na vyzkoušení. Pokud nebudete NADŠENI — z jakéhokoli důvodu — zavoláte nám, pošleme kurýra, aby ho vyzvedl, a vrátíme vám každou korunu. <strong>Vrácení ZDARMA. Žádné otázky. Žádné riziko pro vás.</strong> Ale 96 % si ho nechává.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="bg-white px-4 py-2 rounded-lg border border-green-200 font-bold text-gray-800 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-500" /> Žádné riziko
                </span>
                <span className="bg-white px-4 py-2 rounded-lg border border-green-200 font-bold text-gray-800 text-sm flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-green-500" /> Vrácení zdarma
                </span>
                <span className="bg-white px-4 py-2 rounded-lg border border-green-200 font-bold text-gray-800 text-sm flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-green-500" /> Záruka 2 roky
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 text-center">
            JAK OBJEDNAT (3 JEDNODUCHÉ KROKY)
          </h2>
          <div className="flex flex-row items-start justify-center gap-2 md:gap-8">
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-2 shadow-lg">1</div>
              <p className="text-gray-700 text-sm font-medium">Vyplňte formulář s vašimi údaji</p>
            </div>
            <div className="text-gray-300 text-2xl mt-4">→</div>
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-2 shadow-lg">2</div>
              <p className="text-gray-700 text-sm font-medium">Zavoláme vám pro potvrzení</p>
            </div>
            <div className="text-gray-300 text-2xl mt-4">→</div>
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold mb-2 shadow-lg">3</div>
              <p className="text-gray-700 text-sm font-medium">Doručení za 24-48h a platíte KURÝROVI!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order-form-section" className="bg-gray-900 py-12 pb-8">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-red-600 text-white font-bold text-center py-2 rounded-full mb-4 animate-pulse">
            Za tuto cenu zbývá pouze {stockLeft} kusů
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2 text-center">
            Objednejte nyní
          </h2>
          <p className="text-gray-400 mb-6 text-center">
            Vyplňte formulář. Platíte pouze při doručení.
          </p>

          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            {/* Product Summary */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-black text-gray-900">NovaClean X1 PRO</span>
                  <p className="text-sm text-gray-600">+ Stanice OMNI + Příslušenství</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">STANICE ZDARMA</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">DOPRAVA ZDARMA</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 line-through text-sm block">2 500 Kč</span>
                  <span className="text-3xl font-black text-green-700">1 999 Kč</span>
                </div>
              </div>
            </div>

            {/* Timer */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-5 text-center">
              <div className="flex items-center justify-center gap-2 text-red-700 font-bold">
                <Timer className="w-5 h-5" />
                <span>Nabídka končí za: {formatTime(timeLeft)}</span>
              </div>
            </div>

            {submitError && (
              <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
                <p className="text-red-700 text-sm text-center">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <input type="hidden" name="tmfp" />

              <div className="space-y-4 mb-5">
                <div>
                  <label className="block text-gray-800 font-bold mb-2">Jméno a příjmení *</label>
                  <input
                    type="text"
                    name="name"
                    value={orderData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-lg"
                    placeholder="Jan Novák"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-bold mb-2">Telefon (pro kurýra) *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={orderData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-lg"
                    placeholder="+420 123 456 789"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-bold mb-2">Kompletní adresa *</label>
                  <input
                    type="text"
                    name="address"
                    value={orderData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-lg"
                    placeholder="Hlavní 10, 110 00 Praha"
                    disabled={isSubmitting}
                    required
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="border-2 border-green-500 bg-green-50 rounded-xl p-4 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-4 border-green-500 bg-white"></div>
                  <span className="font-bold text-gray-800">Platba při doručení</span>
                </div>
                <span className="text-2xl">💶</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-4 rounded-xl font-black text-xl transition duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white cursor-pointer shadow-lg transform hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? 'ODESÍLÁNÍ...' : 'OBJEDNAT — PLATBA PŘI DORUČENÍ'}
                {!isSubmitting && <Truck className="w-6 h-6" />}
              </button>

              <p className="text-center text-gray-400 text-xs mt-4">
                Vaše údaje jsou chráněny a šifrovány SSL. Používáme je POUZE pro doručení.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-10 pb-32">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-gray-900">
            ČASTÉ DOTAZY
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
