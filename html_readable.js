let htmlOutput = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram Posts</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background-color: #f0f2f5; }
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* 3 columns for 3x4 grid */
            gap: 20px;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .post-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            background-color: #fff;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
        }
        .post-media {
            width: 100%;
            height: 0;
            padding-bottom: 125%; /* For 4:5 aspect ratio, common for IG vertical posts */
            position: relative;
            overflow: hidden;
            background-color: #eee; /* Placeholder background */
        }
        .post-media img, .post-media video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover; /* Ensures media fills the container without distortion */
        }
        .post-details {
            padding: 10px;
            font-size: 0.9em;
            color: #333;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .post-caption {
            margin-bottom: 5px;
            line-height: 1.4;
        }
        .post-stats {
            display: flex;
            justify-content: space-between;
            font-size: 0.85em;
            color: #555;
            margin-top: auto; /* Pushes stats to the bottom */
            padding-top: 5px;
            border-top: 1px solid #eee;
        }
        .post-stats span {
            display: flex;
            align-items: center;
        }
        .post-stats img {
            width: 16px;
            height: 16px;
            margin-right: 5px;
        }
        .profile-header {
            text-align: center;
            margin-bottom: 30px;
        }
        .profile-header h1 {
            font-size: 2em;
            color: #333;
        }
        .profile-header p {
            color: #666;
        }
    </style>
</head>
<body>
    <div class="grid-container">
`;

// Loop through the items 
for (const item of items) {
    const post = item.json;
    const mediaTag = post.type === 'video'
        ? `<video controls preload="none" poster="${post.mediaUrl.replace('.mp4', '.jpg')}" src="${post.mediaUrl}"></video>`
        : `<img src="${post.mediaUrl}" alt="Instagram Post">`;

    htmlOutput += `
        <div class="post-card">
            <div class="post-media">
                ${mediaTag}
            </div>
            <div class="post-details">
                <p class="post-caption">${post.caption.substring(0, 100)}...</p>
                <div class="post-stats">
                    <span>❤️ ${post.likes}</span>
                    <span>💬 ${post.comments}</span>
                    <span>${new Date(post.postedAtTimestamp * 1000).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    `;
}

htmlOutput += `
    </div>
</body>
</html>
`;

return [{ json: { html: htmlOutput } }];