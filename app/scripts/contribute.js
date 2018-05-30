import $ from 'jquery'
import * as memont from 'moment'

function appendDom (issue) {
  var githubItemGroup = $('#github-item-group')
  var githubItem = $('<div>', { class: 'github-item' })
  var githubItemIcon = $('<div>', { class: 'github-item-icon' })
  githubItemIcon.append($('<i>', { class: 'fa fa-check-circle-o fa-2x', 'aria-hidden': true }))
  var githubItemTitle = $('<a>', { class: 'github-item-title', href: issue.html_url, target: '_blank' })
  githubItemTitle.text(issue.title)
  var githubItemDescription = $('<div>', { class: 'github-item-description' })
  var dateString = memont(issue.created_at).format('DD MMM, YYYY')
  githubItemDescription.text('#' + issue.number + ' opened ' + dateString)
  githubItem.append(githubItemIcon)
  githubItem.append(githubItemTitle)
  githubItem.append(githubItemDescription)
  githubItemGroup.append(githubItem)
}

function appendEmptyDom () {
  var githubItemGroup = $('#github-item-group')
  githubItemGroup.append('<p>Not existed yet.</p>')
}

async function getIssue () {
  let result
  try {
    result = await $.get('https://api.github.com/repos/paritytech/parity/issues?labels=P0-dropeverything')
    if (result.length > 0) {
      var count = Math.min(result.length, 10)
      for (var i = 0; i < count; i++) {
        appendDom(result[i])
      }
    } else {
      appendEmptyDom()
    }
  } catch (error) {
    appendEmptyDom()
  }
}

getIssue()
