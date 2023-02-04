// Get the info associated with each restaurant. 

const { Configuration, OpenAIApi } = require("openai");

/** Get info associated with restaurantName. */
async function getInfo(restaurantName) {
    const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPEN_AI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Give us the website, a small description, 3 most popular menu items, business hours for today, and yelp rating for ${restaurantName} in a dictionary form that we can easily convert to javascript object. Use double quotes only.`,
    max_tokens: 250,
    temperature: 0,
    });
    let textData = response.data.choices[0].text;
    console.log(textData);
    let responseObject = JSON.parse(textData);
    responseObject["name"] = restaurantName; 
    return responseObject
}
export default getInfo; 
