import React, { useState } from 'react'
import AuthShell from './AuthShell'
import Logo from '../../components/brand/Logo'
import Label from '../../components/common/Label'
import Input from '../../components/common/Input'
import { Eye, EyeOff } from 'lucide-react'

export default function SignIn() {
    const [formState, setFormState] = useState({
        email:"",
        password:"ABC"
    })
    const [showPw, setShowPw] = useState(false)

    const handleChange = (key, value)=>{

    }

    const onSubmit = ()=>{
        
    }
  return (
    <>
      <AuthShell>
        <div className='w-full max-w-sm'>
            <Logo />
            <h1>Sign in</h1>
            <p>
                Access your CampusFlow workspace.
            </p>
            <form onSubmit={onSubmit} className='mt-8 space-y-4'>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@school.edu"
                    value={formState.email}
                    onChange={(e)=> handleChange("email", e.target.value)}
                    />

                </div>
                <div>
                   <div className='flex items-center justify-between'>
                     <Label htmlFor="password">Password</Label>
                     <a href="/">Frogot?</a>
                   </div>
                   <div className='relative'>
                    <Input
                        id="password"
                        type={showPw ? "text": "password"}
                        placeholder="Enter your password"
                        value={formState.password}
                        onChange={(e)=> handleChange("password", e.target.value)}
                        className="pr-10"
                    />
                    <button 
                    className='absolute inset-y-0 right-0 drid w-10 place-items-center'
                    onClick={()=> setShowPw((s)=> !s)}
                    type='button'
                    >
                        {
                            showPw ? <EyeOff className='h-4 w-4'/> : <Eye className="h-4 w-4" />
                        }
                    </button>

                   </div>

                </div>
            </form>

        </div>
      </AuthShell>
    </>
  )
}
