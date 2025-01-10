'use client';
import { githubDark } from '@uiw/codemirror-theme-github';
import { javascript } from '@codemirror/lang-javascript';
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';

interface Props {
  title: string;
  value: string;
  onChange: (val: string) => void;
  disabled: boolean;
}

function CodeEditor({title,value, onChange, disabled}: Props) {
  return (
    <div>
      <span className='inline-block overflow-y-auto whitespace-nowrap max-w-full'>{title}</span>
      <CodeMirror
      value={value}
        // this property works for root code mirror element
        style={{ height: `calc(100% - 1.5rem)`, opacity: disabled ? 0.5 : 1 }}
        // and this works for inner code mirror element
        height='100%'
        extensions={[javascript({ typescript: true })]}
        onChange={onChange}
        theme={
          githubDark
        }
        editable={!disabled}
         />
    </div>
  );
}
export default CodeEditor;