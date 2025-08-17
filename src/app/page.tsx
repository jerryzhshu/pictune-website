import Link from 'next/link';
import Image from 'next/image';
import { getAvailableApps } from '@/lib/markdown';

export default async function Home() {
  const availableApps = getAvailableApps();
  
  return (
    <div className="min-h-screen w-full bg-[var(--background-primary)]">
      {/* 主要内容容器 */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* 个人头像和介绍区域 */}
        <section className="text-center mb-16">
          {/* 头像 */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              J
            </div>
          </div>
          
          {/* 个人介绍 */}
          <h1 className="text-3xl font-bold text-[var(--label-primary)] mb-4">
            JerryCode
          </h1>
          <p className="text-lg text-[var(--label-secondary)] max-w-2xl mx-auto leading-relaxed">
            热爱编程的开发者，专注于创造简洁实用的应用。致力于为用户提供优雅的解决方案。
          </p>
        </section>

        {/* 应用展示区域 */}
        <section className="space-y-12">
          <h2 className="text-2xl font-semibold text-[var(--label-primary)] text-center mb-8">
            我的应用
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pictune 应用卡片 */}
            <div className="bg-[var(--background-secondary)] rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4">
                  <Image src="/pictune-icon.svg" alt="Pictune" width={64} height={64} className="w-full h-full" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--label-primary)]">
                    Pictune
                  </h3>
                  <p className="text-sm text-[var(--label-tertiary)]">
                    图片处理工具
                  </p>
                </div>
              </div>
              
              <p className="text-[var(--label-secondary)] mb-6 leading-relaxed">
                专业的图片编辑和处理应用，提供丰富的滤镜效果和编辑工具，让您的照片更加精彩。
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Link 
                  href="/docs/pictune/privacy"
                  className="inline-flex items-center px-4 py-2 bg-[var(--background-tertiary)] text-[var(--label-primary)] rounded-lg text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  隐私政策
                </Link>
                <Link 
                  href="/docs/pictune/terms"
                  className="inline-flex items-center px-4 py-2 bg-[var(--background-tertiary)] text-[var(--label-primary)] rounded-lg text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  用户条款
                </Link>
              </div>
            </div>

            {/* toHDR 应用卡片 */}
            <div className="bg-[var(--background-secondary)] rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4">
                  <Image src="/tohdr-icon.svg" alt="toHDR" width={64} height={64} className="w-full h-full" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--label-primary)]">
                    toHDR
                  </h3>
                  <p className="text-sm text-[var(--label-tertiary)]">
                    HDR 转换工具
                  </p>
                </div>
              </div>
              
              <p className="text-[var(--label-secondary)] mb-6 leading-relaxed">
                将普通照片转换为高动态范围（HDR）图像，增强色彩饱和度和细节表现，让照片更加生动。
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Link 
                  href="/docs/tohdr/privacy"
                  className="inline-flex items-center px-4 py-2 bg-[var(--background-tertiary)] text-[var(--label-primary)] rounded-lg text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  隐私政策
                </Link>
                <Link 
                  href="/docs/tohdr/terms"
                  className="inline-flex items-center px-4 py-2 bg-[var(--background-tertiary)] text-[var(--label-primary)] rounded-lg text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  用户条款
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="mt-16 pt-8 border-t border-[var(--divider-color)] text-center">
          <p className="text-sm text-[var(--label-tertiary)]">
            © 2024 JerryCode. 用 ❤️ 制作
          </p>
        </footer>
      </div>
    </div>
  );
}
