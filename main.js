import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-dRQrlXlD2KKs75v3cCSUsvgh",
    apiKey: ProcessingInstruction.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();