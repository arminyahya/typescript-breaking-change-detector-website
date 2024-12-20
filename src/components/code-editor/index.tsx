'use client';

import { githubDark } from '@uiw/codemirror-theme-github';
import { javascript } from '@codemirror/lang-javascript';
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';

interface Props {
  title: string;
}

function CodeEditor({title}: Props) {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: string) => {
    setValue(val);
  }, []);
  return (
    <div>
      <span className='inline-block overflow-y-auto whitespace-nowrap max-w-full'>{title}</span>
      <CodeMirror
        value={value}
        // this property works for root code mirror element
        style={{ height: `calc(100% - 1.5rem)` }}
        // and this works for inner code mirror element
        height='100%'
        extensions={[javascript({ typescript: true })]}
        onChange={onChange}
        theme={
          githubDark
        } />
    </div>
  );
}
export default CodeEditor;