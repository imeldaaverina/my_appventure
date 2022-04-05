import Head from 'next/head';
import { CheckCircleIcon } from '@heroicons/react/outline';
import { NoAuthProvider } from "../providers/auth"; 
import { Button, Button2, ButtonExit } from "../components/button";  

const RegistrationPage = () => {
    return (
      <>
        {/* <Head>
          <title>Sign Up</title>
        </Head> */}
        <NoAuthProvider>  
          <main className="w-full h-screen flex text-[#008C96] space-y-3 justify-center items-center bg-cover bg-center bg-[url('../../public/blur_bg.png')]"> 
            <div className="shadow-md rounded-xl w-max bg-white flex flex-col font-Poppins text-3xl">
                <div className="flex justify-end"> 
                        <a href="#">
                            <ButtonExit />
                        </a>
                </div>
                <div className='p-7 h-max flex flex-col justify-center items-center'>
                    <CheckCircleIcon className="w-20 h-20 bg-white mt-2" />
                    <p className='mt-8 w-96 font-semibold text-center'>Terimakasih telah berlangganan!</p>
                    <p className='pb-3 mt-8 w-96 font-normal text-center text-[#292929] text-base'>Terimakasih telah berlangganan! Kami akan mengirimkan berbagai penawaran menarik dari My Appventure ke alamat email anda</p>
                </div>
              </div>
          </main> 
        </NoAuthProvider>  
      </>
    );
  };
  export default RegistrationPage;