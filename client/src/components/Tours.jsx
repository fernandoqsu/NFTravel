import alpacas from '../../images/alpacas.jpg';
import cusco from '../../images/cusco.jpg';
import golden from '../../images/golden.jpg';
import machu from '../../images/machu.jpg';
import moray from '../../images/moray.jpg';
import picchu from '../../images/picchu.jpg';
import rainbow from '../../images/rainbow.jpg';
import salkantay from '../../images/salkantay.jpg';

const Tours = () => {
    return(
        <div id='tours' className="flex w-full justify-center items-center gradient-bg-transactions py-16">
            <div className="flex mf:flex-row flex-col item-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-center">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 font-medium">
                        Choose the tours you want!
                    </h1>
                </div>
                <div className="flex-wrap md:flex w-full justify-center items-center sm:py-12">
                    <div className='hidden lg:flex w-full justify-around items-start md:flex-row flex-wrap pb-12 px-28 '>
                        <a href=""><img src={alpacas  } alt="nft" className='w-64 max-w-none md:py-0 py-4 m-6 max-w-xs hover:scale-110 transition duration-300 ease-in-out'/></a>
                        <a href=""><img src={cusco    } alt="nft" className='w-64 max-w-none md:py-0 py-4 m-6 max-w-xs hover:scale-110 transition duration-300 ease-in-out'/></a>
                        <a href=""><img src={golden   } alt="nft" className='w-64 max-w-none md:py-0 py-4 m-6 max-w-xs hover:scale-110 transition duration-300 ease-in-out'/></a>
                        <a href=""><img src={machu    } alt="nft" className='w-64 max-w-none md:py-0 py-4 m-6 max-w-xs hover:scale-110 transition duration-300 ease-in-out'/></a>
                        <a href=""><img src={picchu   } alt="nft" className='w-64 max-w-none md:py-0 py-4 m-6 max-w-xs hover:scale-110 transition duration-300 ease-in-out'/></a>
                        <a href=""><img src={moray    } alt="nft" className='w-64 max-w-none md:py-0 py-4 m-6 max-w-xs hover:scale-110 transition duration-300 ease-in-out'/></a>
                        <a href=""><img src={rainbow  } alt="nft" className='w-64 max-w-none md:py-0 py-4 m-6 max-w-xs hover:scale-110 transition duration-300 ease-in-out'/></a>
                        <a href=""><img src={salkantay} alt="nft" className='w-64 max-w-none md:py-0 py-4 m-6 max-w-xs hover:scale-110 transition duration-300 ease-in-out'/></a>
                    </div>
                    <div className='flex lg:hidden w-full overflow-x-auto'>
                        <img src={alpacas  } alt="nft" className='w-44 md:p-0 py-4 m-6 cursor-[url(App.jsx),_pointer]'/>
                        <img src={cusco    } alt="nft" className='w-44 md:p-0 py-4 m-6'/>
                        <img src={golden   } alt="nft" className='w-44 md:p-0 py-4 m-6'/>
                        <img src={machu    } alt="nft" className='w-44 md:p-0 py-4 m-6'/>                   
                    </div>
                    <div className='flex lg:hidden w-full overflow-x-auto'>
                        <img src={picchu   } alt="nft" className='w-44 md:p-0 py-4 m-6'/>
                        <img src={moray    } alt="nft" className='w-44 md:p-0 py-4 m-6'/>
                        <img src={rainbow  } alt="nft" className='w-44 md:p-0 py-4 m-6'/>
                        <img src={salkantay} alt="nft" className='w-44 md:p-0 py-4 m-6'/>                   
                    </div>
                </div>              
            </div>          
        </div>
    )
}

export default Tours;