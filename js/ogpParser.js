function getContents(url) {
  return new Promise(function(resolve, reject) {
    jQuery.ajax({
      url: url,
      type: 'GET',
      success: function(data) { console.log('successed: ' + data)},
      error: function(data) { console.log('failed: ' + data)}
    });
  });
}

function ogpParser(url) {
  return getContents(url)
    .then(function(html){
      let data = parseHtml(html);
      return Promise.resolve(data);
    });
}
