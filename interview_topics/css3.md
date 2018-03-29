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



### Hiding
- Visibility: hidden -- remains on DOM
- Opacity: 0 -- remains on DOM
- Display: none -- removed from DOM

### Media Queries
- Build mobile first, then build out larger, querying for larger screens
- Media print and media speech are also available for printing and audio synthesizer contexts

### Preprocessors
- Sass!
 - Can define and reuse variables
 - Makes it easy to reuse/recycle styles with slight variations
 - Reduce performance of styling

 ### Box Model
 - Content, padding, border, margin
 - Box-sizing allows you to include or not the border and padding dims of the box
 - Border-box adds both padding and border to the box's dimensions


 ### Alt Fonts
 - Load from content provider or from your directory
 - Provide default for graceful degredation
 - Need multiple font file types if loading from local directory

 ### Selector Traversal
- This happens right to left, not left to write
- This allows for more efficient parsing of large rulesets because it allows for quick elimination of styles that do not apply to a particular component
- If read left to write, the browser would traverse the tree more frequently before discovering that the final piece of the rule excluded the search from consideration in the first place

### What's up with the data attribute?
- Allows us to store arbitary data in HTML tags, which we can access for DOM manipulation
- Data attribute is probably what's sitting behind the props/state architecture of Redux
- CSS also has access to this attribute, and it can perform regex searches for very precise styling patterns

### Pseudo-Elements
- ::before and ::after -- allow for generation of clearrfix but also border styling to create distinction from other els
- ::placeholder -- style placeholder text
- ::first-letter, ::spelling-error, ::grammatical-error -- styling these pieces of text
- ::selected -- style what user has selected

### Pseudo-Classes
- Native implementations of very common classes, with direct relationship to user interaction
- :active, :checked, :hover, :empty, :enabled, :first, :last, :visited

### Display
- Inline elements do not respect top/bottom margins and cannot have height or width
- Inline-block elements do respect top/bottom margins and can have height or width
- Both inline and inline block respect right/left margins
- Inline-flex makes a flexbox (defaulted as a block) display as an inline-block

### Position
- Absolute: positioned with respect to nearest relative parent
  - creates new stacking context!
- relative: position with respect to itself
  - loaded as static but may be positioned using top/botton/left/right
- static: loaded per structure of HTML and positioning of other els
  - top/bottom/left/right and z-index won't work!
- Fixed: position with respect to viewport
  - creates new stacking context
