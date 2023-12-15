import { useState } from 'react'
import './App.css'
function App() {
  const [input,setInput]=useState('')
  const [result,setResult]=useState('')
  const [small,setSamll]=useState()
  const clicked=(value)=>{
    if (value === '=') {
      try {
        setResult(eval(input));
        setSamll({fontSize:'22px',color:'gray'})
      } catch (error) {
        setResult('Error');
      }
    } 
    else if (value === 'Ac') {
      setInput('');
      setResult('');
      setSamll();
    }
    else if(value=='clear'){
      setInput((value)=>value.slice(0,-1))
    }
     else {
      setInput((prevInput) => prevInput + value);
    }
  }
  return (
    <>
     <div className='w-full h-screen bg-black flex justify-center items-center '>
      <div className='w-96  bg-violet-500 flex flex-col items-center px-5 py-5'>
        <div className='flex h-20 flex-col justify-end bg-white w-full rounded-xl'>
        <input placeholder='0' style={small} value={input} className='text-3xl w-full outline-none text-end rounded-xl pe-3' type="text" name="" id="" />
        <div className='text-end text-3xl pe-3'>{result}</div>
        </div>
        <div className=' w-full flex justify-between mt-5'>
          <button onClick={()=>clicked('Ac')} className='border-2 rounded-xl w-[5rem] h-16'>Ac</button>
          <button onClick={()=>clicked('clear')} className='border-2 rounded-xl w-[5rem] h-16'><i class="fa-solid fa-delete-left"></i></button>
          <button onClick={()=>clicked('%')} className='border-2 rounded-xl w-[5rem] h-16'>%</button>
          <button onClick={()=>clicked('/')} className='border-2 rounded-xl w-[5rem] h-16 bg-orange-400'>/</button>
        </div>
        <div className=' w-full flex justify-between mt-2'>
          <button onClick={()=>clicked('7')} className='border-2 rounded-xl w-[5rem] h-16'>7</button>
          <button onClick={()=>clicked('8')} className='border-2 rounded-xl w-[5rem] h-16'>8</button>
          <button onClick={()=>clicked('9')} className='border-2 rounded-xl w-[5rem] h-16'>9</button>
          <button onClick={()=>clicked('*')} className='border-2 rounded-xl w-[5rem] h-16 bg-orange-400'>X</button>
        </div>
        <div className=' w-full flex justify-between mt-2'>
          <button onClick={()=>clicked('4')} className='border-2 rounded-xl w-[5rem] h-16'>4</button>
          <button onClick={()=>clicked('5')} className='border-2 rounded-xl w-[5rem] h-16'>5</button>
          <button onClick={()=>clicked('6')} className='border-2 rounded-xl w-[5rem] h-16'>6</button>
          <button onClick={()=>clicked('-')} className='border-2 rounded-xl w-[5rem] h-16 bg-orange-400'>-</button>
        </div>
        <div className='w-full flex justify-between mt-2'>
          <button onClick={()=>clicked('1')} className='border-2 rounded-xl w-[5rem] h-16'>1</button>
          <button onClick={()=>clicked('2')} className='border-2 rounded-xl w-[5rem] h-16'>2</button>
          <button onClick={()=>clicked('3')} className='border-2 rounded-xl w-[5rem] h-16'>3</button>
          <button onClick={()=>clicked('+')} className='border-2 rounded-xl w-[5rem] h-16 bg-orange-400'>+</button>
        </div>
        <div className=' w-full flex justify-between mt-2'>
          <button onClick={()=>clicked('0')} className='border-2 rounded-xl w-[5rem] h-16'>0</button>
          <button onClick={()=>clicked('.')} className='border-2 rounded-xl w-[5rem] h-16'>.</button>
          <button onClick={()=>clicked('=')} className='border-2 rounded-xl w-[10rem] h-16 bg-green-400'>=</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
