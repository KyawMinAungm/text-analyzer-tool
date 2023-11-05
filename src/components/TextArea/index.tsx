import { ChangeEvent, ReactHTML, ReactHTMLElement, ReactNode } from 'react'
import './index.scss'

interface Props {
  setInteredText : (e:string) => void; 
}


const TextArea = ({setInteredText}:Props) => {
  const handelChange = (e :any)=> {setInteredText(e.target.value)
    
  }
  return <textarea onChange={e => handelChange(e)}  autoFocus className="text-area" placeholder="Paste your text here..." />
}

export default TextArea
