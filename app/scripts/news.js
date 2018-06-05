import $ from 'jquery'
// import * as _ from 'underscore'

function appendDom (item) {
  var newsItemGroup = $('#new-item-group-row')
  var newsItemContainer = $('<div>', { class: 'col-lg-6' })
  var newsItem = $('<div>', { class: 'item' })
  var title = $('<p>', { class: 'title' })
  var description = $('<p>', { class: 'description block-with-text' })
  var cleanDescription = item.description.replace(/<\/?[^>]+(>|$)/g, '')
  description.text(cleanDescription)
  var name = $('<p>', { class: 'name-date' })
  var readMore = $('<a>', { class: 'read-more', href: item.link, target: '_blank' })
  readMore.text('Read more')

  title.text(item.title)
  name.text(item.author + ' - ' + item.pubDate)
  newsItem.append(title)
  newsItem.append(name)
  newsItem.append(description)
  newsItem.append(readMore)
  newsItemContainer.append(newsItem)
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
      rss_url: 'https://medium.com/feed/codechain?limit=100'
    })
    if (result && result.items && result.items.length > 0) {
      var items = result.items
      // var filteredItem = _.filter(items, (item) => {
      //   return _.contains(item.categories, 'chaincode')
      // })
      // var count = Math.min(filteredItem.length, 3)
      var count = Math.min(items.length, 6)
      for (var i = 0; i < count; i++) {
        appendDom(items[i])
      }
    } else {
      appendEmptyDom()
    }
  } catch (error) {
    appendEmptyDom()
  }
}

getMedium()
