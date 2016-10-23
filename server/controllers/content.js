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
 * Get count of stories
 */
 export function getCount(req, res, next) {
   Story.count({ status: "Approved" }, (err, count) => {
     if (err) next(err)
     res.json({
       count
     })
   })
 }


/*
 * Approve Story
 */
export function approveContent (req, res, next){
  let story = req.params.id;
  // approve story with given ID
  Story.update({ id: story }, { $set: { status: 'Approved' }}, { new: true }, (err, updatedStory) => {
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


/*
 * Get stories for approving
 * Only returns 20 most recent
 */
export function reviewStories (req, res, next) {
  Story
    .find({ status: 'Pending' })
    .sort('-date')
    .limit(20)
    .populate('postedBy')
    .exec((err, storyArr) => {
    if (err) { return next(err); }
    res.status(200).json({
      content: storyArr
    });
  })
}
