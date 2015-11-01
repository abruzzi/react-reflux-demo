### React + Reflux Demo

This application is about `bookmarks` listing.

The `Reflux` way is pretty simple:

1.  `Store` is used for listen `Action` and fetch the data back from server
2.  When `Action` occurs, `Store` is changed (and the `state` of a component is updated), then `Component` is `re-rendered`

To run it, simply:

```sh
$ git clone git@github.com:abruzzi/react-reflux-demo.git
$ npm install
$ gulp
$ python -m SimpleHTTPServer 8899
```

and then launch the browser to view the `bookmark` list.