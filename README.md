# Project Overview
This n8n workflow is designed to automate the process of scraping public data from Instagram business profiles and leveraging Artificial Intelligence to provide a unique "IG Score" – a sentiment-informed overall rating of the profile's public presence. The workflow fetches the 12 most recent posts without requiring a login, extracts key statistics (captions, likes, comments, timestamps), and then presents this information, along with an AI-generated score, in a readable format.

![image alt](https://github.com/arin-balyan1/instagram_scrapper/blob/85c1feeec4a36e6bf34ded07acaac7d27a71387a/workflow.png)

# Features
1.Instagram Data Scraper: Automatically scrapes the 12 most recent posts (images/videos) from a given Instagram business page URL or handle.

2.Detailed Post Information: Extracts and displays the image/video URLs, caption snippets, like counts, comment counts, and exact posting timestamps for each of the 12 posts.

3.Readable Output: Presents the collected data and AI analysis in a clear, easy-to-read format (e.g., HTML, Markdown).

4.Bonus #1: 3×4 Grid Layout: The 12 post thumbnails are laid out in a neat 3×4 grid, mimicking an Instagram-style gallery.

5.Bonus #2: AI-Powered "IG Score": Integrates a low-cost AI model to generate a "sentiment-informed overall rating" (the "IG Score") for the profile, along with a concise explanation.

6.Bonus #3: One-Click n8n Cloud Import: The workflow is designed for seamless import and execution in an n8n 1.0+ cloud environment, requiring minimal setup beyond API keys.

# Setup Instructions
To get this n8n workflow up and running, follow these steps:


# Prerequisites

1.n8n Instance (1.0+): You need access to an n8n instance (local, desktop, or cloud). This workflow has been developed and tested on n8n version 1.0+.

2.Google Cloud API Key (for IG Score bonus): To utilize the AI-powered "IG Score" feature, you'll need a Google Cloud API key with the Generative Language API enabled.

   ->If you don't have one, sign up at console.cloud.google.com.

   ->Create a new project or select an existing one.

   ->Enable the "Generative Language API" for your project.

   ->Navigate to "APIs & Services" > "Credentials" and create a new "API Key".

   ->Restrict your API key to only the Generative Language API and specific IP addresses/websites for security.

# Workflow Import
1.Download the Workflow JSON: Obtain the workflow file (e.g., Arin_Balyan-instagram-scraper-workflow.json).

2.Import into n8n:

 ->Open your n8n editor.

 ->In the top left, click "File" or the + icon, then select "Import from JSON".

 ->Paste the content of the downloaded JSON file or upload the file directly.

 ->Click "Import Workflow".

 # Environment Variables & Credentials
1.Google Cloud API Key Setup:

  ->In your n8n instance, go to "Credentials" (usually found on the left sidebar).

  ->Click "New Credential".

  ->Search for and select "Google Cloud API".

  ->Credential Name: Enter a descriptive name, e.g., Instagram_Gemini_Rating_Key.

  ->API Key: Paste your Google Cloud API secret key into the designated field.

  ->Click "Save".
  2.Connect Credential to Node:

   ->Go back to your imported workflow.

   ->Locate the "AI Agent" (Google Gemini) node.

   ->In the node's settings, under "Credential," select the Google Cloud credential you just created (Instagram_Gemini_Rating_Key).

# How to Run the Workflow
1.Activate Workflow: Ensure the workflow is activated (toggle "Active" to ON in the top right corner).

2.Provide Input (Instagram Handle/URL):

  ->The workflow starts with a "When clicking 'Test workflow'" trigger or a "Webhook" node.

  ->You will typically provide the Instagram profile's handle (e.g., @nike) or full URL (e.g., https://instagram.com/nike) as input to the initial HTTP Request node or a preceding "Set" node if you've configured      it that way. Look for the username parameter or the URL field.

3.Execute Workflow:

   ->Click the "Execute Workflow" button (or the "Test workflow" button if debugging).

   ->Alternatively, if configured with a Webhook, trigger the webhook URL.

4.View Output:

   ->Once the workflow completes, inspect the output of the final "HTML Readable Format" node (or your chosen output node). This node will display the 12 Instagram posts in a 3×4 grid and the AI-generated "IG          Score" and its explanation.

   ->During testing, you can click on individual nodes to inspect their "Output" and "JSON" data to track the data flow.

   # AI Integration: "IG Score" Methodology & Cost
1. Google's gemini-2.0-flash model is used in this automation.

# Methodology for "IG Score" Calculation  
The AI assesses the profile based on three key criteria:

1. Overall Consistency: Evaluates if the posts maintain a consistent theme, brand voice, or content style.

2. Engagement Potential: Assesses how well the content is likely to resonate with the audience, considering factors like caption quality and interaction metrics (likes, comments).

3. Professionalism: Judges the overall presentation, tone, and quality of the content from a professional standpoint.

Based on this analysis, the AI generates a numerical "IG Score" from 1 to 10 (1 being poor, 10 being excellent) and provides a brief, two-sentence explanation justifying the score, highlighting strengths or areas for improvement.

# Cost Considerations
1.Gemini 2.0 Flash Pricing (Text Input): The pricing for gemini-2.0-flash for text input is currently around $0.10 per million input tokens.This makes it an extremely economical option for text analysis tasks like sentiment scoring.The gpt-3.5-turbo openai model which require the $0.50 per million input tokens which is 5 times the price of gemini.

2.Cost-Effectiveness for This Project: The "IG Score" task, which involves processing captions and engagement metrics for sentiment-informed analysis, does not require the full power (and higher cost) of larger models. Both gemini-2.0-flash and gpt-3.5-turbo are excellent choices in terms of performance-to-cost ratio for this specific application. gemini-2.0-flash provides a very attractive price point for the required text processing.So the gemini-2.0-flash is the best one according to price.

# Output Format
The final output of the workflow is presented as an HTML page (or similar readable format) that includes:

1. 3×4 Grid: The 12 scraped Instagram posts are displayed in a visually appealing 3×4 grid layout, with each thumbnail clickable (linking back to the original Instagram post URL).

2.Post Details: Below or alongside each thumbnail, a snippet of the caption, likes, and comments is shown.

3.IG Score: The AI-generated "IG Score" and its explanation are prominently displayed at the top or bottom of the output, providing a quick summary of the profile's evaluation.
