import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';


const CodeBlock = ({ language = 'js', children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className='block'>
    <code className={`language-${language}`}>
        {children}
    </code>
    </pre>
  );
};

export default CodeBlock;
