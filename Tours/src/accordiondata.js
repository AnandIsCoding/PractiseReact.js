const accordionData = [
	{
	  id: 1,
	  question: "What is React?",
	  answer: `React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.`
	},
	{
	  id: 2,
	  question: "How does React work?",
	  answer: `React works by creating a virtual DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM, a copy of the DOM that React keeps in memory. When state or props of a component change, React updates the virtual DOM and then compares it with the previous version. The difference is then applied to the browser's DOM, ensuring minimal changes and improving performance.`
	},
	{
	  id: 3,
	  question: "What are React components?",
	  answer: `Components are the building blocks of a React application's UI. A component is a JavaScript function or class that optionally accepts inputs (i.e., props) and returns a React element that describes how a section of the UI should appear.`
	},
	{
	  id: 4,
	  question: "What is JSX?",
	  answer: `JSX stands for JavaScript XML. It is a syntax extension for JavaScript used in React to describe what the UI should look like. JSX allows you to write HTML-like code within JavaScript, making the code easier to understand and manage.`
	},
	{
	  id: 5,
	  question: "What is the difference between state and props?",
	  answer: `State is a built-in object in React components that holds data that may change over time. Props (short for properties) are read-only attributes that are passed from parent to child components. While state is managed within the component, props are passed to components to configure them.`
	}
  ];

  export default accordionData;
