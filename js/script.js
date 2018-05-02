'use strict'

$(function () {
  console.log('k')
  var urlBase = 'http://localhost'
  var addUrl = urlBase + '/api/invoke'
  var searchUrl = urlBase + '/api/query'
  var ownerChangeUrl = urlBase + '/api/changeowner'

  // Add Vehicle Form
  $('#addVehicle').submit(function (e) {
    e.preventDefault()
    $.ajax({
      type: 'POST',
      url: addUrl,
      data: {},
      success: function () {
        $(this).trigger('reset')
      }
    })
  })

  // Change Owner
  $('#changeOwnerFrm').submit(function (e) {
    e.preventDefault()
    $.ajax({
      type: 'POST',
      url: ownerChangeUrl,
      data: {},
      success: function () {
        $(this).trigger('reset')
      }
    })
  })

  // Search
  $('#searchForm').submit(function (e) {
    e.preventDefault()
    $.ajax({
      type: 'POST',
      url: searchUrl,
      data: {},
      success: function () {
        $(this).trigger('reset')
      }
    })
  })
})
