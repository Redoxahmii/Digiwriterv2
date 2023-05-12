import { Configuration, OpenAIApi } from "openai"

const Openai = ({ prompt, onComplete, temperature, max_tokens, top_p, frequency_penalty, presence_penalty, stop }) => {
    const configuration = new Configuration({
        apiKey: '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',
    })
    const openai = new OpenAIApi(configuration)
    const completion = async () => {
        const params = {
            prompt: prompt,
            temperature: parseInt(temperature),
            max_tokens: parseInt(max_tokens),
            model: 'text-davinci-003',
        }
        if (stop) {
            params.stop = stop
        }
        if (top_p) {
            params.top_p = parseInt(top_p)
        }
        if (frequency_penalty) {
            params.frequency_penalty = parseInt(frequency_penalty)
        }
        if (presence_penalty) {
            params.presence_penalty = parseInt(presence_penalty)
        }
        const gptResponse = await openai.createCompletion(params)
        onComplete(gptResponse)
    }
    const handleClick = () => {
        completion()
    }
    return handleClick
}

export default Openai