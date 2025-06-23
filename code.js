const responseData = items[0].json;
let extractedPosts = [];
const timelineMediaEdges = responseData.data.user.edge_owner_to_timeline_media.edges;

for (let i = 0; i < Math.min(timelineMediaEdges.length, 12); i++) {
    const postNode = timelineMediaEdges[i].node;

    let caption = '';
    if (postNode.edge_media_to_caption && postNode.edge_media_to_caption.edges.length > 0) {
        caption = postNode.edge_media_to_caption.edges[0].node.text;
    }

    const instagramPostUrl = `https://www.instagram.com/p/${postNode.shortcode}/`;

    let mediaUrl = '';
    let isVideo = postNode.is_video;
    if (isVideo) {
        mediaUrl = postNode.video_url;
    } else {
        mediaUrl = postNode.display_url;
    }

    const likes = postNode.edge_media_preview_like ? postNode.edge_media_preview_like.count : 0;
    const comments = postNode.edge_media_to_comment ? postNode.edge_media_to_comment.count : 0;
    const postedAtTimestamp = postNode.taken_at_timestamp;
    const postedAtDate = new Date(postedAtTimestamp * 1000).toISOString();

    extractedPosts.push({
        id: postNode.id,
        shortcode: postNode.shortcode,
        instagramPostUrl: instagramPostUrl,
        type: isVideo ? 'video' : 'image',
        mediaUrl: mediaUrl,
        caption: caption,
        likes: likes,
        comments: comments,
        postedAtTimestamp: postedAtTimestamp,
        postedAtDate: postedAtDate
    });
}
return extractedPosts.map(post => ({ json: post }));