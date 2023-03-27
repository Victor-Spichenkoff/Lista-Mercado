import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import List from '@/components/List'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header titulo='Faça sua lista de compras'/>
      <List />
    </>
  )
}
