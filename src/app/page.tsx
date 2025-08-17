import Link from 'next/link';
import { getAvailableApps } from '@/lib/markdown';

export default async function Home() {
  const availableApps = getAvailableApps();
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[var(--background-primary)] transition-colors duration-300 p-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-[var(--label-primary)] transition-colors duration-300">
          Hello, JerryCode!
        </h1>
        
        <p className="text-lg text-[var(--label-secondary)] transition-colors duration-300">
          这是次要标签文字
        </p>
        
        <p className="text-base text-[var(--label-tertiary)] transition-colors duration-300">
          这是第三级标签文字
        </p>
        
        <p className="text-sm text-[var(--label-quaternary)] transition-colors duration-300">
          这是第四级标签文字
        </p>

        {/* 应用文档导航 */}
        <div className="mt-12 pt-8 border-t border-[var(--label-quaternary)]">
          <p className="text-sm text-[var(--label-tertiary)] transition-colors duration-300 mb-4">
            应用文档
          </p>
          <div className="space-y-4">
            {availableApps.map(app => (
              <div key={app} className="flex flex-col sm:flex-row gap-2 justify-center">
                <Link 
                  href={`/docs/${app}/privacy`}
                  className="inline-flex items-center px-4 py-2 bg-[var(--background-secondary)] text-[var(--label-primary)] rounded-lg hover:bg-[var(--background-tertiary)] transition-colors duration-300"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {app.charAt(0).toUpperCase() + app.slice(1)} 隐私政策
                </Link>
                <Link 
                  href={`/docs/${app}/terms`}
                  className="inline-flex items-center px-4 py-2 bg-[var(--background-secondary)] text-[var(--label-primary)] rounded-lg hover:bg-[var(--background-tertiary)] transition-colors duration-300"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {app.charAt(0).toUpperCase() + app.slice(1)} 用户条款
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
