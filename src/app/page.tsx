import Image from 'next/image'
import styles from './page.module.css'
import Products from './components/Products'

export default function Home() {
  return (
    <main >
      <div>
        <Products/>
      </div>
    </main>
  )
}
