function DetailsTitle({recipe}) {
    return(
        <div className="col-5 text-wrap" id="dish-title-box">
            <h1 id="dish-title">{recipe.title}</h1>
            <h3>{recipe.description}</h3>
        </div>
    )
};

export default DetailsTitle;