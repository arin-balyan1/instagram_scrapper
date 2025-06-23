##Project Overview
This n8n workflow is designed to automate the process of scraping public data from Instagram business profiles and leveraging Artificial Intelligence to provide a unique "IG Score" – a sentiment-informed overall rating of the profile's public presence. The workflow fetches the 12 most recent posts without requiring a login, extracts key statistics (captions, likes, comments, timestamps), and then presents this information, along with an AI-generated score, in a readable format.

##Features
1.Instagram Data Scraper: Automatically scrapes the 12 most recent posts (images/videos) from a given Instagram business page URL or handle.

2.Detailed Post Information: Extracts and displays the image/video URLs, caption snippets, like counts, comment counts, and exact posting timestamps for each of the 12 posts.

3.Readable Output: Presents the collected data and AI analysis in a clear, easy-to-read format (e.g., HTML, Markdown).

4.Bonus #1: 3×4 Grid Layout: The 12 post thumbnails are laid out in a neat 3×4 grid, mimicking an Instagram-style gallery.

5.Bonus #2: AI-Powered "IG Score": Integrates a low-cost AI model to generate a "sentiment-informed overall rating" (the "IG Score") for the profile, along with a concise explanation.

6.Bonus #3: One-Click n8n Cloud Import: The workflow is designed for seamless import and execution in an n8n 1.0+ cloud environment, requiring minimal setup beyond API keys.

##Setup Instructions
To get this n8n workflow up and running, follow these steps:


##Prerequisites

1.n8n Instance (1.0+): You need access to an n8n instance (local, desktop, or cloud). This workflow has been developed and tested on n8n version 1.0+.

2.Google Cloud API Key (for IG Score bonus): To utilize the AI-powered "IG Score" feature, you'll need a Google Cloud API key with the Generative Language API enabled.

   ->If you don't have one, sign up at console.cloud.google.com.

   ->Create a new project or select an existing one.

   ->Enable the "Generative Language API" for your project.

   ->Navigate to "APIs & Services" > "Credentials" and create a new "API Key".

   ->Restrict your API key to only the Generative Language API and specific IP addresses/websites for security.

##Workflow Import
1.Download the Workflow JSON: Obtain the workflow file (e.g., Arin_Balyan-instagram-scraper-workflow.json).

2.Import into n8n:

 ->Open your n8n editor.

 ->In the top left, click "File" or the + icon, then select "Import from JSON".

 ->Paste the content of the downloaded JSON file or upload the file directly.

 ->Click "Import Workflow".
 
