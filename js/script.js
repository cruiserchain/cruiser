'use strict'

$(function () {
  var urlBase = 'http://localhost:8080'
  var addUrl = urlBase + '/api/invoke'
  var searchUrl = urlBase + '/api/query'
  var ownerChangeUrl = urlBase + '/api/changeowner'
  $('#add_vin').val(makeid())

  // Add Vehicle Form
  $('#addVehicle').submit(function (e) {
    e.preventDefault()
    var values = $(this).serialize()
    $(this).addClass('loading')
    $.ajax({
      type: 'POST',
      url: addUrl,
      data: values,
      success: function (data) {
        window.location.href = 'addvehicle.html'
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
    var data = []
    data.push($('#search_vin').val())
    $.ajax({
      type: 'POST',
      url: searchUrl,
      data: {func: 'queryCar', user: 'John', data: data},
      success: function (data) {
        var item = data.res

        var html = '<div class="ui fluid green segment"> \
        <table class="ui very basic celled table"> \
        <tr> \
        <td>VIN</td> \
        <td>' + item.VIN + '</td> \
        </tr> \
        <tr> \
        <td>Make</td> \
        <td>' + item.make + '</td> \
        </tr> \
        <tr> \
        <td>Model</td> \
        <td>' + item.model + '</td> \
        </tr> \
        <tr> \
        <td>Year</td> \
        <td>' + item.year + '</td> \
        </tr> \
        <tr> \
        <td>Plate</td> \
        <td>' + item.plate + '</td> \
        </tr> \
        <tr> \
        <td>Engine</td> \
        <td>' + item.engine + '</td> \
        </tr> \
        </table> \
        </div>\
        <div class="ui fluid red segment">\
        <table class="ui very basic celled table">\
        <tr>\
        <td>Owner</td>\
        <td>' + item.owner + '</td>\
        </tr>\
        </table>\
        </div>'

        $('.live_result').html(html)

        $('.results').css('display', 'block')
        $(this).trigger('reset')
      }
    })
  })

  $('#changeOwnerBtn').click(function () {
    $('#changeOwnerFrm').css('display', 'block')

  })
})

function makeid () {
  var text = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  for (var i = 0; i < 16; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return text
}
