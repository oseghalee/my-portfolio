import React, { useEffect } from 'react'
import Coming from '../../component/Coming'
import Cta from '../../component/Cta'
const Index = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  },[]);
  return (
    <div className='min-h-screen'>
      <Coming/>
      <Cta />
    </div>
  )
}

export default Index