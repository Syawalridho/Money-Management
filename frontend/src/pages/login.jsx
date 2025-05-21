import React from 'react'
import fon from "../images/fon.jpg"

const Login = () => {
    return (
        <div className='text-white h-[100vh] flex justify-center items-center bg-cover bg-no-repeat ' style={{ backgroundImage: `url('${fon}')` }}>

            <div>
                <div className='flex-row bg-lime-400 bg-opacity-45 p-10  rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl'>

                    <h1 className='p-2 text-center pb-8 font-sans text-xl'>Loginga hush kelibsiz</h1>

                    <form action="" className='grid grid-row-3 gap-4'>
                        <input className='p-2 focus:outline-none text-gray-700' type="text" placeholder='name' />
                        <input className='p-2 focus:outline-none text-gray-700' type="text" placeholder='number' />
                        <button className='bg-green-800  rounded-xl p-2  hover:bg-blue-500 hover:text-orange-50'>Kirish</button>
                    </form>

                </div>
            </div>
        </div >
    )
}

export default Login