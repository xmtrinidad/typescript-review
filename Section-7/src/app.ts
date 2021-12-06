const names: Array<string> = []; // same as string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
     resolve('This is done')
  }, 2000);
});

promise.then(data => {
  data.split(' ');
});

// Generic Class
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorge = new DataStorage<string>();
textStorge.addItem('Thing');
textStorge.addItem('test');
textStorge.removeItem('Thing');
console.log(textStorge.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());

