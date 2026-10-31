/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Calendar } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  onOpenBooking
}) => {
  return (
    <aside 
      aria-label="Quick appointment and phone actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/96 backdrop-blur-md border-t border-[#E2E8F0] px-4 py-2.5 sm:hidden shadow-clinical-float"
    >
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* High-contrast secondary action: Call Direct */}
        <a
          href="tel:8004122273"
          className="h-12 px-3.5 rounded border-[1.5px] border-[#0D2137] text-[#0D2137] bg-white text-xs font-semibold flex items-center justify-center gap-1.5 shrink-0 active:bg-slate-100 transition-colors"
          title="Direct Clinical Helpline"
        >
          <Phone className="w-4 h-4 text-[#0284C7]" />
          <span>Call Direct</span>
        </a>

        {/* Dominant full-width terracotta CTA: Book Appointment */}
        <button
          onClick={onOpenBooking}
          className="flex-1 h-12 px-4 rounded bg-[#E05A2B] hover:bg-[#C84B1F] active:translate-y-0.5 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Direct Consultation</span>
        </button>
      </div>
    </aside>
  );
};
