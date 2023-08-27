export const ItemListContainer = (props) => {
  return (
    <>
      <div onClick={ props.click }>{ props.greeting }</div>
    </>
  );
};
