const Router = require('./router')
const {socials, samples} = require('./assets/links')

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

class linksInserter {
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
        element.setAttribute('src', this.dest)
        element.setInnerContent(this.desc)
    }
}

class imageInserter {
    constructor(dest, desc) {
        this.dest = dest
        this.desc = desc
    }

    element(element) {
        element.append(
            `<img id='avatar' src="${this.dest}">${this.desc}</a>`, {html: true}
        )
    }
}

class h1Rewriter {
    constructor(content) {
        this.content = content
    }

    element(element) {
        element.setInnerContent(this.content)
    }
}

class removeStyle {
    element(element) {
        element.removeAttribute('style')
    }
}

// #FEFCBF, #FAF089

async function handleRequest(req) {
    const r = new Router()

    // root route and links route
    r.get('/links', req => handler(req))
    r.get('/', () => fetch('https://static-links-page.signalnerve.workers.dev'))

    const rewriter = new HTMLRewriter()
        .on('div#links', new linksInserter(samples))
        .on('div#profile', new removeStyle())
        .on('img#avatar', new imageRewriter('https://john-chau.com/face.png', 'Me'))
        .on('h1#name', new h1Rewriter('John Chau'))
        .on('div#social', new removeStyle())
        .on('div#social', new linksInserter(socials))
        
        // .on('div#profile', new imageInserter('./assets/img/face.png', 'Me'))
        

    const resp = await r.route(req)
    return rewriter.transform(resp)
}
