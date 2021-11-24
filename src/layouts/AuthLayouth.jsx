import React from 'react'
import { Outlet } from 'react-router'

const AuthLayouth = () => {
    return (
        <div className ='flex flex-col md:flex-row flex-no-wrap h-screen'>
            <div className =' flex min-w-full h-full'>
                <div className ='w-full h-full overflow-y-scroll'>
                    Layout de Autenticación
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default AuthLayouth
