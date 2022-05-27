export default class View {
  constructor() {
    this.parser = new DOMParser()
  }

  setTitle(title) {
    document.title = title
  }
  render() {
    return ''
  }
  parseString(htmlString) {
    const parsed = this.parser.parseFromString(htmlString, 'text/html')
    return parsed.body.innerHTML
  }
}