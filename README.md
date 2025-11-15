# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

:root {
  --primaryColor: hsl(14, 90%, 53%);
  --primaryColorLight: hsl(14, 96%, 91%);
  --bgColor: hsl(0, 0%, 100%);
  --formColor: hsl(20, 42%, 87%);
  --whiteColor: hsl(0, 0%, 100%);
  --blackColor: hsl(0, 0%, 18%);
  --greyText: hsl(0, 0%, 51%);
  --inputColor: hsl(330, 12%, 97%);
  --cardColor: hsl(300, 3%, 94%);
  --biggestFontSize: 2.5rem;
  --h1FontSize: 1.6rem;
  --h2FontSize: 1.25rem;
  --h3FontSize: 1rem;
  --normalFontSize: 0.938rem;
  --smallFontSize: 0.813rem;
  --smallestFontSize: 0.75rem;
  --borderRadius: 3rem;
}

.destination .secContainer .redText {
  color: var(--primaryColor);
  font-size: var(--smallFontSize);
  font-weight: 500;
}

.destination .secContainer h3 {
  font-size: var(--h1FontSize);
}

.destination .secContainer .searchField{
  margin:2rem;
  /* margin-top: 2rem; */
  gap: 1rem;
}

.destination .secContainer .searchField .inputField {
  background: var(--primaryColorLight);
  padding: 1rem;
  border-radius: var(--borderRadius);
  gap: .5rem;
}

.searchField .inputField input {
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
}

.searchField .inputField .icon {
  color: var(--blackColor);
}

.searchField .btn {
  gap: .5rem;
  margin: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.secMenu {
  display: none;
}

.destinationContainer {
  margin: 2rem;
  width:90%;
}

.destinationContainer .singleDestination {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  /* height: 260px;
  width: 260px; */
}

.destinationContainer .singleDestination .imgDiv {
  position: relative;
  height: 100%;
  width: 100%;
}

.destinationContainer .singleDestination .imgDiv img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all .3s ease-in-out;
}

.destinationContainer .singleDestination .imgDiv img:hover{
    scale: 1.1;
}

.descInfo{
    position: absolute;
    z-index:2 ;
    bottom: 0;
    width: 100%;
    padding: 1rem 2rem 1rem;
    justify-content: space-between;
}

.descInfo::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    /* background: linear-gradient(to bottom, rgba(0,0,0),rgba(0,0,0,0.76)); */
    z-index: -1;
}

.descInfo .text{
    gap: .5rem;
    color: var(--whiteColor);
}

.descInfo .text .name{
    display: block;
    font-weight: 500;
    padding-bottom: .3rem;
    font-size: var(--h2FontSize);
}

.descInfo .text .name .flex .icon{
    font-size: var(--normalFontSize);
}

.descInfo .rating{
    padding: 8px 1rem;
    border-radius: var(--borderRadius);
    background: rgba(245, 245, 245, 0.37);
    border: 1.5px solid rgba(255, 255, 255, 0.241);
    font-size: var(--h3FontSize);
    font-weight: 600;
    color: var(--whiteColor);
}

@media screen and (min-width:520px) {
  .destination .secContainer .searchField{
    grid-template-columns: repeat(2,1fr);
  }

  .destination .secContainer .destinationContainer{
    grid-template-columns: repeat(2,1fr);
  }
}

@media screen and (min-width:640px) {
  /* .destination .secContainer .searchField{
    grid-template-columns: repeat(2,1fr);
  } */

  .destination .secContainer .secMenu{
    display: block;
  }

  .destination .secContainer .secMenu .flex{
    width: 100%;
    margin: 2rem auto;
    justify-content: center;
    gap: 1rem;
  }

  .destination .secContainer .secMenu .flex li{
    background: transparent;
    padding: 10px 17px;
    border-radius: var(--borderRadius);
    color: var(--blackColor);
    border: 1.5px dashed transparent;
  }

  .destination .secContainer .secMenu .flex li:hover{
    color: var(--primaryColor);
    border: 1.5px dashed var(--primaryColor);
  }

  .destination .secContainer .secMenu .flex .active{
    color: var(--primaryColor);
    border: 1.5px dashed var(--primaryColor);
  }

}

@media screen and (min-width:1014px) {
  .destination .secContainer .secTitle .redText{
    font-size: var(--normalFontSize);
  }

  .destination .secContainer .secTitle .redText h3{
    font-size: var(--h1FontSize);
  }
  .destination .secContainer .secTitle .redText p{
    font-size: var(--h3FontSize);
  }

  .destination .secContainer .secMenu .flex{
    justify-content: center;
  }

  .destination .secContainer .secMenu .flex li{
    background: transparent;
    padding: 10px 17px;
    border-radius: var(--borderRadius);
    color: var(--blackColor);
    border: 1.5px dashed transparent;
  }

  .destination .secContainer .secMenu .flex li:hover{
    color: var(--primaryColor);
    border: 1.5px dashed var(--primaryColor);
  }

  .destination .secContainer .secMenu .flex .active{
    color: var(--primaryColor);
    border: 1.5px dashed var(--primaryColor);
  }

  .destination .secContainer .searchField{
    grid-template-columns: repeat(4,1fr);
  }

}


@media screen and (min-width:1014px) {

  .destination .secContainer .destinationContainer{
    grid-template-columns: repeat(3,1fr);
  }
}

@media screen and (min-width:1148px) {

  .destination .secContainer .secTitle .redText h3{
    font-size: var(--biggestFontSize);
  }
  .destination .secContainer .secTitle .redText p{
    font-size: var(--h2FontSize);
  }

  .destination .secContainer .destinationContainer{
    grid-template-columns: repeat(4,1fr);
  }
}

@media screen and (min-width:1400px) {
  .destination .secContainer .destinationContainer{
    grid-template-columns: repeat(4,1fr);
  }
}