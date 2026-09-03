/* import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg'; */
//import './App.css';

import Navbar from './navbar';
import { SeniorName, Button } from './props'; // when multiple components import from a single file
import Sports from './sports';
//import Button from './props';

// A React component is a JavaScript function that returns a React Element (JSX).
// component name should capital letter
//one component one responsibility

// component return jsx elements(react elements)
/* jsx rule -> 1.Return only One Parent/Root Element
2. Use Fragments -> <> </> 
3.Close Every Tag -> jsx not allowed -> <img> ;it should -> <img src="logo.png" /> ,<input />,<br />,<hr />
4.Use className, instead of class ,because class is a js keyword
5. Use htmlFor instead of for -> not allowed -> <label for="email"> ;allowed -> <label for="email">
6. Use curly braces {} to insert JavaScript expressions inside jsx
  inside {}-> allowed -> any js expression -> variables,math,function calls,array methods,ternary
          not allowed -> all statements(if,else etc)
7.JSX Can Store Elements(react element aka js object)
*/
// Props (Properties) are values passed from a parent component to a child component.
// props actually an object.Parent pass argument as an object to the child componet
// JSX looks exactly like HTML, and in HTML, everything inside an attribute is treated as a literal text string.
// that's why need curly {} {argument} if wanted to pass anything other then string,{} tells it is js number or others
function App() {
  //const [count, setCount] = useState(0)
  const skills = ['html', 'CSS', 'JavaScript', 'React'];
  const name = 'hasan';
  const a = 4;
  const b = 6;
  const isloggedin = true;
  const heading = <h3>Enjoying the learning of react.js</h3>; // react element(js object)
  const dark = true;
  const isactive = true;
  return (
    <>
      {/*  <div className={dark ? 'bg-blue-950 h-12' : 'bg-amber-900'}>
        React learning
      </div>
      <p className={isactive ? 'text-3xl' : 'text-6xl'}>
        It is not too hard or too easy
      </p> */}
      <div
        className={
          dark
            ? 'bg-blue-950 h-12 text-white p-2'
            : 'bg-amber-900 text-white p-2'
        }
      >
        React learning
      </div>
      {/* Added a temporary bright text color to verify Tailwind text utility utilities are active */}
      <p
        className={
          isactive
            ? 'text-3xl text-orange-500 font-bold'
            : 'text-6xl text-emerald-500'
        }
      >
        It is not too hard or too easy
      </p>
      <p>Hello,{name} what are you thinking about react,is it hard or easy</p>
      <p>{a + b}</p>
      <p>{name.toUpperCase()}</p>
      <p>
        {isloggedin === true && 'welcome'} {name.toLowerCase()}
      </p>
      <p>{heading}</p>
      <p>{skills[0]}</p>
      <p>{skills.length >= 4 ? 'experienced' : 'learning'}</p>
      <p>{skills.map((item) => item)}</p>
      <input></input>
      <img src="" alt="" />
      <Header></Header>
      <Navbar></Navbar>
      <SeniorName
        name="HM Nayeem"
        age={26}
        issenior={true}
        field={['Software engineer']}
        otherthings={{ nish: 'educator', hobby: 'tour' }}
      ></SeniorName>
      <SeniorName
        name="Sumit Saha"
        age={32}
        issenior={true}
        field={['ML engineer']}
        otherthings={{ nish: 'educator', hobby: 'content creation' }}
      ></SeniorName>
      <SeniorName
        name="Nasir Uddin"
        age={30}
        issenior={false}
        field={['UI/UX engineer']}
        otherthings={{ nish: 'teacher', hobby: 'teaching' }}
      ></SeniorName>
      <Button text="Login"></Button>
      <Button text="Register"></Button>
      <Button text="Logout"></Button>
      <Sports></Sports>
    </>
  );
}

function Header() {
  return <h1>head section</h1>;
}
export default App;
/* function Logo() {
  return <h2>Logo</h2>;
}
function Menu() {
  return <ul>Menu</ul>;
}
function Navbar() {
  return (
    <nav>
      <Logo></Logo>
      <Menu></Menu>
    </nav>
  );
} */
/* function Hero() {
  return <section>Hero Section</section>;
}
function Footer() {
  return <footer>Footer</footer>;
} */

/* 

Mental Model

This is the model I want to remember forever.

index.html

↓

main.tsx

↓

<App />

↓

App()

↓

<App returns JSX>

↓

React finds child components

↓

Runs each child component

↓

Each returns JSX

↓

React builds one React Element tree

↓

Creates/updates the DOM

↓

Browser displays the page


Notice something important:

Components don't directly render HTML.

They return React Elements.

React collects all those React Elements 
into a tree.

Only after the tree is complete does React
compare it with the previous tree and 
update the browser's DOM where necessary.
*/
