const Router = require('./router')
const {links, samples} = require('./assets/links')

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

class LinksTransformer {
    constructor(links) {
        this.urls = links
    }

    async element(element) {
        for (let i = 0; i < this.urls.length; i++) {
            element.append(`<a href="${this.urls[i].url}">${this.urls[i].name}</a>`, { html: true })
        }
    }
}


class imageRewriter {
    constructor(dest, desc) {
        this.dest = dest
        this.desc = desc
    }

    element(element) {
        element.setAttribute('src', dest)
        element.setInnerContent(desc)
    }
}

async function handleRequest(req) {
    const r = new Router()

    // root route and links route
    r.get('/links', req => handler(req))
    r.get('/', () => fetch('https://static-links-page.signalnerve.workers.dev'))

    const rewriter = new HTMLRewriter()
        .on('div#links', new LinksTransformer(samples))
        // .on('img', imageRewriter)

    const resp = await r.route(req)
    return rewriter.transform(resp)
}
