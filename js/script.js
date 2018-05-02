'use strict'

$(function () {
  console.log('k')
  var urlBase = 'http://localhost:8080'
  var addUrl = urlBase + '/api/invoke'
  var searchUrl = urlBase + '/api/query'
  var ownerChangeUrl = urlBase + '/api/changeowner'

  // Add Vehicle Form
  $('#addVehicle').submit(function (e) {
    e.preventDefault()
    var values = $(this).serialize()
    console.log(values)
    $.ajax({
      type: 'POST',
      url: addUrl,
      data: values,
      beforeSend: function () {
        console.log('beforeSend')
      },
      success: function (data) {
        console.log('success')
        console.log(data)
        // $(this).trigger('reset')
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
        $('.results').css('display': 'block')
        $(this).trigger('reset')
      }
    })
  })
})
