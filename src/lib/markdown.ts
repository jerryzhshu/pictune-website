import fs from 'fs';
import path from 'path';

export interface PrivacyPolicyData {
  title: string;
  lastUpdated: string;
  content: string;
}

export interface DocumentData {
  content: string;
}

export function getDocument(app: string, docType: string): DocumentData | null {
  try {
    const filePath = path.join(process.cwd(), 'content', 'apps', app, `${docType}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    
    return {
      content
    };
  } catch (error) {
    console.error(`Error reading ${docType} for ${app}:`, error);
    return null;
  }
}

export function getPrivacyPolicy(app: string): DocumentData | null {
  return getDocument(app, 'privacy');
}

export function getTerms(app: string): DocumentData | null {
  return getDocument(app, 'terms');
}

export function getAvailableApps(): string[] {
  try {
    const appsDir = path.join(process.cwd(), 'content', 'apps');
    
    if (!fs.existsSync(appsDir)) {
      return [];
    }

    const apps = fs.readdirSync(appsDir, { withFileTypes: true });
    return apps
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
  } catch (error) {
    console.error('Error reading apps directory:', error);
    return [];
  }
}

export function getAvailablePrivacyPolicies(): string[] {
  return getAvailableApps();
}
