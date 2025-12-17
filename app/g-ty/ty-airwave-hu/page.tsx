'use client';

import React from 'react';
import { CheckCircle2, Package, Truck, Phone } from 'lucide-react';

// Landing configuration
const PRODUCT_NAME = 'AirWave Pro';
const PRICE = 12990;
const CURRENCY = 'HUF';

export default function ThankYouAirwaveHU() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        {/* Success Card */}
        <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-3xl p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-white mb-2">Köszönjük a rendelését!</h1>
          <p className="text-zinc-400 mb-8">A megrendelését sikeresen rögzítettük.</p>

          {/* Order Summary */}
          <div className="bg-zinc-900/50 rounded-2xl p-6 mb-8 border border-zinc-700">
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-400">Termék</span>
              <span className="text-white font-bold">{PRODUCT_NAME}</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-zinc-700">
              <span className="text-zinc-400">Összeg</span>
              <span className="text-2xl font-bold text-orange-500">
                {PRICE.toLocaleString()} {CURRENCY}
              </span>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-4 p-4 bg-zinc-900/30 rounded-xl border border-zinc-800">
              <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center shrink-0">
                <Package className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold text-white">Megrendelés visszaigazolva</h3>
                <p className="text-sm text-zinc-400">Nyomon követési információkat e-mailben küldünk.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-zinc-900/30 rounded-xl border border-zinc-800">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold text-white">Kiszállítás 24-48 órán belül</h3>
                <p className="text-sm text-zinc-400">Utánvéttel fizet a futárnak.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-zinc-900/30 rounded-xl border border-zinc-800">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold text-white">Telefonos megerősítés</h3>
                <p className="text-sm text-zinc-400">Munkatársunk hamarosan felhívja a szállítás egyeztetéséhez.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-zinc-500 text-sm mt-6">
          Kérdés esetén írjon: support@smartsibly.com
        </p>
      </div>
    </div>
  );
}
