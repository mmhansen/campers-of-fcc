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
  let page = parseInt(req.query.page) || 1
  let limit = parseInt(req.body.limit) || 20

  Story
    .find({ status: 'Approved' })
    .sort('-date')
    .skip(limit * (page-1))
    .limit(limit)
    .populate('postedBy')
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
