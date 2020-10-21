// Link Object
class Link {
  constructor(name, url) {
    this.name = name
    this.url = url
  }

  static zip(names, urls) {
    if (names.length !== urls.length) return []

    const linkObjects = []
    for (let i = 0; i < names.length; i++) {
      linkObjects.push(new Link(names[i], urls[i]))
    }

    return linkObjects
  }

  toString() {
    return this.name + ' => ' + this.url
  }
}

// social seed
let names = [
  'Worker',
  'LinkedIn',
  'Personal Site',
  'Github',
]
let urls = [
  'https://links-app.jwchau.workers.dev/',
  'https://linkedin.com/in/jwchau',
  'https://john-chau.com',
  'https://github.com/jwchau',
]
const socials = Link.zip(names, urls)


// sample seed
names = [
  'A sample URL',
  'Another sample URL',
  'A final sample URL',
]
urls = [
  'https://asampleurl.com',
  'https://anothersampleurl.com',
  'https://afinalsampleurl.com',
]
const samples = Link.zip(names, urls)

module.exports = {
  socials,
  samples,
}