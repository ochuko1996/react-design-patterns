import React from 'react'
import { UncontrolledModal } from './UncontrolledModal'
import { LargeProductListItem } from '../Products/LargeProductsListItem'
import { products } from '../App'

function UncontrolledModalApp() {
  return (
    <UncontrolledModal>
        <LargeProductListItem products={products[0]}/>
    </UncontrolledModal>
  )
}

export default UncontrolledModalApp