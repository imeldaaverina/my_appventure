import {Input, Input2} from "../../components/input"; 
import { Button, Button2} from "../../components/button"; 
import { Title, SubTitle,TitleForm } from "../../components/typography"; 
import { NoAuthProvider } from "../../providers/auth"; 
import { useFormik, getIn } from "formik"; 
import * as Yup from 'yup'; 
import { useLoginDispatcher } from '../../redux/reducers/login'; 
import { ExclamationCircleIcon, EyeIcon } from "@heroicons/react/outline";
 
const validationSchema = Yup.object({ 
    email: Yup.string().required().email(), 
    password: Yup.string().required(), 
}); 
 
const initialValues = { 
    email: "", 
    password: "" 
}; 
 
const LoginContainer = () => { 
    const { login: { loading }, doLogin } = useLoginDispatcher(); 
 
    const onSubmit = async (values) => { 
 
        try { 
            const payload = { 
                identifier: values.email, 
                password: values.password, 
            }; 
            await doLogin(payload); 
            window.location.href = "/"; 
        } catch (error) { 
            alert(error); 
        } 
    } 
 
    const { 
        handleChange, 
        handleBlur, 
        handleSubmit, 
        errors, 
        touched, 
    } = useFormik({ 
        initialValues, 
        validationSchema, 
        onSubmit 
    }); 
 
    return ( 
        <NoAuthProvider> 
          <body className="font-Poppins bg-cover bg-center h-screen bg-[url('../../public/blur_bg.png')] flex justify-center items-center">
            <main className="shadow-md p-3 px-3 text-white rounded-xl max-w-md mx-auto fixed bg-[#457275] flex justify-center items-center"> 
                <div className="w-full p-1 pt-3"> 
                    <div className="w-full p-2 py-1"> 
                        <Title text="Hai," />
                        <Title /> 
                        <SubTitle content="Selamat Datang!" /> 
                    </div> 
                    <form className="w-full p-2 pt-10 pb-4 bg-[#457275]" onSubmit={handleSubmit}>
                        <div className="py-6 text-center">
                        <TitleForm text="Masuk ke akun anda" />   
                        </div>

                        {getIn(touched, "password") && getIn(errors, "password") && getIn(touched, "email") && getIn(errors, "email")&& ( 
                        <div className="flex items-center justify-start text-xs font-bold text-[#FF6969] pb-2" data-testid="error-password"> 
                           <ExclamationCircleIcon className="w-9 h-9 " />
                           <p className="px-2 leading-5">Alamat email atau kata sandi yang anda masukan <br></br> tidak valid</p>
                        </div> 
                        )} 

                        <Input
                        name="email" 
                        label="Email" 
                        type="text" 
                        placeholder="Ketik email anda disini" 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        dataTestId="input-email" 
                        /> 
                         
                        {/* {getIn(touched, "email") && getIn(errors, "email") && ( 
                        <div className="text-xs text-red-500 pb-3" data-testid="error-email"> 
                            {getIn(errors, "email")} 
                        </div> 
                        )}  */}
                        {/* {getIn(touched, "email") && getIn(errors, "email") && ( 
                        <div className="flex items-center justify-start text-xs font-bold text-[#FF6969] pb-1" data-testid="error-email"> 
                            <ExclamationCircleIcon className="w-9 h-9 " />
                           <p className="px-2 leading-5">{getIn(errors, "email")} </p>
                        </div> 
                        )}  */}
                         
                        <Input2 
                        name="password" 
                        label="Kata sandi" 
                        type="password" 
                        placeholder="Masukan kata sandi anda" 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        dataTestId="input-password" 
                        /> 
                        {/* {getIn(touched, "password") && getIn(errors, "password") && ( 
                        <div className="flex items-center justify-start text-xs font-bold text-[#FF6969] pb-1" data-testid="error-password"> 
                            <ExclamationCircleIcon className="w-9 h-9 " />
                           <p className="px-2 leading-5">{getIn(errors, "password")} </p>
                        </div> 
                        )}  */}
                         
                    <div className="flex items-center justify-between pb-5">
                        <div className="flex items-center">
                            <a className="font-semibold text-xs text-white underline" href="#">
                            Lupa kata sandi?
                            </a>
                        </div>
                    </div>

                        <Button type="submit" label={loading ? 'Please wait...' : 'Masuk'} /> 
                        <div className="text-sm flex justify-center mt-2">
                            <p className="text-white font-light text-xs">
                            Belum punya akun? <a className="font-semibold underline" href="../registration">Daftar gratis</a>
                            </p>
                        </div>
                    </form> 
                </div> 
            </main> 
          </body>
        </NoAuthProvider> 
    ) 
} 
 
export default LoginContainer;
