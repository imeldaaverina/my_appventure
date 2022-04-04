import {Input, Input2} from "../../components/input";  
import { useState } from 'react';
import { Button, Button2 } from "../../components/button";  
import { Title, SubTitle, TitleForm } from "../../components/typography";  
import { NoAuthProvider } from "../../providers/auth";  
import { useFormik, getIn } from "formik";  
import * as Yup from 'yup';  
import { useRegistrationDispatcher } from '../../redux/reducers/registration';  
import { ExclamationCircleIcon, EyeIcon } from "@heroicons/react/outline";
import { CameraIcon } from '@heroicons/react/outline';
 
const validationSchema = Yup.object({  
    username: Yup.string().required(),
    email: Yup.string().required().email(),  
    password: Yup.string().required(),  
    files: Yup.mixed().required(),
});  
  
const initialValues = { 
    username:"", 
    email: "",  
    password: "",
    files: null,  
};  
  
const RegistrationContainer = () => {  
    const { registration: { loading }, doRegistration } = useRegistrationDispatcher();  
  
    const onSubmit = async (values) => {  
  
        try {  
            const payload = {  
                identifier: values.username,
                identifier: values.email,  
                password: values.password,  
            };  
            await doRegistration(payload);  
            window.location.href = "/";  
        } catch (error) {  
            alert(error);  
        }  
        setLoading(true);

      //upload profil picture
      const formData = new FormData();
      formData.append('files', formValues.files);
      const upload = await callAPI({
        url: '/upload',
        method: 'post',
        data: formData,
        headers: {
          Authorization: `Bearer ${getJwt()}`,
        },
      });
      // const fileUrl = upload.data[0].url;
      // // const payload = {
      // //   data: {
      // //     photo: `${fileUrl}`,
      // //     isPublish: true,
      // //     postedBy: `${getUser().username}`,
      // //   },
      // };
      // const submitRegistration = await callAPI({
      //   url: '/posts',
      //   method: 'post',
      //   data: payload,
      //   headers: {
      //     Authorization: `Bearer ${getJwt()}`,
      //   },
      // });
      // if (submitRegistration.status === 200) {
      //   setLoading(false);
      //   alert('Create posts success!');
      //   push('/');
      // }
    };
      
    const {  
        handleChange,  
        handleBlur,  
        handleSubmit,  
        errors,  
        touched,  
        setFieldValue,
    } = useFormik({  
        initialValues,  
        validationSchema,  
        onSubmit  
    });  
    const [preview, setPreview] = useState();
    const handleChangeFile = (e) => {
      const files = e.target.files;
      if (files) {
        setPreview(URL.createObjectURL(files[0]));
        setFieldValue('files', files[0]);
      }
    };
 
  return ( 
    <NoAuthProvider>  
    <main className="w-full text-gray-700 h-screen flex flex-col space-y-3 justify-center items-center font-Poppins bg-cover bg-center bg-[url('../../public/blur_bg.png')]"> 
      <div className="shadow-md p-3 px-3 text-white rounded-xl max-w-md mx-auto fixed bg-[#457275] justify-center items-center my-3 max-h-100%"> 
      <div className="w-full p-1 pt-3"> 
          <Title text="Hai," />
          <SubTitle content="Belum punya akun?" /> 
        </div> 
          <form className="w-full p-2 py-6 bg-[#457275]" onSubmit={handleSubmit}>
              <div className="text-center flex-col justify-center items-center">
                  <TitleForm text="Yuk daftar!" /> 
                  <label
                    htmlFor="files"
                    className="w-20 h-20 m-auto flex justify-center items-center rounded-full cursor-pointer bg-white">
                      {preview ? <img className="h-full w-full object-cover rounded-full bg-white" src={preview} /> : <CameraIcon className="h-8 w-8 text-gray-600" />}
                    <input id="files" type="file" name="files" className="hidden" accept=".jpg, .png, .jpeg" onChange={handleChangeFile} dataTestId="input-files"   />
                  </label>  
              </div>
                <Input
                  name="username" 
                  label="Username" 
                  type="text" 
                  placeholder="Ketik username anda disini" 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                  dataTestId="input-username" 
                /> 
                <div className="flex justify-center">
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
                  <div className="flex items-center justify-start text-xs font-bold text-[#FF6969] pb-1 mt--4" data-testid="error-email"> 
                    <ExclamationCircleIcon className="w-9 h-9 " />
                    <p className="px-2 leading-5">{getIn(errors, "email")} </p>
                  </div> 
                )}  */}
                </div>
                         
                <Input2 
                  name="password" 
                  label="Kata sandi" 
                  type="password"
                  placeholder="Masukan kata sandi anda" 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                  dataTestId="input-password" 
                />
                {getIn(touched, "password") && getIn(errors, "password") && ( 
                        <div className="flex items-center justify-start text-xs font-bold text-[#FF6969] pb-1" data-testid="error-password"> 
                            <ExclamationCircleIcon className="w-9 h-9 " />
                           <p className="px-2 leading-5">{getIn(errors, "password")} </p>
                        </div> 
                        )} 
               
        </form> 
        <Button type="submit" label={loading ? 'Please wait...' : 'Daftar sekarang'} href="../success_registration"/>  
          <div className="text-sm flex justify-center mt-2 pb-3">
              <p className="text-white font-light text-xs">
                Sudah punya akun? <a className="font-semibold underline text-[#FEC868]" href="../login">Masuk</a>
              </p>
          </div>
      </div> 
    </main> 
    </NoAuthProvider>  
  ); 
}; 
 
export default RegistrationContainer;