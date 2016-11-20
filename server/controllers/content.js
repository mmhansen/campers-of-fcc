/*
 * Dependencies
 */
import jwt from 'jwt-simple'
import Story from '../models/PostModel'
import config from 'config'
import moment from 'moment'

/*
 * Submit Stories
 */
export function submitContent(req, res, next) {
  let { title, body, image, postedBy } = req.body;
  if (!title || !body || !image || !postedBy){
    return res
      .status(400)
      .json({"error": 'Bad Request'})
  }
  let newStory = new Story ({ title, body, image, postedBy })
  newStory.save(newStory, (err, story) => {
    if (err) { next(err) }
    //console.log(story)
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
  let limit = parseInt(req.query.limit) || 20
  let status = req.query.status || "Approved"

  Story
    .find({ status })
    .sort('-date')
    .skip(limit * (page-1))
    .limit(limit)
    .populate('postedBy')
    .exec((err, storyArr) => {
      //console.log(storyArr)
    if (err) { return next(err); }
    res.status(200).json({
      content: storyArr
    });
  })
}

/**
 *
 */
 export function getStory(req, res, next) {
   let storyId = req.params.story_id

   Story.findById(storyId)
        .populate('postedBy')
        .exec((err, story) => {
            if (err) next(err)
            if (!story) {
              next()
            }
            res.json({
              story
            })
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
  let story = req.query.id;
  // approve story with given ID
  Story.update({ _id: story }, { $set: { status: 'Approved' }}, { new: true }, (err, updatedStory) => {
    if (err) { return next(err); }
    else {
      res.status(200).json({
        update: 'success'
      })
    }
  })
}

/*
 * Remove Story
 */
export function deleteContent (req, res, next){
  let _id = req.query.id;
  // remove story with given ID
  Story.findOne({ _id }, (err, model) => {
    if (err) { return next(err); }
    model.remove((err) => {
      if (err) { return next(err); }
      else {
        res.status(200).json({
          delete: 'success'
        })
      }
    });
  })
}

/*
 * Update story
 */
export function updateContent(req, res, next) {
  let _id = req.query.id;
  let { title, body, image } = req.body;

  Story.findOneAndUpdate(
    { _id },
    { $set: { title, body, image }},
    { new: true },
    (err, story) => {
      if (err) { return next(err); }
      res
      .status(200)
      .json({ story })
    })
}


/*
 * Get just my submitted stories
 */
export function getMyStories(req, res, next) {
  let id = req.query.id;

  Story.find({ postedBy: id }, (err, story) => {
    if (err) {return next(err); }
    res
      .status(200)
      .json({ story })
  })
}
