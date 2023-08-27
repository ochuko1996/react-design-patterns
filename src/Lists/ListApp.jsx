import { people, products } from "../App"
import { LargePersonListItem } from "../People/LargePersonListItem"
import { LargeProductListItem } from "../Products/LargeProductsListItem"
import { NumberedList } from "./NumberedList"
import { RegularList } from "./RegularList"

function ListApp() {
  return (
    <>
        <RegularList
            items={people}
            resourseName={"person"}
            itemComponent={LargePersonListItem}
        />
        <NumberedList
            items={products}
            resourseName={"products"}
            itemComponent={LargeProductListItem}
        />
    </>
  )
}

export default ListApp