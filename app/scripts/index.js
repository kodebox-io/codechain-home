import './../styles/common.scss'
import './../styles/main.scss'
import './../styles/download.scss'
import './../styles/contribute.scss'
import './../styles/documents.scss'
import './../styles/about.scss'
import './../styles/header.scss'
import './../styles/footer.scss'

// import js
import 'bootstrap'

if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}
