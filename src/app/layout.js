import { Navigation } from './components/Navigation'
import './globals.css'

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
          <Navigation/>
          <section>{children}</section>
          <footer>Joel Waiman 🧡</footer>
        </main>
      </body>
    </html>
  )
}
