(function () {
  var data = {
    '001': ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'Heading 5'],
    '002': ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5'],
  };

  var element = document.querySelector('[data-id]');
  var dataId = element.getAttribute('data-id');
  var headings = data[dataId];

  if (headings) {
    var ulElement = document.createElement('ul');

    headings.forEach(function (heading) {
      var liElement = document.createElement('li');
      liElement.textContent = heading;
      ulElement.appendChild(liElement);
    });

    while (element.firstChild) {
      element.firstChild.remove();
    }

    element.appendChild(ulElement);
  }
})();
