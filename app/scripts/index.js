import './../styles/common.scss'
import './../styles/main.scss'
import './../styles/header.scss'
import './../styles/footer.scss'

// import js
import 'bootstrap'

if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}
