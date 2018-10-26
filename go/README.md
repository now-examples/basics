# go

In this example we will be deploying a static html file that navigates to a GoLang function that displays the current date on the server.

### Getting started with GoLang

- Create a `index.html` file with the following HTML code:

```
<a href="/date.go">Get date</a>
```

- Create a `date.go` file with the following GoLang code:

```
package main

import (
	"fmt"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, fmt.Sprintf("The date is %s", time.Now().Format(time.RFC3339)))
}
```

### Deploy with Now

First we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use @now/go to build and deploy the date.go file. By default all other files will be statically served.

```
{
    "version": 2,
    "builds": [
        { "src": "*.go", "use": "@now/go" }
    ]
}
```

We are now ready to deploy the app.

```
now
```