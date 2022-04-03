import Head from 'next/head';
import { CheckCircleIcon } from '@heroicons/react/outline';
import { NoAuthProvider } from "../providers/auth"; 

const RegistrationPage = () => {
    return (
      <>
        {/* <Head>
          <title>Sign Up</title>
        </Head> */}
        <NoAuthProvider>  
            <main className="w-full h-screen flex text-[#008C96] space-y-3 justify-center items-center bg-cover bg-center bg-[url('../../public/blur_bg.png')]"> 
                <div className="shadow-md rounded-xl w-max p-7 h-72 bg-white flex flex-col justify-center font-Poppins text-3xl items-center">
                    <CheckCircleIcon className="w-20 h-20 bg-white mt-2" />
                    <p className='mt-12 pb-3 w-96 font-semibold text-center'>Anda berhasil masuk!</p>
                </div>
            </main> 
        </NoAuthProvider>  
      </>
    );
  };
  export default RegistrationPage;