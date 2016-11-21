import bodyParser from 'body-parser'
import logger from 'morgan'
import responses from './responses'
import cors from 'cors'

export default (app) => {
  const options = {
     origin: 'http://localhost:8080/',
  }
  app.use(cors(options))
  // logger
  if(process.env.NODE_ENV != 'test') {
    app.use(logger('dev'))
  }
  // body parser
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  // responses
  app.use(responses)
}
