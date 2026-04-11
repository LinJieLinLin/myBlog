;(function () {
  console.log('extra load!')
  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'k') {
      document.querySelector('.search-form-wrap').classList.add('on')
      document.getElementById('local-search-input').focus()
    }
  })
  const loadFile = (argUrl, argType = 'js', argOptions = {}) => {
    let temId = argType + '-' + argUrl.split('/').pop()
    let head = globalThis.document.getElementsByTagName('head')[0]
    let nodeTag
    if (!argOptions.disCheck) {
      let checkTag = globalThis.document.getElementById(temId)
      if (checkTag) {
        if (argOptions.force) {
          head.removeChild(checkTag)
        } else {
          return Promise.resolve({ msg: '已存在，中断加载！' })
        }
      }
    }
    switch (argType) {
      case 'css':
        nodeTag = globalThis.document.createElement('link')
        nodeTag.type = 'text/css'
        nodeTag.rel = 'stylesheet'
        nodeTag.href = argUrl
        break
      case 'js':
        nodeTag = globalThis.document.createElement('script')
        nodeTag.src = argUrl
        nodeTag.type = 'text/javascript'
        break
      default:
        console.error('暂不支持：' + argType)
        return Promise.reject({ msg: '暂不支持：' + argType })
    }
    nodeTag.id = temId
    head.appendChild(nodeTag)
    return new Promise((resolve) => {
      if (nodeTag.readyState) {
        nodeTag.onreadystatechange = function () {
          if (nodeTag.readyState === 'complete') {
            nodeTag.onreadystatechange = null
            return resolve(argUrl)
          }
        }
      } else {
        // Others
        nodeTag.onload = function () {
          return resolve(argUrl)
        }
      }
    })
  }
  const getInfo = () => {
    let ua = (globalThis.navigator.userAgent || '').toLowerCase()
    let platform = (
      globalThis.navigator.userAgentData.platform || ''
    ).toLowerCase()
    let info = {
      ua: ua,
      platform: platform,
      isMobile: !!ua.match(/mobile/),
      isWin: !!platform.match('win'),
      isIphone: !!ua.match(/iphone/),
      isIpad: !!ua.match(/ipad/),
      isMac: !!platform.match('mac'),
      isIos: !!platform.match('ios'),
      isAndroid: !!platform.match('android'),
      isSafari: ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 1,
      isIE: 'ActiveXObject' in globalThis,
      ieVersion: 0,
      isAppleMobile: false,
      isWeixin: !!ua.match(/MicroMessenger/i),
      isAlipay: !!ua.match(/Alipay/i),
    }
    if (info.ua.match('msie')) {
      let IE = info.ua.match(/msie\s([0-9]*)/)
      if (IE && IE.length >= 2) {
        info.ieVersion = +IE[1]
      }
    }
    info.isAppleMobile = !!(
      info.isMobile &&
      ua.toLowerCase().indexOf('applewebkit') &&
      ua.indexOf('chrome') < 1
    )
    return info
  }
  if (!getInfo().isMobile) {
    loadFile('/myBlog/css/extra.css', 'css')
  }
})()
