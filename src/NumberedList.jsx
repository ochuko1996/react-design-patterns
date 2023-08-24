export const NumberedList = ({
    items,
    resourseName,
    itemComponent: ItemComponent
}) => {
    return (
      <>
        {
          items.map((item, i)=> (
            <div key={i}>
              <h3>{i + 1}</h3>
              <ItemComponent  {...{[resourseName]: item}} />
            </div>
          ))
        }
      </>
    )
}