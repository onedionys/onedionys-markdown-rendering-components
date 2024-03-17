const assert = require('assert');
const { renderMarkdown } = require('../src/markdownRenderer');

describe('Markdown Rendering Components', function() {
    describe('#renderMarkdown()', function() {
        it('should render Markdown content into HTML', function() {
            const markdownContent = "# Hello\n\nThis is **Markdown** content.";
            const expectedHTML = "<h1>Hello</h1>\n<p>This is <strong>Markdown</strong> content.</p>\n";
            const renderedHTML = renderMarkdown(markdownContent);
            assert.strictEqual(renderedHTML, expectedHTML);
        });
    });
});
