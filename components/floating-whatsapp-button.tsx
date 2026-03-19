'use client'

export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/27670279825"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-6 top-1/2 z-50 -translate-y-1/2 text-[#25D366] transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <span className="relative flex h-16 w-16 items-center justify-center">
        <span
          aria-hidden="true"
          className="whatsapp-glow absolute inset-1 rounded-full bg-[#25D366]/25 blur-xl"
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="whatsapp-pop relative h-10 w-10 fill-current drop-shadow-[0_0_14px_rgba(37,211,102,0.95)] transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M19.11 17.29c-.29-.14-1.71-.84-1.97-.94-.26-.1-.45-.14-.64.15-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.39-.84-.75-1.42-1.67-1.58-1.96-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.03 2.81 1.17 3c.14.19 2.02 3.08 4.89 4.31.68.29 1.21.47 1.62.6.68.22 1.29.19 1.77.11.54-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.33Z" />
          <path d="M16.03 3.2c-6.98 0-12.65 5.67-12.65 12.64 0 2.23.58 4.4 1.69 6.31L3.2 28.8l6.82-1.79a12.62 12.62 0 0 0 6.01 1.53h.01c6.97 0 12.64-5.67 12.64-12.65 0-3.38-1.32-6.56-3.71-8.95A12.55 12.55 0 0 0 16.03 3.2Zm0 22.99h-.01a10.5 10.5 0 0 1-5.35-1.46l-.38-.23-4.05 1.06 1.08-3.95-.25-.4a10.52 10.52 0 0 1-1.61-5.56c0-5.81 4.73-10.54 10.56-10.54 2.82 0 5.46 1.1 7.45 3.09a10.47 10.47 0 0 1 3.09 7.45c0 5.82-4.73 10.55-10.53 10.55Z" />
        </svg>
      </span>
    </a>
  )
}
