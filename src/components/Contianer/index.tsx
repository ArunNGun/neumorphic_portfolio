import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Container = (props:any) => {
  return ( <div style={{ width: "100%", maxWidth: "1240px", margin: "0 auto", padding: "20px" }}>
    {props.children}
  </div> );
}
 
export default Container;