function Objectify(...arr) {
  if (arr.length < 2 && arr[0].length !== arr[1].length) return []

  const pojos = []
  for (let i = 0; i < arr[0].length; i++) {
    const curr = {}
    for (let j = 0; j < arr.length; j++) {
      if (j === 0) curr['name'] = arr[j][i]
      else if (j === 1) curr['url'] = arr[j][i]
      else if (j === 2) curr['svg'] = arr[j][i]
    }
    pojos.push({...curr})
  }

  return pojos
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
let svgs = [
  './assets/icons/cloudflare.svg',
  './assets/icons/linkedin.svg',
  './assets/icons/smile.svg',
  './assets/icons/github.svg',
]
const socials = Objectify(names, urls, svgs)


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
const samples = Objectify(names, urls)

module.exports = {
  socials,
  samples,
}