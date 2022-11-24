import React,{useState,useEffect} from 'react'
import QrScanner from 'qr-scanner';
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
const [button,setButton]=useState( <button className='p-2 m-2 rounded primary-bg secondary-text' onClick={scan}>Scan Now</button>)
  
useEffect(()=>{
  console.log(resultTxt)
})
return (
    <div>
      <div className='container w-3/4 h-2/4 mx-auto text-center'>
        <h1 className='text-xl font-mono my-6'>QR Scanner</h1>
        <div className='h-11 overflow-hidden'>
      <video id="qr" className=' rounded-md md:w-2/4 md:h-full    mx-auto'  ></video>
    </div>

    <div className='w-full font-semibold text-sm overflow-x-scroll mx-auto my-12 bg-gray-200'>
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