import Input from "../../components/input"; 
import Button from "../../components/button"; 
import { Title, SubTitle,TitleForm } from "../../components/typography"; 
import { NoAuthProvider } from "../../providers/auth"; 
import { useFormik, getIn } from "formik"; 
import * as Yup from 'yup'; 
import { useLoginDispatcher } from '../../redux/reducers/login'; 
import { ExclamationCircleIcon } from "@heroicons/react/outline";
 
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
          <body className="font-Poppins bg-cover bg-center h-screen bg-[url('https://s3-alpha-sig.figma.com/img/7a6c/e637/7a1c306ebbfa54192e3ddeab2d49b6b9?Expires=1649635200&Signature=AF6hQeNyNS-BUtuJcv5n9NiS24CXJy~HQcFzv0cfGcZbFEvfgOjp3cJ479b5ilWo--uUDywI2uJGR78Ab2f2Jjckxg4wF4g3BFNvS4~20TWvCV18LCI7utNOSOoEmmeROg4IcK-XouQY8Mfy3fGusRN1SEU7rS2vyO7zb-rNmoh3dYHFGPgcqptQqLoFwdjfqguT3Zf6wjgtCiIaz0aZD52tEc0PqKmcM6iV0Lqo~YDLW1h2pcEhKGgn-fKWRDgrXkGD47fepVVvg4VjrVSg7slt6tE06-ArBPsV2i9X~Z7W8O7xPauliD3aeNxT-Fc~QcQ0njBj7GMqZYtaEauWog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')]">
            <main className="p-3 text-white rounded-t-xl max-w-md mx-auto fixed bottom-0 left-0 right-0 bg-[#457275] justify-center items-center"> 
                <div className="w-full"> 
                    <div className="w-full p-2 py-1"> 
                        <Title text="Hai," />
                        <Title /> 
                        <SubTitle content="Selamat Datang!" /> 
                    </div> 
                    <form className="w-full p-2 py-12 bg-[#457275]" onSubmit={handleSubmit}>
                        <div className="py-6 text-center">
                        <TitleForm text="Masuk ke akun anda" />   
                        </div>

                        {getIn(touched, "password") && getIn(errors, "password") && getIn(touched, "email") && getIn(errors, "email")&& ( 
                        <div className="flex items-center justify-start text-xs font-bold text-[#FF6969] pb-3" data-testid="error-password"> 
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
                         
                        <Input 
                        name="password" 
                        label="Kata sandi" 
                        type="password" 
                        placeholder="Masukan kata sandi anda" 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        dataTestId="input-password" 
                        /> 
                        {/* {getIn(touched, "password") && getIn(errors, "password") && ( 
                        <div className="text-xs text-red-500 pb-3" data-testid="error-password"> 
                            {getIn(errors, "password")} 
                        </div> 
                        )}  */}
                         
                    <div className="flex items-center justify-between pb-8">
                        <div className="flex items-center">
                            <a className="font-semibold text-xs text-white underline" href="#">
                            Lupa kata sandi?
                            </a>
                        </div>
                        <div className="text-sm">
                            <p className="text-white font-light text-xs">
                            Belum punya akun? <a className="font-semibold underline" href="#">Daftar gratis</a>
                            </p>
                        </div>
                    </div>

                        <Button type="submit" label={loading ? 'Please wait...' : 'Masuk'} /> 
                         
                    </form> 
                </div> 
            </main> 
          </body>
        </NoAuthProvider> 
    ) 
} 
 
export default LoginContainer;
