### Frontend


## Content 
- [Introduction](#introduction)
- [Technology](#technology)
- [State management](#state-management)
- [Components](#komponenter)
- [Tailwind](#tailwind)

## Introduction

This document documents the technology used with explanation and examples.

## Technology 

### TypeScript

TypeScript is a statically typed (variables are explicitly decleared) superset of JavaScript, meaning all valid JavaScript code is valid typescript code. Benift of TypeScrip;  early compile-time erros, improved code managment,  


### React


- [Props](#props)
- [Hooks](#Hooks)
- [State management](#state-management)

**Props**

Props is a pattern for sharing infromation between parent component and a child component. The information is passed as a prop object, and commonly destructured in the child component. With typescript it is necessary to declare an interface/type for the props the child component will receive. 

```bash
type HistoricalData = {
    [key: string]: number
}

export const chart = ({details} : historicalData) => {
return (
    <></>
 )
}
```
Method 1

```bash
export const chart = ({details} : {[key: string]: number}) => {
return (
    <></>
 )
}
```
Method 2

Codesnippet above shows two methods of declaring the types of incoming props. 

Eventhough the pattern is unilateral, props from parent to child, there are methods of sending information from the child to the parent component. One is callbacks, done by passing a function as a prop to the child component, which sets a state in the parent by using hooks.  


**Children props**

Children passed between opening and closening tags, while parent props are passed inside of the tags. Parents props are useful when the component acts as container or controller for several child components, and multiple child components need access to the same data. 

```bash
export const chart = ({details} : historicalData) => {
    ...
return (
    <Card>
        ... Chart 
    <Card> 
 )
}
```
Codesnippet above displays how card component is reusable and children props are passed between while the parent prop is  for dispalying data on Gradient Investors dashboard. 

**Hooks**

Below follows some hooks used in this project

*useState()* hook allows to delcare a state variable, and re-render the component (and it's child components) when calling setStat().

```bash
const [stock, setStock] = useState(tickerInfo)

// Later 
setStock(newTickerInfo)
```
Code show initialization and use of useState() with start value, tickerinfo. Interface could also be provided useState<type>()


*useEffect()* runs when the component mounts, or when state change specified in the array.    return a clean-up function. 

```bash
useEffect(() => {

    asynf function fetchStock() => {
        const response = await fetch('http://localhost:...)
        ...
    }

}, [ticker])
```

### Tailwind

## State management

## Components

React is all about components. In this project components are organised in folders under src/scenes/. 

Each of the pages "dashboard", "analytics", "news" and "about us" are created as seperate folders with a main index.tsx file.  

*dashboard 

## Tailwind