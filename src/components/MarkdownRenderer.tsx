import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 
              className="font-bold text-[var(--label-primary)] transition-colors duration-300" 
              style={{
                fontSize: '1.9rem',
                marginBottom: '0',
                marginTop: '0',
                lineHeight: '110%',
                letterSpacing: '0.02em'
              }}
            >
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 
              className="font-semibold text-[var(--label-primary)] transition-colors duration-300" 
              style={{
                fontSize: '1.05rem',
                marginTop: '17px',
                marginBottom: '6px',
                lineHeight: '110%',
                letterSpacing: '0.02em'
              }}
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 
              className="font-semibold text-[var(--label-primary)] transition-colors duration-300" 
              style={{
                fontSize: '1.05rem',
                marginTop: '17px',
                marginBottom: '6px',
                lineHeight: '110%',
                letterSpacing: '0.02em'
              }}
            >
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p 
              className="text-[var(--label-primary)] transition-colors duration-300" 
              style={{
                fontSize: '1rem',
                marginBottom: '17px',
                lineHeight: '150%',
                letterSpacing: '0.02em'
              }}
            >
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul 
              className="list-disc list-inside text-[var(--label-primary)] transition-colors duration-300 mb-5 space-y-3" 
              style={{ marginTop: '0' }}
            >
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol 
              className="list-decimal list-inside text-[var(--label-primary)] transition-colors duration-300 mb-5 space-y-3" 
              style={{ marginTop: '0' }}
            >
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li 
              className="text-[var(--label-primary)] transition-colors duration-300" 
              style={{
                fontSize: '1rem',
                lineHeight: '150%',
                letterSpacing: '0.02em'
              }}
            >
              {children}
            </li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-[var(--label-primary)] transition-colors duration-300">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-[var(--label-primary)] transition-colors duration-300">
              {children}
            </em>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-blue-500 hover:text-blue-600 underline transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[var(--label-quaternary)] pl-6 italic text-[var(--label-primary)] transition-colors duration-300 my-5 py-2">
              {children}
            </blockquote>
          ),
          code: ({ children, className }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="bg-[var(--background-secondary)] text-[var(--label-primary)] px-2 py-1 rounded text-sm font-mono transition-colors duration-300">
                  {children}
                </code>
              );
            }
            return (
              <code className="block bg-[var(--background-secondary)] text-[var(--label-primary)] p-6 rounded-lg text-sm font-mono overflow-x-auto transition-colors duration-300 my-6">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-[var(--background-secondary)] p-6 rounded-lg overflow-x-auto transition-colors duration-300 my-6">
              {children}
            </pre>
          ),
          hr: () => (
            <hr 
              className="transition-colors duration-300 bg-[var(--divider-color-transparent)] opacity-80" 
              style={{
                marginTop: '20px',
                marginBottom: '30px',
                border: 'none',
                height: '1px'
              }}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
