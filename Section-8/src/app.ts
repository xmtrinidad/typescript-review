function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  return function(constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor()
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

@Logger('LOGGING');
@WithTemplate('<h1>my Person Object</h1>', 'app')
class Person {
  name = 'Xavier';

  constructor() {
    console.log('Creating person object...')
  }
}

const pers = new Person();

console.log(pers);