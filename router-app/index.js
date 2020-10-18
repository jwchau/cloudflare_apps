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

async function handleRequest(req) {
    const r = new Router()

    // root route and links route
    r.get('/links', req => handler(req))

    r.get('/', () => new Response('Hello worker!')) // return a default message for the root route
    // r.get('/', () => new Response('Hello worker!')) // return static html page on root

    const resp = await r.route(req)
    return resp
}
