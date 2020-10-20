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

    // fetch static page
    const html = fetch('https://static-links-page.signalnerve.workers.dev')

    r.get('/', () => new Response(html, {
        headers: {
            "content-type": "text/html"
        }
    }))

    const resp = await r.route(req)
    return resp
}
