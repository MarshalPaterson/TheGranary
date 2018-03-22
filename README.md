# The Granary
This is a store management class for React Native. This allows to store variables across components. It is a single source of truth without being intrusive and has no extensive boilerplate setup. Clean and simple access to your session variables. 
<p align="center">
  <img width="198" height="286" src="https://github.com/MarshalPaterson/the-granary/blob/master/assets/TheGranary.png?raw=true">
</p>
Import to use

```
import TheGranary from 'the-granary';
```

To set:

```
let g = TheGranary.getInstance()
g.setGranary("Tester", "This is grain");
```

To get:

```
let g = TheGranary.getInstance();
let t = g.getGranary("Tester");

this.setState({test: t});
```
