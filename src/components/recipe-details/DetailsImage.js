function DetailsImage({recipe}) {
    return(
        <div className="col-5" id="dish-image-box">
            {"images" in recipe ? <img src={`${recipe.images.full}`} className="img-fluid" id="dish-image"/> : <img src={"/img/no_img.jpg"} className="img-fluid" id="dish-image"/>}
        </div>
    )
};

export default DetailsImage;