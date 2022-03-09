import nft from '../../images/nft.jpg';

const Collection = () => {
    return(
        <div>
            <div className='hidden sm:flex w-full justify-around items-start md:flex-row flex-wrap pb-12 px-28 '>
                <img src={nft} alt="nft" className='w-32 md:w-40 max-w-none md:py-0 py-4 m-6 max-w-xs hover:scale-110 transition duration-300 ease-in-out'/>
                <img src={nft} alt="nft" className='w-32 md:w-40 max-w-none md:pt-20 py-4 m-6 max-w-xs hover:scale-110 transition duration-300 ease-in-out'/>
                <img src={nft} alt="nft" className='w-32 md:w-40 max-w-none md:py-0 py-4 m-6 max-w-xs hover:scale-110 transition duration-300 ease-in-out'/>
                <img src={nft} alt="nft" className='w-32 md:w-40 max-w-none md:pt-20 py-4 m-6 max-w-xs hover:scale-110 transition duration-300 ease-in-out'/>
                <img src={nft} alt="nft" className='w-32 md:w-40 max-w-none md:py-0 py-4 m-6 max-w-xs hover:scale-110 transition duration-300 ease-in-out'/>
            </div>
            <div className='flex sm:hidden w-full overflow-x-auto'>
                <img src={nft} alt="nft" className='w-44 md:p-0 py-4 m-6'/>
                <img src={nft} alt="nft" className='w-44 md:p-0 py-4 m-6'/>
                <img src={nft} alt="nft" className='w-44 md:p-0 py-4 m-6'/>
                <img src={nft} alt="nft" className='w-44 md:p-0 py-4 m-6'/>
                <img src={nft} alt="nft" className='w-44 md:p-0 py-4 m-6'/>
            </div>
        </div>
    )
}

export default Collection;