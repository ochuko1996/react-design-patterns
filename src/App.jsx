import ListApp from "./Lists/ListApp"
import { LargeProductListItem } from "./Products/LargeProductsListItem"
import SplitScreenApp from "./SplitScreen/SplitScreenApp"
import { UncontrolledModal } from "./Modal/UncontrolledModal"
import UncontrolledModalApp from "./Modal/UncontrolledModalApp"
import ContainerComponentApp from "./ContainerComponent/ContainerComponentApp"
import ControlledApp from "./ControlledModal/ControlledApp"
import OnboardingApp from "./OnboardingFlow/OnboardingApp"
import HOCApp from "./HOC/HOCApp"
import FuncProgApp from "./FunctionalProgramming/FuncProgApp"
export const people = [
  {
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games']
  },
  {
    name: 'Ochuko George',
    age: 27,
    hairColor: 'black',
    hobbies: ['swimming', 'coding', 'playing bass guitar']
  },
  {
    name: 'Praise Archibong',
    age: 23,
    hairColor: 'brown',
    hobbies: ['reading', 'trading', 'singing']
  },
]

export const products = [
  {
    name: 'Flat-Screen Tv',
    price: '$300',
    description: 'Huge LCD screeen, agreat deal',
    rating: 4.5
  },
  {
    name: 'Basketball',
    price: '$10',
    description: 'Just like pros use',
    rating: 3.8
  },
  {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2
  },
]
function App() {

  return (
      // <SplitScreenApp/>
      // <ListApp/>
      // <UncontrolledModalApp/>
      // <ContainerComponentApp/>
      // <OnboardingApp/>
      // <ControlledApp/>
      // <HOCApp/>
      <FuncProgApp/>
    
  )
}

export default App
