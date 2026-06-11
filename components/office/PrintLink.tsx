'use client';

import type { ReactNode } from 'react';

/** A ballpoint-blue text button that opens the browser's print dialog.
 *  Used on /security so IT folks can file the memo on actual paper. */
export default function PrintLink({
  children = 'Print this memo',
  className = '',
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`pen-link ${className}`.trim()}
      onClick={() => window.print()}
    >
      {children}
    </button>
  );
}
