import { ReadListProvider } from './ContextAPI'
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
          <ReadListProvider>{children}</ReadListProvider>
          <footer>Joel Waiman 🧡</footer>
        </main>
      </body>
    </html>
  )
}
