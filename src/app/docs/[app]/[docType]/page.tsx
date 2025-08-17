import { notFound } from 'next/navigation';
import PrivacyLayout from '@/components/PrivacyLayout';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getDocument, getAvailableApps } from '@/lib/markdown';

interface PageProps {
  params: Promise<{
    app: string;
    docType: string;
  }>;
}

export default async function DocumentPage({ params }: PageProps) {
  const { app, docType } = await params;
  
  // 验证应用是否存在
  const availableApps = getAvailableApps();
  if (!availableApps.includes(app)) {
    notFound();
  }

  // 验证文档类型是否支持
  const supportedDocTypes = ['privacy', 'terms'];
  if (!supportedDocTypes.includes(docType)) {
    notFound();
  }

  const document = getDocument(app, docType);

  if (!document) {
    notFound();
  }

  return (
    <PrivacyLayout>
      {/* 内容区域 */}
      <MarkdownRenderer content={document.content} />
    </PrivacyLayout>
  );
}

// 生成静态页面
export async function generateStaticParams() {
  const availableApps = getAvailableApps();
  const supportedDocTypes = ['privacy', 'terms'];
  
  const params = [];
  for (const app of availableApps) {
    for (const docType of supportedDocTypes) {
      params.push({ app, docType });
    }
  }
  
  return params;
}
