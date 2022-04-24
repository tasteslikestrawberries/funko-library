import { BehaviorSubject, of } from "rxjs"

const arr = [1,2,3,4,5];
const subject = new BehaviorSubject(arr)
const obs$ = of(arr); //from returns isolated values, of returns the whole array
const sub1 = subject.subscribe()
const sub2 = obs$.subscribe()
console.log(sub1,sub2) //returns safesubscriber object


export default function TestPlayground() {
  return (
    <div>TestPlayground</div>
  )
}
