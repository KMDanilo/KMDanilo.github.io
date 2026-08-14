// Pega useState para guardar o texto e useEffect para controlar a animação
import { useEffect, useState } from "react";

// Faz o texto aparecer uma letra por vez
// speed define o tempo entre as letras e começa com 90 milissegundos
export function useTypewriter(text, speed = 90) {
  // typed guarda o que já apareceu e setTyped muda esse texto
  const [typed, setTyped] = useState("");

  // Confere se o usuário ativou reduzir movimento
  // matches fica true quando reduzir movimento está ativado
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // Começa a animação quando o componente aparece
  useEffect(() => {
    // Se reduzir movimento estiver ativado mostra tudo sem animar
    if (reduceMotion) return;

    // Guarda qual é a próxima letra
    let currentIndex = 0;

    // Repete esse trecho no tempo definido em speed
    const intervalId = setInterval(() => {
      currentIndex += 1;

      // Pega o texto do começo até a letra atual
      setTyped(text.slice(0, currentIndex));

      // Para quando todas as letras aparecem
      if (currentIndex >= text.length) clearInterval(intervalId);
    }, speed);

    // Para o contador quando o componente sai da página
    return () => clearInterval(intervalId);
  }, [reduceMotion, speed, text]);

  // Mostra tudo sem animação ou mostra typed letra por letra
  return reduceMotion ? text : typed;
}
