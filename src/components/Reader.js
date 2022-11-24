import React,{useState,useEffect} from 'react'
import QrScanner from 'qr-scanner';
import load from './load.gif';
function Reader() {
    /* use states */
  /* strated useState used to identify the scanning is started */
  const [started,setStarted]=useState(false)
  
  const [resultTxt,setResultTxt]=useState([""])
  /* When qr code get an result */
  let done=(result,qrScanner)=>{
    setResultTxt([result,...resultTxt])
    console.log(resultTxt)
    console.log(resultTxt.length!=1)
   
    /* setButton(<button className='p-2 m-2 rounded primary-bg secondary-text' onClick={()=>qrScanner.stop()}>Stop</button>) */

  }
  /* starting the scan */
let scan=()=>{
setStarted(true)
setButton("")
  let video=document.getElementById("qr")
  const qrScanner = new QrScanner(
    video,
    result => done(result,qrScanner),
    // No options provided. This will use the old api and is deprecated in the current version until next major version.
    );
    qrScanner.start()
}
/* to change scannow button to scanning when scan started */
const [button,setButton]=useState( <button className='p-2 m-40 z-10 rounded primary-bg secondary-text' onClick={scan}>Scan Now</button>)
  console.log(load)
useEffect(()=>{
  console.log(resultTxt)
})

return (
    <div>
      <div className='container  w-full h-full mx-auto text-center'>
        <h1 className='text-xl font-mono my-4'>QR Scanner</h1>
        <div className=''>
        <img className="absolute w-3/4 mx-11 my-11 z-10" src={load} alt="load"></img>
      <video id="qr" className='  md:w-2/4 md:h-full    mx-auto'  ></video>
    </div>
    
   
    <div className='w-full absolute font-semibold text-sm overflow-x-scroll bottom-0 bg-gray-200'>
     {resultTxt.length!=1?resultTxt.map((r)=>{
return (
<h1 className='my-4'>{r}</h1>
)
     }):resultTxt[0]}
    </div>
    {button}
</div>
    </div>
  )
}
export default Reader