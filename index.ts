console.clear();
import { Observable, BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(123);
let obs = subject.asObservable();
//two new subscribers will get initial value => output: 123, 123
subject.subscribe(console.log);
subject.subscribe(console.log);

//two subscribers will get new value => output: 456, 456
subject.next(456);

//new subscriber will get latest value (456) => output: 456
subject.subscribe(console.log);

//all three subscribers will get new value => output: 789, 789, 789
subject.next(789);
console.log('selam');
// output: 123, 123, 456, 456, 456, 789, 789, 789

obs.subscribe((x) => console.log(x));
subject.next(1000);

var observable = Observable.create((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(3);
  observer.next(3);
  observer.complete();
});
var observer = {
  next: (value) => console.log(value),
  error: (err) => console.log(err),
  complete: () => console.log('done!'),
};
observable.subscribe(observer);
