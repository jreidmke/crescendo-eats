function DetailsImage(recipe) {
    return(
        <div className="col-5" id="dish-image-box">
            <img src={`${recipe.images.full}`} className="img-fluid" id="dish-image"/>
        </div>
    )
};

export default DetailsImage;