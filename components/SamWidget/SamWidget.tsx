'use client';

import Script from 'next/script';

export default function SamWidget() {
  return (
    <Script
      src="https://api.trysam.co/widget/embed.js"
      data-tenant="trysam"
      strategy="lazyOnload"
    />
  );
}
