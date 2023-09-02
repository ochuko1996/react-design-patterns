// import { BigSuccessButton, DangerButton } from "./Compostition"
import { BigSuccessButton, DangerButton } from "./partiallyApply"
import RecursiveComponent from "./RecursiveComponent"

const nestedObject = {
	a: 1,
	b: {
		b1: 4,
		b2: {
			b23: 'Hello',
		},
		b3: {
			b31: {
				message: 'Hi',
			},
			b32: {
				message: 'Hi',
			}
		}
	},
	c: {
		c1: 2,
		c2: 3,
	}
}
function FuncProgApp() {
  return (
    <>
        {/* <RecursiveComponent data={nestedObject}/> */}
        <DangerButton text="Don't do it" onClick={()=> console.log('hello')}/>
        <BigSuccessButton text='Yes!!!'/>
    </>
  )
}

export default FuncProgApp