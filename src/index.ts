import Utils from './utils'

const greet = (name: string): void => {
  console.log(`Hello ${name}!`)
}

const main = () => {
  greet('mahaker')
  
  console.log(Utils.add(2, 3))
  console.log(Utils.sub(0, 5))
}

main()
