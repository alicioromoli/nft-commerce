const nft = {
    id: '1',
    name: '#4473',
    price: '0.1',
    author: '0xE51B77159',
    image: '',
    description: 'NFT description'
}

export default function NFTCard() {
  return (
    <div className="w-24-[24rem] h-[31rem] bg-[#242634] rounded-[1.25rem] cursor-pointer hover:scale-105 active:scale-95">
        <div>
            <img src={nft.image} alt={nft.name} className="rounded-[2.25rem] 0-2 w-96 h-80" />
        </div>

        <div className="mx-6 mt-4">
            <div className="mb-5">
                <p className="text-2xl font-semibold">{nft.name}</p>
                <p className="text-[#93989A]">By {nft.author}</p>
            </div>

            <div className="">
                <p className="text-[#93989A]">Current Bid</p>

                <div className="flex mt-0.5">
                    {/* Icon ETH */}
                    <p className="text-xl font-semibold">{nft.price}</p>
                </div>

                <div className="relative">
                    <button className="absolute right-1 bottom-0.5 bg-[#ff2748] py-[0.625rem] px-5 rounded-xl hover:scale-105 active:scale-95">
                        Place a Bid
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
