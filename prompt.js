const postsData = [];
for (const item of $input.all()) {
    postsData.push({
        caption: item.json.caption,
        likes: item.json.likes,
        comments: item.json.comments
    });
}

let inputDataSection = "";
postsData.forEach((post, index) => {
    const escapedCaption = post.caption ? post.caption.replace(/`/g, '\\`') : '';
    const postLikes = post.likes !== null && post.likes !== undefined ? post.likes : 'N/A';
    const postComments = post.comments !== null && post.comments !== undefined ? post.comments : 'N/A';

    inputDataSection += `Post ${index + 1}:\n`;
    inputDataSection += `Caption: "${escapedCaption}"\n`;
    inputDataSection += `Likes: ${postLikes}\n`;
    inputDataSection += `Comments: ${postComments}\n\n`;
});

const fullPrompt = `You are an expert social media analyst specializing in Instagram profile evaluation. Your task is to provide a comprehensive 'IG Score' (a sentiment-informed overall rating) for a given Instagram profile.

**Input Data:**
Here are the details from the 12 most recent Instagram posts from the profile:

${inputDataSection}

**Task:**
1.  **Assess Overall Consistency, Engagement Potential, and Professionalism:** Based on the content and tone of the captions, and considering the engagement metrics (likes and comments) for each post, evaluate the profile's overall consistency in messaging, its potential to engage its audience, and the level of professionalism conveyed.
2.  **Calculate the 'IG Score':** Provide a numerical rating from 1 to 10, where 1 is poor and 10 is excellent. This score should primarily reflect the profile's overall consistency, engagement potential, and professionalism.
3.  **Provide a Concise Explanation:** Include a brief, concise explanation (maximum 2 sentences) justifying the rating. Highlight key strengths or areas for improvement related to the mentioned criteria (consistency, engagement, professionalism).

**OUTPUT FORMAT**
Please provide your response in the following format:
For each Post[1] to Post[2]....tell me all the 12 posts IG score one by one
IG Score: [Numerical score from 1-10]
Explanation: [Concise explanation, max 2 sentences]

This will not be shown to the user but is for internal use.`;

return [{
    json: {
        aiPromptText: fullPrompt
    }
}];