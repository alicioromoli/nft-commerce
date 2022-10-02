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
    <div className="w-24-[24rem] h-[31rem] bg-[#242634] rounded-[1.25rem] cursor-pointer">
        <div>
            <img src={nft.image} alt={nft.name} className="rounded-[2.25rem] 0-2 w-96 h-80" />
        </div>

        <div className="mx-6 mt-4">
            <div className="mb-5">
                <p>{nft.name}</p>
                <p>By {nft.author}</p>
            </div>
        </div>
    </div>
  )
}
