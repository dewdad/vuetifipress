const container = require('markdown-it-container')

module.exports = {
  extendMarkdown: md => {
    md.use(...createContainer('attention', 'ATTENTION'))
  }
}

function createContainer (klass, defaultTitle) {
  return [container, klass, {
    render (tokens, idx) {
      const token = tokens[idx]
      const info = token.info.trim().slice(klass.length).trim()
      if (token.nesting === 1) {
        return `<div class="${klass} custom-block"><p class="custom-block-title">${info || defaultTitle}</p>\n`
      } else {
        return `</div>\n`
      }
    }
  }]
}
