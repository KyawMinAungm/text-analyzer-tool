import { useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { pronouns } from './data/pronouns'
import { ifError } from 'assert'

const App = () => {
  const [interedText, setinteredText] = useState("")
  const wordsArray = interedText.split(/[ \n]+/)
  const words = wordsArray.filter((word) => word !== '').length
  const charactersArray = interedText.split('')
  const characters = charactersArray.length
 const paragraphArray = interedText.split('\n').filter(para => para !== '')
 

  let sentences ;
  if (charactersArray.length) {
    const sentenceArray  = wordsArray.filter(word => word.includes(".") || word.includes("!") || word.includes("?"))
    if (sentenceArray.length){
     sentences = sentenceArray.length;
    }else{
      sentences = 1;
    }
  }else {
     sentences = 0
  }


  let paragraph ;
  if (charactersArray.length) {
    paragraph = paragraphArray.length

  }
  else {
    paragraph = 0
  }
  console.log(wordsArray)
const pronounArray  = wordsArray.filter(w => pronouns.includes(w.toLowerCase()))
console.log(pronounArray)
const pronoun = pronounArray.length

let readingTime ;
if (charactersArray.length) {

  const readTime = Math.ceil(words/225)
  
  readingTime = `~ ${readTime} ${readTime <= 1 ? "minute" : "minutes"}`
}else {
  readingTime = "-"
}

const longestWord = wordsArray.reduce((longest , currentWord) => currentWord.length > longest.length ? currentWord : longest );

  
  const result = { words, characters, sentences,paragraph,pronoun }
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox result={result} />
          <TextArea setInteredText={setinteredText} />
          <BottomResultBox readingTime={readingTime} longestWord={longestWord} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
