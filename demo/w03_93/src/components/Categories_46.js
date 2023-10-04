const Categories_93 = ({ categories }) => {
  return (
    <>
      <div className="btn-container">
        {
          categories.map((id)=>{
            return (
              <button type="button"
                className="filter-btn"
                data-id={id}
                key={id}
              >
                {id}
              </button>
            )
          })
        }
      </div>
    </>)
};
export default Categories_93;