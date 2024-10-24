'use client'

import React, { useState } from 'react'
import { SignInFlow } from '../types'

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>('signIn')

  return (
    <div className="h-full flex items-center justify-center bg-[#5C3B58]">
      Auth screen
    </div>
  )
}

export default AuthScreen
