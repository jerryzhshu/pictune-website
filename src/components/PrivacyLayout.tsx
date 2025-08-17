interface PrivacyLayoutProps {
  children: React.ReactNode;
}

export default function PrivacyLayout({ children }: PrivacyLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--layer-secondary)] transition-colors duration-300 flex justify-center" style={{ padding: '20px' }}>
      <div className="w-full max-w-[750px] p-5" style={{ maxWidth: '750px' }}>
        {children}
      </div>
    </div>
  );
}
