import Head from "next/head";

export default function Home() {
  return (
    <div className="h-full w-screen bg-[#1d1f2b] px-24">
      <Head>
        <title>NFT Commerce</title>
      </Head>
      <div className="flex justify-between items-baseline">
          <h2 className="text-5xl font-bold mt-24">
            Discover
          </h2>
          <input className="h-12 w-64 p-4 rounded-xl" type="text" placeholder="Search Item" />
      </div>

      <hr className="w-full border-[#243634] mt-12"/>

      <div className="flex-col items-start gap-7 mt-12">
        <h2 className="text-5xl font-bold">
          Popular Bid 
        </h2>

        <div className="flex flex-wrap items-start gap-7 mt-7 min-h-[50%]">
          
        </div>
      </div>
    </div>
  )
}
