import $ from 'jquery'
// import * as _ from 'underscore'

import * as cheerio from 'cheerio'

function appendDom (link, contentText, titleText, dateText, nameText) {
  var newsItemGroup = $('#new-item-group-row')
  var newsItemContainer = $('<div>', { class: 'col-lg-6' })
  var newsItem = $('<div>', { class: 'item' })
  var title = $('<p>', { class: 'title' })
  var description = $('<p>', { class: 'description block-with-text' })
  description.text(contentText)
  var name = $('<p>', { class: 'name-date' })
  var readMore = $('<a>', { class: 'read-more', href: link, target: '_blank' })
  readMore.text('Read more')

  title.text(titleText)
  name.text(nameText + ' - ' + dateText)
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
  try {
    let codechainHTML = await $.get('https://cors-anywhere.herokuapp.com/medium.com/codechain')
    const c$ = cheerio.load(codechainHTML)
    var aContents = c$('a[data-post-id]')
    var dateContents = c$('time[datetime]')
    var nameContnets = c$('a[data-user-id]')
    if (aContents.length > 0) {
      aContents.each((index, element) => {
        let link = c$(element).attr('href')
        let title = c$(element).find('h3').text()
        let content = c$(element).children('div').text()
        let date = dateContents.eq(index).text()
        let name = nameContnets.eq(index * 2 + 1).text()
        appendDom(link, content, title, date, name)
      })
    } else {
      appendEmptyDom()
    }
  } catch (error) {
    appendEmptyDom()
  }
}

getMedium()
