import { setupCounter } from './counter.ts';
import './style.css';
// import './topics/01-basic-types';
// import './topics/02-object-interface';
// import './topics/03-functions.ts';
// import './topics/04-homework-types.ts';
// import './topics/05-basic-destructuring.ts';
// import './topics/06-function-destructuring.ts';
// import './topics/07-import-export.ts';
// import './topics/08-classes.ts';
// import './topics/09-generics.ts';
// import './topics/10-decorators';
import './topics/11-optional-chaining.ts';
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola mundo
`;
console.log('Hola mundo');

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
