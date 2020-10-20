const Router = require('./router')
const links = require('./assets/links')

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

function handler(req) {
    const init = {
        headers: { 'content-type': 'application/json' },
    }
    const body = JSON.stringify(links)
    return new Response(body, init)
}

const {html, styles} = require('./public/root')

class LinksTransformer {
    constructor(links) {
      this.links = links
    }
    
    async element(element) {
      // Your code
    }
  }

const urlRewriter = {
    element: (element) => {
        element.setAttribute('href', 'https://workers.cloudflare.com')
        element.setInnerContent('Return to Cloudflare Workers')
    },
}  

async function handleRequest(req) {
    const url = req.url
    console.log(url)
    const r = new Router()

    // root route and links route
    r.get('/links', req => handler(req))

    // import stylesheet
    r.get('/styles', () => new Response(styles, {
        headers: {
            "content-type": "text/css"
        }
    }))

    // return static html page on root
    r.get('/', () => new Response(html, {
        headers: {
            "content-type": "text/html;charset=UTF-8"
        }
    }))

    const rewriter = new HTMLRewriter()
        .on('#link_1', urlRewriter)

    const resp = await r.route(req)
    return rewriter.transform(resp)
}
