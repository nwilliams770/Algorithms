## CSS3

### What is BEM?
- Block-Element-Modifier is a naming convention for naming CSS classes that allows for flexible and readble code. Styles will actually cascade!

### Reset vs Normalize
- Reset file removes browser specific styling that can create inconsistencies between browsers
- Normalize is a library that preserves some browser defaults that we build upon to create consistent styling across browsers

### Floats (Clearfix)
- Allow for text to wrap around el; commonly used before flexbox and css-grid
- Clearfix is a trick to allow you to move els below a floated el as opposed to sitting beside it
- Float parent el's collapse regardless of height

### Block Formatting Context
- Block Formatting Context: a mini layout inside your page. Once an element has a BFC, everything is contained inside it. 
  - exists due to presence of a block el, floated el, positioned el, etc

### Z-index
- Determines how the elements on a page stack onto each other
- Default behavior: background => els with negative z-index => block els => floated els => inline els => positioned els
- Only applicable if el has position that is fixed, relative, or absolute

### Old Browsers, New Features..Support!
- Best practice is to check if browser supports the feature rather than assuming the browser type is its current version and will support the feature (e.g. browser sniffing)
- Degrade gracefully: allow older browsers to subtley ignore new features without totally bombing the UI
- Vendor prefixes aka CSS browser prefixes are a way to have specific browser support for a feature before the features are supported in ALL browsers
- Polyfill is code used to provide modern functionality on older browsers that don't natively support it
- Feature detection: explicity testing features of browser
 - Feature inference (e.g. browser sniffing) =>not good!
 - User Agent string detection





### What's up with the data attribute?
- Allows us to store arbitary data in HTML tags, which we can access for DOM manipulation
- Data attribute is probably what's sitting behind the props/state architecture of Redux
- CSS also has access to this attribute, and it can perform regex searches for very precise styling patterns

