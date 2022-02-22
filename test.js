const url = "https://www.youtube.com/watch?v=Inl1vmPWV_Q"
const youtube_id = url.split('=')[1]
const thumbnail = `https://img.youtube.com/vi/${youtube_id}/0.jpg`

console.log(thumbnail)