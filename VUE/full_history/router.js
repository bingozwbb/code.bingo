class Router {
    //路由的配置
    constructor(options) {
      this.routes = {} // k
      this.init()
      this.bindEvent()
      options.forEach(item => {
        this.route(item.path, ()=>{
          document.getElementById('content').innerHTML = item.component
        })
      })
    }
    init () {
      window.addEventListener('load', this.updatedView.bind(this))
      window.addEventListener('popstate', this.updatedView.bind(this))
    }
    updatedView() {
      const currentUrl = window.location.pathname || '/'
      this.routes[currentUrl] && this.routes[currentUrl]()
    }
    bindEvent () {
      const _this = this;
      const links = document.getElementsByTagName('a');
      [].forEach.call(links, link => {
        link.addEventListener('click', function() {
          const url = this.getAttribute('data-href')
          _this.push(url)
        })
      })
    }
    push(url) {
      //进入浏览器history 栈
      window.history.pushState({}, null, url)
      this.updatedView()
    }
    route(path, cb) {
      this.routes[path] = cb
    }
  }
  