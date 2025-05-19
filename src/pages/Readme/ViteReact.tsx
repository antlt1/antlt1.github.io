import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from'./styles.module.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);
const ViteReact: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch('/src/assets/vite.md')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch markdown file');
        return response.text();
      })
      .then(setMarkdownContent)
      .catch(console.error);
  }, []);

  return (
    <div className={cx('markdown-body')}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default ViteReact;