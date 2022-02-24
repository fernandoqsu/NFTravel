//import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './';


const Welcome = () => {

    const connectWallet = () => {

    }

    return(
        <div className='flex w-full justify-center items-center p-4'>
            <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col md:mr-10'>
                    <p className='text-xs text-slate-500 text-center'>
                        Designed by Peruvians <span className='text-white'> for travelers</span>
                    </p>
                    <h1 className='text-4xl sm:text-7xl text-white text-center font-semibold sm:py-16 py-12'>
                        Inca Collection <br/> for travelers
                    </h1>
                    <div className='flex w-full justify-around items-center md:flex-row flex-col'>
                        <button
                            type='button'
                            onClick={connectWallet}
                            className="w-2/3 md:w-1/3  flex flex-row justify-center items-center my-5 p-3 rounded-full cursor-pointer bg-gradient-to-r from-amber-200 to-amber-500 hover:from-amber-500 hover:to-amber-200 hover:animate-pulse transition ease-in-out"
                        >
                        <p className='text-white text-base font-semibold'>Connect Wallet</p> 
                        </button>
                        <button
                            type='button'
                            onClick={connectWallet}
                            className="w-2/3 md:w-1/3 flex flex-row justify-center items-center my-5 p-3 rounded-full cursor-pointer border-white border-2 hover:animate-pulse transition ease-in-out hover:border-amber-300"
                        >
                        <p className='text-white text-base font-semibold'>Explore tours</p> 
                        </button>
                    </div>
                    <div className='hidden sm:flex'>
                        
                    </div>                  
                </div>
            </div>
        </div>
    )
}

export default Welcome;