# React Node Webpack Mongodb

## Why
**Redux**

I'm really a fan of this implementation of flux for state management. The main principles of having:
- a single store
- state being read-only (you have to express an intent to mutate being creating actions)
- mutations written as pure functions

## Instructions

### Prerequisites

**Install MongoDB as your database**:

```bash
# Update brew formulae
brew update
# Install MongoDB
brew install mongodb
```

**Setup your mongoDB directory**

Note: Make sure you have the directory and its permissions setup (i.e. `/data/db`):
```bash
sudo mkdir -p /data/db
sudo chown -R `id -u` /data/db
```

**Run your mongoDB server**
```bash
mongod
```

### Build & Dev

**Installation**
```bash
# Install node modules - this includes those for production and development
# You only need to do this once :)
npm install
```

**Development**

```bash
# Starts the server with Hot Reloading
# Run webpack through webpack.config.dev.js
npm run dev

```

**Production**

Run the commands below for a production build

```bash
# Clean public folder
# Run webpack through webpack.config.prod.js
npm run build

# Start server
## Note: You need MongoDB running
npm start
```



