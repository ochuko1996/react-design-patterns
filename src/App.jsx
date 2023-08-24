// import { SplitScreen } from "./SplitScreen"
// const LeftHandComponent = ()=>{
//   return <h1 style={{backgroundColor: 'green'}}>Left!</h1>
// }
// const RightHandComponent = ()=>{
//   return <p style={{backgroundColor: 'red'}}>Right!</p>

import { UncontrolledModal } from "./UncontrolledModal"
import { NumberedList } from "./NumberedList"
import { LargePersonListItem } from "./People/LargePersonListItem"
import { SmallPersonListItem } from "./People/SmallPersonListItem"
import { LargeProductListItem } from "./Products/LargeProductsListItem"
import { SmallProductListItem } from "./Products/SmallProductsListItem"
import { RegularList } from "./RegularList"
import OnboardingApp from "./OnboardingFlow/OnboardingApp"

// }
const people = [
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

const products = [
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
    // <SplitScreen
      // left={LeftHandComponent}
      // right={RightHandComponent}
    //   leftWeight={1}
    //   rightWeight={3}
    // >
    //   <LeftHandComponent/>
    //   <RightHandComponent/>
    // </SplitScreen>
    <>
      {/* <RegularList
        items={people}
        resourseName='person'
        itemComponent={SmallPersonListItem}
      />

      <RegularList
        items={people}
        resourseName='person'
        itemComponent={LargePersonListItem}
        />
      <NumberedList
        items={products}
        resourseName='product'
        itemComponent={SmallProductListItem} */}
        {/* <Modal>
          <LargeProductListItem product={products[0]}/>
        </Modal> */}
      {/* /> */}
      <OnboardingApp/>
    </>
  )
}

export default App
