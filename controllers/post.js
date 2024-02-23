
/**
 * Gets all the posts
 * @param {http request} req 
 * @param {http responste} res 
 */
const getAllPosts = (req, res) => {
    res.send('app get post')};


 /**
 * create new post
 * @param {http request} req 
 * @param {http responste} res 
 */
const createNewPost = (req, res) => {
    res.send('app post post')};


module.exports = {getAllPosts
    , createNewPost};