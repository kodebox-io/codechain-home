import $ from 'jquery'
import * as _ from 'underscore'

function appendDom (item) {
  var newsItemGroup = $('#new-item-group-row')
  var newsItemContainer = $('<div>', { class: 'col-lg-4' })
  var newsItemLink = $('<a>', { href: item.link, target: '_blank' })
  var newsItem = $('<div>', { class: 'item' })
  var mainImgContainer = $('<div>', { class: 'img-container' })
  var mainImg = $('<img>', { src: item.thumbnail })
  var title = $('<p>', { class: 'title' })
  var description = $('<p>', { class: 'description' })
  // var cleanDescription = item.description.replace(/<\/?[^>]+(>|$)/g, '')

  var name = $('<p>', { class: 'name' })
  var time = $('<p>', { class: 'time' })

  title.text(item.title)
  description.text('CodeChain')
  name.text(item.author)
  time.text(item.pubDate)
  mainImgContainer.append(mainImg)
  newsItem.append(mainImgContainer)
  newsItem.append(title)
  newsItem.append(description)
  newsItem.append(name)
  newsItem.append(time)
  newsItemLink.append(newsItem)
  newsItemContainer.append(newsItemLink)
  newsItemGroup.append(newsItemContainer)
}

function appendEmptyDom () {
  var githubItemGroup = $('#new-item-group')
  githubItemGroup.append('<p>Not existed yet.</p>')
}

async function getMedium () {
  let result
  try {
    result = await $.get('https://api.rss2json.com/v1/api.json', {
      rss_url: 'https://medium.com/feed/codechain'
    })
    if (result && result.items && result.items.length > 0) {
      var items = result.items
      var filteredItem = _.filter(items, (item) => {
        return _.contains(item.categories, 'chaincode')
      })
      var count = Math.min(filteredItem.length, 3)
      for (var i = 0; i < count; i++) {
        appendDom(filteredItem[i])
      }
    } else {
      appendEmptyDom()
    }
  } catch (error) {
    appendEmptyDom()
  }
}

getMedium()
