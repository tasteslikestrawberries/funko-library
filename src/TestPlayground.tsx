import { from, interval, share, takeWhile, tap } from "rxjs";

const arr = [1, 2, 3, 4, 5]; 
const stream$ = from(arr); //from returns isolated values, of returns the whole array

const shared$ = interval(1000).pipe(
  takeWhile(v => v <= 3),
  tap((v) => console.log(`side effect ${v}`)),
  share() //will log only once
);

const sub1 = shared$.subscribe(v => console.log(v));
const sub2 = shared$.subscribe(v => console.log(v));

export default function TestPlayground() {
  return <div>TestPlayground</div>;
}
