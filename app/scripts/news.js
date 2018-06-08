import $ from 'jquery'
import * as _ from 'underscore'

import * as cheerio from 'cheerio'
import * as moment from 'moment'

function appendDom (link, contentText, titleText, dateText, nameText, index) {
  var newsItemGroup = $('#new-item-group-row')
  var newsItemContainer = $('<div>', { class: 'col-lg-4' })
  var newsItem = $('<div>', { class: 'item' })
  var title = $('<span>', { class: 'title' })
  var titleDecoBlock = $('<div>', { class: 'title-deco-block' })
  var description = $('<p>', { class: 'description block-with-text' })
  description.text(contentText)
  var name = $('<p>', { class: 'name-date' })
  var readMore = $('<a>', { class: 'read-more', href: link, target: '_blank' })

  if (index % 3 === 0) {
    title.addClass('red-title')
    titleDecoBlock.addClass('red-block')
  } else if (index % 3 === 1) {
    title.addClass('yellow-title')
    titleDecoBlock.addClass('yellow-block')
  } else if (index % 3 === 2) {
    title.addClass('green-title')
    titleDecoBlock.addClass('green-block')
  }

  title.text(titleText)
  name.text(nameText + ' - ' + dateText)
  newsItem.append(titleDecoBlock)
  newsItem.append(title)
  newsItem.append(name)
  newsItem.append(description)
  readMore.append(newsItem)
  newsItemContainer.append(readMore)
  newsItemGroup.append(newsItemContainer)
}

function appendEmptyDom () {
  var githubItemGroup = $('#new-item-group')
  githubItemGroup.append('<p>Not existed yet.</p>')
}

function addSessionStorage (sessionStorageobject) {
  if (typeof (Storage) !== 'undefined') {
    sessionStorage.setItem('mediumItems', JSON.stringify(sessionStorageobject))
  }
}

function getDataFromSessionStorage () {
  if (typeof (Storage) !== 'undefined') {
    var mediumItemString = sessionStorage.getItem('mediumItems')

    if (mediumItemString) {
      return JSON.parse(mediumItemString)
    } else {
      return {}
    }
  }
  return {}
}

async function getMedium () {
  let sessionStorageData = getDataFromSessionStorage()
  if (sessionStorageData.data && sessionStorageData.data.length > 0 && moment().format('YYYY-MM-DD') === sessionStorageData.date) {
    _.each(sessionStorageData.data, (d, index) => {
      appendDom(d.link, d.content, d.title, d.date, d.name, index)
    })

    $('#spinner').hide()
    return
  }

  try {
    let codechainHTML = await $.get('https://cors-anywhere.herokuapp.com/medium.com/codechain')
    const c$ = cheerio.load(codechainHTML)
    var aContents = c$('a[data-post-id]')
    var dateContents = c$('time[datetime]')
    var nameContnets = c$('a[data-user-id]')
    var sessionStorageobject = {
      data: [],
      date: moment().format('YYYY-MM-DD')
    }
    if (aContents.length > 0) {
      aContents.each((index, element) => {
        let link = c$(element).attr('href')
        let title = c$(element).find('h3').text()
        let content = c$(element).children('div').text()
        let date = dateContents.eq(index).text()
        let name = nameContnets.eq(index * 2 + 1).text()
        sessionStorageobject.data.push({
          name: name,
          date: date,
          title: title,
          link: link,
          content: content
        })
        appendDom(link, content, title, date, name, index)
      })
    } else {
      appendEmptyDom()
    }
    addSessionStorage(sessionStorageobject)
  } catch (error) {
    appendEmptyDom()
  }

  $('#spinner').hide()
}

getMedium()
