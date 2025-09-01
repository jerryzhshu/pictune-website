import AppCard from '@/components/AppCard';
import ExternalLinkIcon from '@/components/ExternalLinkIcon';

// 图片资源常量
const imgPortrait = "/homeimage/portrait.png";

// 根据主题选择图片的函数
const getThemedImage = (baseName: string) => {
  return {
    light: `/homeimage/${baseName}-light.png`,
    dark: `/homeimage/${baseName}-dark.png`
  };
};

// 应用图片资源
const picTuneImages = {
  icon: getThemedImage('pictune-icon'),
  app: getThemedImage('pictune-app')
};

const toHDRImages = {
  icon: getThemedImage('tohdr-icon'),
  app: getThemedImage('tohdr-app')
};

// App Store 链接
const picTuneAppStoreUrl = "https://apps.apple.com/cn/app/pictune-%E9%9F%B3%E4%B9%90%E5%AE%9E%E5%86%B5%E7%85%A7%E7%89%87/id6744852198?itscg=30200&itsct=apps_box_badge&mttnsubad=6744852198";
const toHDRAppStoreUrl = "https://apps.apple.com/cn/app/tohdr/id6746218392?itscg=30200&itsct=apps_box_badge&mttnsubad=6746218392";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full" style={{ backgroundColor: 'var(--background-primary)' }}>
      <div className="flex flex-col gap-16 md:gap-[100px] items-center md:items-start justify-start max-w-[1000px] w-full px-4 md:px-5 pt-16 md:pt-[100px] pb-0">
        
        {/* Self Introduction Section */}
        <div className="flex flex-col gap-5 items-center md:items-start justify-start w-full text-center md:text-left">
          {/* Portrait */}
          <div 
            className="bg-center bg-cover bg-no-repeat relative rounded-full w-[150px] h-[150px] md:w-[180px] md:h-[180px] shrink-0"
            style={{ backgroundImage: `url('${imgPortrait}')` }}
          >
            <div 
              aria-hidden="true" 
              className="absolute border border-solid inset-[-0.5px] pointer-events-none rounded-full" 
              style={{ borderColor: 'var(--fill-secondary)' }}
            />
          </div>
          
          {/* Introduction */}
          <div className="flex flex-col items-center md:items-start justify-start w-full">
            {/* Name */}
            <div className="large-title w-full" style={{ color: 'var(--label-primary)' }}>
              JerryCode
            </div>
            
            {/* Information */}
            <div className="flex flex-col gap-1.5 items-center md:items-start justify-center pb-8 md:pb-10 pt-2.5 px-0 w-full">
              <div className="body-text w-full preserve-whitespace" style={{ color: 'var(--label-primary)' }}>
                🧑‍💻  Independent Developer
              </div>
              <div className="body-text w-full preserve-whitespace" style={{ color: 'var(--label-primary)' }}>
                🛠️  Former Tencent WXG PM
              </div>
              <div className="body-text w-full preserve-whitespace" style={{ color: 'var(--label-primary)' }}>
                🎓  Philosophy, Peking University
              </div>
            </div>
            
            {/* Links */}
            <div className="flex flex-col gap-1.5 items-center md:items-start justify-start w-full">
              <div className="body-text w-full" style={{ color: 'var(--label-secondary)' }}>
                <a 
                  href="https://www.google.com/maps?q=22.5429,114.0596" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: 'var(--label-secondary)' }}
                >
                  22°32′ N, 114°05′ E
                </a>
                <ExternalLinkIcon />
              </div>
              <div className="body-text w-full" style={{ color: 'var(--label-secondary)' }}>
                <a href="mailto:jerrycode@126.com" className="hover:underline">jerrycode@126.com</a>
                <ExternalLinkIcon />
              </div>
            </div>
          </div>
        </div>
        
        {/* Works List Section */}
        <div className="flex flex-col gap-5 items-center md:items-start justify-start w-full">
          {/* Title */}
          <div className="title1 w-full text-center md:text-left" style={{ color: 'var(--label-primary)' }}>
            Works
          </div>
          
          {/* List */}
          <div className="flex flex-col gap-6 md:gap-10 items-start justify-start w-full">
            {/* PicTune App Card */}
            <AppCard
              appIcon={picTuneImages.icon}
              appName="PicTune"
              appDescription="Add album cover & lyrics to photos"
              appDetail={
                <>
                  <p style={{ marginBottom: '1rem' }}>PicTune is an innovative photo editing app that perfectly blends your photos with music, full of rhythm.</p>
                  <p>With simple operations, you can add beautifully designed, diverse, and personalized music players, and export Live Photos with scrolling lyrics effects.</p>
                </>
              }
              appImage={picTuneImages.app}
              appStoreUrl={picTuneAppStoreUrl}
            />
            
            {/* toHDR App Card */}
            <AppCard
              appIcon={toHDRImages.icon}
              appName="toHDR"
              appDescription="Convert photos to HDR effects"
              appDetail="toHDR instantly converts any photo into a bright, vivid HDR (High Dynamic Range) effect. Simple interface, easy to use."
              appImage={toHDRImages.app}
              appStoreUrl={toHDRAppStoreUrl}
            />
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex items-center md:items-start justify-center md:justify-start pb-8 md:pb-10 pt-0 px-0 w-full">
          <div className="footnote text-center md:text-left" style={{ color: 'var(--label-secondary)' }}>
            © 2025 SHUZHAN · <a 
              href="https://beian.miit.gov.cn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: 'var(--label-secondary)' }}
            >
              粤ICP备2025409264号-1
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
