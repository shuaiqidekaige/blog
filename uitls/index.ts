import MarkdownIt from 'markdown-it'
import MarkdownItAnchor from 'markdown-it-anchor'
import hljs from 'highlight.js'
import { Menu } from '../types/index'

function transformMd(str: string) {
  const md = new MarkdownIt({
    html: true,
    typographer: true,
    highlight(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs"><code>' +
            hljs.highlight(str, { language: lang, ignoreIllegals: true })
              .value +
            '</code></pre>'
          )
        } catch (__) {}
      }

      return (
        '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
      )
    },
  }) as MarkdownIt
  md.use(MarkdownItAnchor)
  return md.render(str)
}

function generatorMenu({ level, text, id, children }: Menu) {
  return {
    level,
    text,
    id,
    children,
  }
}

function TransformTreeMenu(domStr: string) {
  const reg = /<h(\d)(.+?)>(.+?)<\/h\d>/g
  const regId = /(\s*)id="(.+?)"/
  let match = reg.exec(domStr)
  const trees = []
  while (match) {
    const level = match[1]
    const props = match[2] as string
    const text = match[3]
    const matchId = props.match(regId)
    const id = matchId ? matchId[2] : null
    trees.push(generatorMenu({ text, level, id, children: [] }))
    match = reg.exec(domStr)
  }
  return trees
}

function generatorTreeMenu(domStr: string) {
  const trees = TransformTreeMenu(domStr)
  const resolveTrees = [] as Menu[]

  const resolveChildren = (childTree: Menu, trees: Menu[]) => {
    const { level } = childTree
    const lastTree = trees[Math.max(0, trees.length - 1)]
    const lastTreeChildren = lastTree.children.length > 0 ? lastTree.children[Math.max(0, lastTree.children.length - 1)] : null
    if (lastTreeChildren) {
      if (level > lastTreeChildren.level) {
        resolveChildren(childTree, lastTree.children)
      } else {
        lastTree.children.push(childTree)
      }
    } else {
      lastTree.children.push(childTree)
    }
  }

  trees.forEach((tree) => {
    const { level } = tree
    if (resolveTrees.length === 0) {
      resolveTrees.push(tree)
    } else if (level === '1') {
      resolveTrees.push(tree)
    } else {
      resolveChildren(tree, resolveTrees)
    }
  })
  return resolveTrees
}

export { transformMd, generatorTreeMenu }
