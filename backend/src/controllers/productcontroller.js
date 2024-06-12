


get("/posts", async (req, res) => {
	const posts = await Post.find()
	res.send(posts)
})