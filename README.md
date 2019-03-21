# Next.js-Express-Demo-
LoadBalancing Next.js-Express-Apps in DockerContainer.

✴︎********* Note ******** (from https://nextjs.org)

When using a custom server with a server file, for example called server.js, make sure you update the scripts key in package.json to:

{
  "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"     <-  ("next start" => "node server.js")
  }
}
