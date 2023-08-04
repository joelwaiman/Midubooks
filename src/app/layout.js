import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '📚MiduBooks',
  description: 'Libros de Midu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <main>
          <nav>📚MiduBooks</nav>
          <section>{children}</section>
          <footer>Joel Waiman 🧡</footer>
        </main>
      </body>
    </html>
  )
}
