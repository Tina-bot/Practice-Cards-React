import Form from './Form';
import { useState, useEffect } from 'react'
import Error from './Error'

const Screen = ({ words }) => {

    const [word, setWord] = useState('')
    const [points, setPoints] = useState(0)
    const [wordRandom, setWordRandom] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        setWordRandom(words[Math.floor(Math.random() * words.length)])
    }, [points])

    const handleChange = (event) => {
        setWord(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setTimeout(() =>
            setError("")
            , 2000)
        if (word.toLowerCase() === wordRandom.text || points > 3) {
            setPoints(points + 1)
            setWord("")
        }
        else {
            setError("Your answer is wrong, because " + wordRandom.symbol + " is " + wordRandom.text)
        }
        if (points === 3) {
            alert("No, You win!")
            setError("")
            setPoints(0)
            setWord("")
        }
    }

    return (
        <>
            {error.length > 1 ?
                <Error error={error} />
                : null
            }
            <section className="bg-gray-900 text-white">
                <h4> <small> Points {points}/3 </small> </h4>
                <div
                    className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:items-center"
                >
                    <div className="mx-auto max-w-3xl text-center">
                        <h1> {wordRandom.symbol} </h1>

                        <span className="sm:block">
                            <small>{wordRandom.word} </small>
                        </span>

                        <Form handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            word={word} />

                    </div>
                </div>
            </section></>
    )
}

export default Screen