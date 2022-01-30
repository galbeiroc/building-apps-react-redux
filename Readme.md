## Building Apps React Redux

#### Dev Environment
* Transpile: Babel
* Bundle: Webpack
* Web server: Webpack
* Generating index.html: Webpack
* Loading changes on save: Webpack
* One command via npm scripts!

#### Functional Component Benefits
1. Easier to understand
1. Avoid this keyword
1. Less transpiled code
1. Enhanced code completion/intellisense
1. Easy to test
1. Performance
1. Classes may be removed in future

#### Container vs Presentation Components
Container components are concerned with behavior, marshaling data and actions. 
Container components are mainly concerned with passing data and actions down to child components, this means that they're typically stateful.
Contianer components knows about `Redux` especific code inside and for dispaching actions to the store and connecting tho the store via Redux's connect fuction.
Contianer components often are stateful thay contain state they pass down to presentation components.

Presentation component are dumb, they're nearly all markup. Container components pass data and actions.
Presentation components know nothing about redux, presentation component are more reusable and easier to understand.
Presentation components just rely on props to display UI.
Presentation components don't specify how the data is loaded or mutated.
