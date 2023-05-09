import { Configuration, OpenAIApi } from "openai"

const Openai = ({ prompt, onComplete }) => {
    const configuration = new Configuration({
        apiKey: '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',
    })
    const openai = new OpenAIApi(configuration)
    const completion = async () => {
        const gptResponse = await openai.createCompletion({
            prompt: prompt,
            temperature: 0.4,
            max_tokens: 3000,
            model: 'text-davinci-003'
        })
        onComplete(gptResponse)
    }
    const handleClick = () => {
        completion()
    }
    return handleClick
}

export default Openai