import { ReactNode } from 'react';

export default function BrowserMockup({
  url,
  children,
  bodyStyle,
  bodyClassName,
}: {
  url: string;
  children: ReactNode;
  bodyStyle?: React.CSSProperties;
  bodyClassName?: string;
}) {
  return (
    <div className="browser">
      <div className="browser-bar">
        <span className="browser-dot r" />
        <span className="browser-dot y" />
        <span className="browser-dot g" />
        <span className="browser-url">{url}</span>
      </div>
      <div className={`browser-body ${bodyClassName || ''}`} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
}
