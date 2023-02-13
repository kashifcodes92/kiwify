import React from 'react';
import Common from './Common';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { signUpSchema } from './schemas';

const initialValues = {
    email:"",
    confirm_email:"",
    password:""
};
const Registration = ()=>{
    const Formik = useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values) =>{
         console.log(" ~file:Registration.jsx ~ line 11 ~ Registration ~ values", values);
        },
    });
    console.log(" ~file:Registration.jsx ~ line 11 ~ Registration ~ values", Formik);
};

const Home = () => {
  return (
  <>
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Common 
        text_bel_img='Entrar na sua conta'
        textbvisit='Ou '
        visit='/contact'
        visit_text=' fazer cadastro'
        />
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form action="post" className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <label className="block text-sm font-medium leading-5 mb-1 text-gray-700" name='f_email'> E-mail</label>
          <div>
            <input type="text" className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"/>
          </div>
          <div className="mt-6">
            <label for="password" className="block text-sm font-medium leading-5 text-gray-700">
                Senha
            </label>
          </div>
          <div>
                <input type="password"autocomplete="current-password"name="password"
                className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"/>
          </div>
          <div className="mt-2 flex items-center justify-end">
                <div className="text-sm leading-5">
                  <NavLink to={"/about"}className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    Esqueceu a senha?
                  </NavLink>
                </div>
          </div> 
          <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Entrar
                </button>
              </span>
          </div> 
        </form>
      </div>
    </div>
  </>
  )
}
export default Home;