//------------------------ [ modules ] ---------------------------
const express = require('express');
const router = express.Router()



//------------------------ [ Imports Model ] ---------------------------------
const Post = require('../models/postModels')




// ---------------------------  [  Routers   ] ---------------------------------



// GET BACK ALL THE POST
router.get("/", async (req, res) => {

          try {
                    const posts = await Post.find()
                    res.json(posts)
          } catch (error) {
                    res.json({ message: error })
          }
})



// SUMMIT A POST
router.post("/", async (req, res) => {

          const { title, description } = req.body;

          const post = new Post({
                    title: title,
                    description: description
          })
          try {
                    const savedPost = await post.save()
                    res.json({ message: savedPost })
          } catch (error) {
                    res.json({ message: error })
          }

          res.send("We Got your Data")
})



// SPECIFIC POST
router.get("/:postId", async (req, res) => {

          try {
                    const post = await Post.findById(req.params.postId)
                    res.json(post)
          } catch (error) {
                    res.json({ message: error })
          }
})



// DELETE POST
router.delete("/:postId", async (req, res) => {

          try {
                    const removedPost = await Post.deleteOne({ _id: req.params.postId })
                    res.json(removedPost)
          } catch (error) {
                    res.json({ message: error })
          }

})


// UPDATE POST
router.patch("/:postId", async (req, res) => {

          try {
                    const updatedPost = await Post.updateOne({ _id: req.params.postId }, {
                              $set: { title: req.body.title }
                    })
                    res.json(updatedPost)

          } catch (error) {
                    res.json({ message: error })
          }

})


/* ------------------------ [ module export ] ---------------------------------*/
module.exports = router;