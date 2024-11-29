require('dotenv').config();

const runtime = new RuntimeClient({
  apiKey: process.env.VOICEFLOW_API_KEY,
  versionID: process.env.VOICEFLOW_VERSION_ID
}); 