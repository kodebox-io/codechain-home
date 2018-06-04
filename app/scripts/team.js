import $ from 'jquery'
// import * as memont from 'moment'

function appendDom (name, organization) {
  var contributorButton = $('#contributor-button')
  var contributorItem = $('<div>', { class: 'contributor-item' })
  var nameObject = $('<div>', { class: 'name' })
  var nameObjectLink = $('<a>', { href: name.html_url, target: '_blank' })
  nameObjectLink.text(name.login)
  nameObject.append(nameObjectLink)

  var organizationObject = $('<div>', { class: 'team-name' })
  organizationObject.text(organization.login)

  contributorItem.append(nameObject)
  contributorItem.append(organizationObject)
  contributorItem.insertBefore(contributorButton)
}

function appendEmptyDom () {
  var githubItemGroup = $('#contributor-item-group')
  githubItemGroup.append('<p>Not existed yet.</p>')
}

async function getIssue () {
  try {
    let result = await $.get('https://api.github.com/repos/paritytech/parity/contributors')
    if (result.length > 0) {
      for (var i = 0; i < result.length; i++) {
        let organization = ''
        if (result[i].organizations_url !== '') {
          let organizationResult = await $.get(result[i].organizations_url)
          if (organizationResult.length > 0) {
            organization = organizationResult[0]
          }
        }
        appendDom(result[i], organization)
      }
    } else {
      appendEmptyDom()
    }
  } catch (error) {
    appendEmptyDom()
  }
}

getIssue()
