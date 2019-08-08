const app = require('./app.js')
require('env2')('config.env')

const port = process.env.PORT || 5555
app.listen(port, () => {
  console.log(`Our app is running on http://localhost:${port}`)
})
