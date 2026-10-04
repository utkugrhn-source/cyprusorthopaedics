/**
 * Fixed WhatsApp button. The link opens a chat with the number below and a short first line
 * saying which site the visitor came from. The icon is a plain speech bubble; the word carries the meaning.
 */
export default function WhatsApp({ number, label, text }: { number: string; label: string; text: string }) {
  return (
    <a className="wa" href={`https://wa.me/${number}?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener" aria-label={label} title={label}>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 3c-5.1 0-9 3.6-9 8.2 0 1.8.6 3.5 1.7 4.8L3.6 21l5.3-1.4c1 .3 2 .5 3.1.5 5.1 0 9-3.6 9-8.4S17.1 3 12 3z" /></svg>
      <span>WhatsApp</span>
    </a>
  );
}
