'use client';

import Script from 'next/script';

export default function SamWidget() {
  return (
    <Script
      src="https://widget.trysam.co/chat.js"
      data-tenant="trysam"
      strategy="lazyOnload"
    />
  );
}
