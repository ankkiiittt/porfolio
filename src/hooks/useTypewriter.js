import { useEffect, useState } from "react";

export default function useTypewriter(words = [], typingSpeed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [isDeleting, setDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingInterval, setTypingInterval] = useState(typingSpeed);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const handle = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        setTypingInterval(typingSpeed);
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        setTypingInterval(typingSpeed / 2);
        if (text.length - 1 === 0) {
          setDeleting(false);
          setWordIndex((wi) => wi + 1);
        }
      }
    }, typingInterval);

    return () => clearTimeout(handle);
  }, [text, isDeleting, wordIndex, words, typingSpeed, pause, typingInterval]);

  return text;
}
