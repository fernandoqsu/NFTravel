import nft from '../../images/nft.jpg';

const Nfts = () => {
    return(
        <div id='nfts' className="flex w-full justify-center items-center gradient-bg-services py-16">
            <div className="flex mf:flex-row flex-col item-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-center">
                    <h1 className="text-white border-b-4 border-amber-400 text-3xl sm:text-5xl py-2  font-medium">
                        Get your nft and start traveling <span className='text-amber-400'>!</span>
                    </h1>
                </div>
                <div className="flex-wrap md:flex w-full justify-center items-center sm:py-12">
                    <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 sm:mt-10">
                        <img src={nft} alt="nft" className='w-60 md:w-80 max-w-none md:py-0 py-4 m-6 '/>
                    </div>
                    <div className="flex flex-col flex-1 items-start justify-start w-full md:mt-0 mt-10">
                        <h2 className='text-white text-2xl sm:text-3xl text-gradient text-start font-medium'>
                            Manco Capac <br /> | The founder    
                        </h2>
                        <h3 className='text-amber-400 text-lg py-2 mt-6'>
                            Perks
                        </h3>
                        <p className='text-white text-base'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus eius quae, alias rem aliquid neque reiciendis dolor voluptates excepturi ducimus et praesentium error tenetur voluptate.
                        </p>
                        <h3 className='text-amber-400 text-lg py-2'>
                            Current Price
                        </h3>
                        <h2 className='text-white text-2xl sm:text-3xl text-start font-medium mb-7'>
                            2.500 <span className='font-medium text-lg'>ETH</span>
                        </h2>
                        <div className='flex-wrap md:flex w-full'>
                            <button
                                type='button'
                                className="w-2/3 md:w-1/3  flex flex-row justify-center items-center mr-4 my-4 md:my-0 p-3 rounded-full cursor-pointer bg-gradient-to-r from-amber-200 to-amber-500 hover:from-amber-500 hover:to-amber-200 hover:animate-pulse transition ease-in-out"
                            >
                                <p className='text-white text-base font-semibold'>Connect Wallet</p>
                            </button>
                            <button
                                type='button'
                                className="w-2/3 md:w-1/3  flex flex-row justify-center items-center p-3 rounded-full border-white border-2 hover:animate-pulse transition ease-in-out hover:border-amber-300"
                            >
                                <p className='text-white text-base font-semibold hover:text-amber-300'>Explore Collections</p>
                            </button>
                        </div>
                    </div>
                </div>              
            </div>          
        </div>
    )
}

export default Nfts;