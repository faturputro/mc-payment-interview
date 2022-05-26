export default class View {
  constructor() {}

  setTitle(title) {
    document.title = title
  }
  render() {
    document.querySelector('#app').innerHTML = 'hehe'
  }
}