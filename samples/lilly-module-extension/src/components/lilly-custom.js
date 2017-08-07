export default function (widget) {

  // Whenever the size of this document changes we adjust the size of
  // the IFrame in the Contentful App.
  widget.window.startAutoResizer()

  var metaData = widget.entry.getSys()
  var dropdown = widget.field;

  ratingChanged(dropdown.getValue())

  // When the user selects a different option from the dropdown we
  // update the entry field
  $('#rating').on('input', function () {
    dropdown.setValue(parseInt(this.value))
    $('#current-rating').html(this.value)
  })

  // When the user clicks the button, we get all entries with the
  // same rating and show them in a list.
  $('#entries > button').on('click', function () {
    var button = $(this)

    button.addClass('is-loading')
    getEntriesWithSameRating()
    .then(renderEntries)
    .then(function () {
      button.removeClass('is-loading')
    })
  })

  // Get a list of entries that have the same content type and same
  // value in the current field.
  //
  // Makes a request to the Contentful CMA using the Widget API
  function getEntriesWithSameRating () {
    var query = {
      'content_type': metaData.contentType.sys.id,
      'sys.id[ne]': metaData.id
    }
    query['fields.' + dropdown.id] = dropdown.getValue()

    return widget.space.getEntries(query)
  }

  function ratingChanged (value) {
    if (value == null) {
      $('#current-rating').html('<em>unknown</em>')
      $('select').val('')
    } else {
      $('#current-rating').html(value)
      $('select').val(value)
    }
  }


  // Populates the #entries-list with as to the entries.
  // If 'entries' is an empty array we show a message.
  function renderEntries (entries) {
    if (entries.items.length) {
      var content = entries.items.map(renderEntry)
    } else {
      content = '<li><em>no entries found</em></li>'
    }
    $('ul#entries-list').html(content)
  }

  function renderEntry (entry) {
    var url = entryURL(entry)

    return '<li><a target="_blank" href="' + url + '">' + url + '</a></li>'
  }

  function entryURL (entry) {
    var id = entry.sys.id
    var space = entry.sys.space.sys.id

    return 'https://app.contentful.com/spaces/' + space + '/entries/' + id
  }
}
