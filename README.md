# zonejs-bug-demo

Demonstrating a weird zone.js bug which depends on the port passed to `ionic serve`.

**How to reproduce**

```
git clone https://github.com/JamiesonWarner/zonejs-bug-demo
cd zonejs-bug-demo
npm install
ionic serve -p 8100 # "this runs" is not printed immediately on click         
ionic serve -p 8101 # "this runs" is printed immediately on click
```
