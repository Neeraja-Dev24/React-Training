import React from 'react'
import Child from './child';

function Parent() {
  return (
    <div>
         <Child greetings={"Hi From Parent"}/>
    </div>
  )
}

export default Parent;