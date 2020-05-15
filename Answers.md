# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS makes creating UI very easy, it is designed for putting data onto a page in a fast and simple manner. It is much easier to load a component on a page rather than keeping track of appends and children in vanilla JS.

1. Describe component state.

Component state changes when the setter is called and it refreshed the component. If you did notuse state it would remain static as the page would not know to refresh.

1. Describe props.

Props are the pieces of data passed into child components from their parent component. They work similarly to parameters in functions.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are what happens as a result of a function. A variable changing state or a component refreshing are examples. You can use a useEffect to 'watch' a side effect and take action when it changes in some way.
