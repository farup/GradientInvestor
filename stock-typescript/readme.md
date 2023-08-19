### Frontend


## Innhold 
- [Introduction](#introduction)
- [Tech-stack](#tech-stack)
- [State management](#state-management)
- [Components](#komponenter)
- [Tailwind](#tailwind)

## Introduction

## Tech Stack

### Typescript

### React

Props is a widely used pattern for sharing infromation between parent component and a child component. The information is passed as a prop object, and commonly destructured in the child component. With typescript it is necessary to declare an interface/type for the props the child component will receive. 

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

```bash
export const chart = ({details} : {[key: string]: number}) => {
return (
    <></>
 )
}
```
Codesnippet above shows two methods of declaring the types of incoming props. 


Eventhough the pattern is unilateral,from parent to child, there are methods of sending information from the child to the parent component. One is callbacks, done by passing a function as a prop to the child component, which sets a state in the parent by using hooks.  

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



### Tailwind

## State management

## Components

React is all about components. In this project components are organised in folders under src/scenes/. 

Each of the pages "dashboard", "analytics", "news" and "about us" are created as seperate folders with a main index.tsx file.  

*dashboard 

## Tailwind