import React, { useEffect, useMemo, useState } from 'react';

type Phase = 'typing' | 'holding' | 'deleting';

type TypewriterProps = {
  words: string[];
  typingMs?: number;
  deletingMs?: number;
  holdMs?: number;
  className?: string;
};

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingMs = 60,
  deletingMs = 38,
  holdMs = 900,
  className = '',
}) => {
  const safeWords = useMemo(() => words.map((w) => w.trim()).filter(Boolean), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('typing');
  const [cursor, setCursor] = useState(0);

  const currentWord = safeWords[wordIndex] ?? '';
  const visible = currentWord.slice(0, cursor);

  useEffect(() => {
    if (safeWords.length === 0) return;

    let timeout: number | undefined;

    if (phase === 'typing') {
      if (cursor >= currentWord.length) {
        timeout = window.setTimeout(() => setPhase('holding'), holdMs);
      } else {
        timeout = window.setTimeout(() => setCursor((c) => c + 1), typingMs);
      }
    }

    if (phase === 'holding') {
      timeout = window.setTimeout(() => setPhase('deleting'), holdMs);
    }

    if (phase === 'deleting') {
      if (cursor <= 0) {
        setPhase('typing');
        setWordIndex((i) => (i + 1) % safeWords.length);
      } else {
        timeout = window.setTimeout(() => setCursor((c) => c - 1), deletingMs);
      }
    }

    return () => {
      if (timeout) window.clearTimeout(timeout);
    };
  }, [cursor, currentWord.length, deletingMs, holdMs, phase, safeWords.length, typingMs]);

  useEffect(() => {
    // When word changes, reset cursor.
    setCursor(0);
  }, [wordIndex]);

  return (
    <span className={`role-typewriter ${className}`.trim()}>
      <span className="role-typewriter__text">{visible}</span>
      <span className="role-typewriter__cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
};

export default Typewriter;

