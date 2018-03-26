## HTML5

### What does a doctype do?
- doctype is a declaration, not an HTML tag that instructs the browser about what version of the markup language used after the doctype
- In HTML docs, specifies the HTML version

### How do you serve a page with content in multiple languages?
- For a custom site, I'd save multiple versions of the site content on DB, then, depending on where the client is accessing the site, serve the appropriate version of the content
- Can also specify the character set in HTML head
- Considerations: Non-Latin character sets as well as languages that don't read left to right. Also, where is language reflected and can user change it?

### What are data- attributes good for?
- Used to store extra information that does not require any visual representation. Can be accessed with JS and CSS
- syntax: <span data-___="" >

### DOM Node Property vs. HTML Attribute
- Properties are keys on the DOM that produce HTML el
- Attributes are native HTML elements
- Typically, when you want to manipulate things with JavaScript, use properties instead of attributes

### New Features of HTML5
- Semantic tags
- New form els for effective inputs
- Native video and audio inputs and controls
- New JavaScript API, new Geolocation API, new Webworker API
- New localStorage and sessionStorage feature

### Storage Options
- Cookies: very small, sent with every HTTP request, only strings
- localStorage: stored indefinitely, larger space, 5MB
- sessionStorage: stored only during the current session, 5MB

### Script Loading
- script: loads immediately
- script async: loaded asynchronously
- script defer: load when DOM content loaded
- load CSS in head so that it's loaded by the time DOM renders els and styles
- load Javascript that is blocking after the body
  - Do not load blocking JavaScript that is required for the styling!

### Streaming Data vs Bulk Loading
- Great for large data or unstable networks
- Loading scripts as multiple, asynchronous calls that can be patched onto the page in order

### Responsive Images?
- tag's srcset along with media queries defined in sizes will allow for precise use of different image sizes

