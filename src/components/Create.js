import React, { useRef,useState } from 'react'
import QrCreator from 'qr-creator'
import icon from "./icon.png"
function Create() {
  const [downloadbtn, setdownloadbtn] = useState("");
  const txt=useRef()
  const img=useRef()
    let get=()=>{

    QrCreator.render(
        {
            text:txt.current.value,
            radius:1.0,
            ecLevel:'H',
            fill:"",
            background:"white",
            size:128
        },
        document.querySelector('#qr-code')
    )
console.log(img.current.toDataURL())
setdownloadbtn(
  <div className='mx-auto w-1/2'>
  <a href={img.current.toDataURL()} className="bg-red-400  text-white  px-6 py-3" download="qrcode">Download</a>
</div>
)
  }
  return (
    <div className='font-["Poppins"]'>
        <div>
                <h1 className='text-xl flex items-center gap-2 justify-center font-semibold my-4'>
          <img src={icon} className='w-8'/>
          Create QR Code</h1>
          </div>
          <div className=' mt-28 w-1/2'>
          <div className='grid w-full gap-6   mx-6'>
            <input ref={txt} type="text" className='focus:border-b-2  transition duration-[1000ms] focus:border-b-black focus:outline-none' placeholder='Your Text or URL'/>
          <button className='bg-blue-500 px-6 p-2 text-white ' onClick={()=>get()}>Get</button>
          </div>
          <canvas ref={img} className='my-11 mx-auto' id="qr-code">

          </canvas>
{downloadbtn}
          </div>
    </div>
  )
}

export default Create