const Router = require('./router')
const links = require('./assets/links')

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

function handler(request) {
    const init = {
        headers: { 'content-type': 'application/json' },
    }
    const body = JSON.stringify({ some: 'json' })
    return new Response(body, init)
}

function linkHandler(req) {
    const init = {
        headers: { 'content-type': 'application/json' },
    }
    const body = JSON.stringify(links)
    return new Response(body, init)
}

async function handleRequest(request) {
    const r = new Router()
    // Replace with the appropriate paths and handlers
    // r.get('.*/bar', () => new Response('responding for /bar'))
    // r.get('.*/foo', request => handler(request))
    // r.post('.*/foo.*', request => handler(request))
    // r.get('/demos/router/foo', request => fetch(request)) // return the response from the origin

    // root route and links route
    r.get('/links', req => linkHandler(req))
    r.get('/', () => new Response('Hello worker!')) // return a default message for the root route

    // r.get('/', () => new Response('Hello worker!')) // return static html page on root

    const resp = await r.route(request)
    return resp
}
