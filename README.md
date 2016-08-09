# chrismcclellan (A sails.js app)

## Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [mongodb](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/): `brew install mongodb`

## Installation

Navigate to your code directory (or wherever your dev directory is)
```
cd ~\code
```

Clone the repository to your local dev environment
```bash
git clone git@github.com:chrismcclellan/chrismcclellan.git
```

## Development

Navigate to your newly cloned repository
```bash
cd chrismcclellan
```

While working on your project, run the following commands:

In one shell(tab)
```bash
mongod
```

In another shell(tab)
```bash
npm start
```

## Usage

If you visit http://localhost:1337 in your browser, you'll see a homepage.

If you visit http://localhost:1337/api/v1/posts in your browser, you'll see a WebSocket-compatible post API.
