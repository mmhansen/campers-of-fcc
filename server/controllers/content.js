/*
 * Dependencies
 */
import jwt from 'jwt-simple'
import Story from '../models/PostModel'
import config from '../conf/main'
import moment from 'moment'

/*
 * Submit Stories
 */
export function submitContent(req, res, next) {
  console.log(req.body)
  let { name, title, body, image, postedBy } = req.body;
  let newStory = new Story ({ name, title, body, image, postedBy })
  newStory.save(newStory, (err, story) => {
    if (err) { next(err) }
    res.status(201).json({
      story: story
    })
  })
}

/*
 * Get Stories
 */
export function getContent (req, res, next){
  let limit = req.params.page || 10   // handle req.params.page being null
  Story
    .find({ role: 'Approved' }) // get all stories
    .sort() // reverse date -> newest first
    .limit(10) // return only 10
    .exec((err, storyArr) => {
    if (err) { return next(err); }
    res.status(200).json({
      content: storyArr
    });
  })
}

/*
 * Approve Story
 */
export function approveContent (req, res, next){
  let story = req.params.id;
  // approve story with given ID
  Story.update({ id: story }, { $set: { role: 'Approved' }}, { new: true }, (err, updatedStory) => {
    if (err) { return next(err); }
    res.status(200).json({
      update: 'success'
    })
  })
}

/*
 * Remove Story
 */
export function deleteContent (req, res, next){
  let story = req.params.id;
  // remove story with given ID
  Story.remove({ id: story }, (err) => {
    if (err) { return next(err); }
    res.status(200).json({
      delete: 'success'
    })
  })
}
