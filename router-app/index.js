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

const html = require('./public/root')
async function handleRequest(req) {
    const url = req.url
    console.log(url)
    const r = new Router()

    // root route and links route
    r.get('/links', req => handler(req))

    // return a default message for the root route
    r.get('/', () => new Response('Hello worker!')) 

    // return static html page on root
    r.get('/html', () => new Response(html, {
        headers: {
            "content-type": "text/html;charset=UTF-8"
        }
    }))

    const resp = await r.route(req)
    return resp
}
