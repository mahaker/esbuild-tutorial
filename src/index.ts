import { add } from './utils'

const greet = (name: string): void => {
  console.log(`Hello ${name}!`)
}

const main = () => {
  greet('mahaker')
  
  const r = add(2, 3)
  console.log(r)
}

main()
