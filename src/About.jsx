import React from 'react';
import Common from './Common';


const About = () => {
  const resetEmail = () =>{
    alert('email sent');
  }
  return (
    <>
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Common 
        text_bel_img='Redefinir a senha'
        visit='/contact'
        textbvisit='Você receberá um e-mail com instruções para redefinir a senha'
        />
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form action="post" className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <label className="block text-sm font-medium leading-5 mb-1 text-gray-700"> E-mail</label>
          <div>
            <input type="text" className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"/>
          </div>
          <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out" onClick={resetEmail}>
                Redefinir senha
                </button>
              </span>
          </div> 
        </form>
      </div>
    </div>
    </>
  )
}
export default About;