import Image from 'next/image'
import Head from 'next/head'
import RootLayout from './layout'
import Navbar from '@/components/Navbar/Navbar'
import Header from '@/components/Header/Header'
import CountrySearch from '@/components/CountrySearch/CountrySearch'
import SelectContinent from '@/components/SelectContinent/SelectContinent'

export default function Home() {
  return (
    <RootLayout>
      <>
        <Header/>
        <Navbar/>
        <CountrySearch/>
        <SelectContinent/>
      </>
    </RootLayout>
  )
}
