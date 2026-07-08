'use client'

import { useState } from 'react'
import styles from './CodeBlock.module.css'

type Props = {
  code: string
  language?: string
}

export default function CodeBlock({ code, language = '' }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={styles.codeWrapper}>
      <button
        onClick={handleCopy}
        className={styles.copyButton}
        aria-label="Copy code to clipboard"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre className={styles.block}>
        <code className={language ? `language-${language}` : undefined}>
          {code}
        </code>
      </pre>
    </div>
  )
}
