import Head from "next/head";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import NFTCard from "../components/NFTCard";

export default function Home() {
  const [search, setSearch] = useState('')

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, [])

  const filteredNfts = useMemo(() => {
    return nfts.filter((nft) => search ? nft.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) : true)
  }, [])

  return (
    <div className="h-full w-screen bg-[#1d1f2b] px-24">
      <Head>
        <title>NFT Commerce</title>
      </Head>
      <div className="flex justify-between items-baseline">
          <h2 className="text-5xl font-bold mt-24">
            Discover
          </h2>
          <input className="h-12 w-64 p-4 rounded-xl" type="text" placeholder="Search Item" onChange={handleSearch} value={search}/>
      </div>

      <hr className="w-full border-[#243634] mt-12"/>

      <div className="flex-col items-start gap-7 mt-12">
        <h2 className="text-5xl font-bold">
          Popular Bid 
        </h2>

        <div className="flex flex-wrap items-start gap-7 mt-7 min-h-[50%]">
          {nfts.map(nft => <NFTCard nft={nft} key={nft.id}/>)}
        </div>
      </div>
    </div>
  )
}

export const nfts = [
  {
      id: '1',
      name: '#4473',
      price: '0.1',
      author: '0xE51B77159',
      image: '',
      description: 'NFT description'
  },
  {
      id: '2',
      name: '#4474',
      price: '0.1',
      author: '0xE51B77159',
      image: '',
      description: 'NFT description'
  },
  {
      id: '3',
      name: '#4475',
      price: '0.1',
      author: '0xE51B77159',
      image: '',
      description: 'NFT description'
  },
  {
      id: '4',
      name: '#4476',
      price: '0.1',
      author: '0xE51B77159',
      image: '',
      description: 'NFT description'
  }
]
