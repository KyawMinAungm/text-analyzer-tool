import './index.scss'
interface Props {
  result : {
    words : number,
    characters :number,
    sentences :number,
    paragraph :number,
    pronoun : number,
    
  }
}
const ResultBox = ({result}:Props) => {
  const resultBar = [
    {
      title: 'Words',
      value: result.words,
    },
    {
      title: 'Characters',
      value: result.characters,
    },
    {
      title: 'Sentences',
      value: result.sentences,
    },
    {
      title: 'Paragraphs ',
      value: result.paragraph,
    },
    {
      title: 'Pronouns',
      value: result.pronoun,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
