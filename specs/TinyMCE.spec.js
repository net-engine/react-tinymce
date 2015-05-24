require('./helper');

var container = document.createElement('div')

describe('react-tinymce', function () {
  it('should render', function () {
    var component = React.render(<TinyMCE />, container)
    equal(!!component, true)
  });
});
