import './../styles/common.scss'
import './../styles/main.scss'
import './../styles/download.scss'
import './../styles/contribute.scss'
import './../styles/documents.scss'
import './../styles/header.scss'
import './../styles/footer.scss'
import './../styles/team.scss'
import './../styles/document-container.scss'

// import js
import 'bootstrap'
import 'babel-polyfill'

if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}
