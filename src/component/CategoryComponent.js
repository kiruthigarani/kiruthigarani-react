const CategoryComponent = (props) => {
  const { category } = props;
  
  return (
    <div>
        <h1>{category.title}</h1>
    </div>
  )
}
export default CategoryComponent;