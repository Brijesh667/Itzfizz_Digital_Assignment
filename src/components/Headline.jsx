const WORDS = ['WELCOME', 'ITZFIZZ']

export default function Headline() {
  return (
    <h1
      aria-label="Welcome ItzFizz"
      className="headline absolute top-[32%] sm:top-[35%] inset-x-0 z-0 text-center font-light uppercase text-[clamp(1.5rem,4vw,3.75rem)] tracking-[0.2em] sm:tracking-[0.35em] md:tracking-[0.5em]"
    >
      {WORDS.map((word, wordIndex) => (
        <span
          key={word}
          className="inline-block whitespace-nowrap mx-3 sm:mx-6 md:mx-10 pl-[0.2em] sm:pl-[0.35em] md:pl-[0.5em]"
        >
          {word.split('').map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className="headline-char inline-block"
              aria-hidden="true"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  )
}
