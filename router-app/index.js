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

const urlRewriter = {
    element: (element) => {
        element.setAttribute('href', 'https://workers.cloudflare.com')
        element.setInnerContent('Return to Cloudflare Workers')
    },
}

async function handleRequest(req) {
    const r = new Router()

    // root route and links route
    r.get('/links', req => handler(req))
    r.get('/', () => fetch('https://static-links-page.signalnerve.workers.dev'))



    console.log('request finish')
    const resp = await r.route(req)
    return resp
}
