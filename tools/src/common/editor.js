import editorConfig from './config'

class Editor {

  constructor(customConfig) {
    const defaultConfig = {
      editorSelector: 'body'
    }
    this.editorConfig = editorConfig    // 编辑器功能配置
    this.defaultConfig = defaultConfig  // 编辑器默认配置
    this.customConfig = customConfig    // 用户自定义配置
    this.config = Object.assign({}, editorConfig, defaultConfig, customConfig)
    this.init()
    return this
  }

  // 初始化工作
  init() {
    // DOM相关
    const { editorSelector } = this.config
    const edEl = document.querySelector(editorSelector)
    const randomId = Math.random().toString().slice(2)
    
    // 创建toolbar元素
    const tbEl = document.createElement('div')
    const tbId = `toolbar-${randomId}`
    tbEl.setAttribute('id', tbId)
    tbEl.setAttribute('class', 'editor-toolbar')
    edEl.append(tbEl)

    // 创建content元素
    const ctEl = document.createElement('div')
    const ctId = `content-${randomId}`
    ctEl.setAttribute('id', ctId)
    ctEl.setAttribute('class', 'editor-content')
    ctEl.setAttribute('contenteditable', true)
    edEl.append(ctEl)

    // 监听事件
    let compositionEnd = true
    edEl.addEventListener('compositionstart', () => {
      // 输入法开始输入
      compositionEnd = false
    })
    edEl.addEventListener('compositionend', () => {
      // 输入法结束输入
      compositionEnd = true
    })

    this.dom = {
      toolbar: {
        id: tbId,
        element: tbEl
      },
      content: {
        id: ctId,
        element: ctEl
      }
    }

    this.state = {
      compositionEnd
    }
  }

}

export default Editor