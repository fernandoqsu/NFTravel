import nft from '../../images/nft.jpg';

const Collection = () => {
    return(
        <div className='flex w-full justify-around items-center md:flex-row flex-wrap pb-28 px-28'>
            <img src={nft} alt="nft" className='w-40 max-w-none md:py-0 py-4 m-4'/>
            <img src={nft} alt="nft" className='w-40 max-w-none md:pt-28 py-4 m-4'/>
            <img src={nft} alt="nft" className='w-40 max-w-none md:py-0 py-4 m-4'/>
            <img src={nft} alt="nft" className='w-40 max-w-none md:pt-28 py-4 m-4'/>
            <img src={nft} alt="nft" className='w-40 max-w-none md:py-0 py-4 m-4'/>
        </div>
    )
}

export default Collection;