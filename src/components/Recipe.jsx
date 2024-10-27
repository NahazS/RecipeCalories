import PropTypes from 'prop-types';
const Recipe = ({recipe, handleCook}) => {
    const {recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = recipe
    return (
        <div className="max-w-[379px] p-6 border-[1px] border-[#282828] border-opacity-20 rounded-2xl">
            <img className="h-[200px] mb-6 rounded-2xl w-full" src={recipe_image} alt="" />
            <h5 className="mb-4">{recipe_name}</h5>
            <p className="text-[#878787] mb-4">{short_description}</p>
            <hr className="mb-6" />
            <h6 className="mb-4">Ingredients: {ingredients.length}</h6>
            <ul className="mb-4">
                {
                    ingredients.map((ingredient,index)=> <li className="text-[#878787]" key={index}>{ingredient}</li>)
                }
            </ul>
            <hr className="mb-6" />
            <div className="flex gap-x-4 mb-6">
                <p className="text-[#878787] flex gap-x-2"><img src="time.svg" alt="" />{preparing_time}</p>
                <p className="text-[#878787] flex gap-x-2"><img src="cal.svg" alt="" />{calories}</p>
            </div>
            <button onClick={() => handleCook(recipe)} className="btn-primary py-[13px] px-6 bg-[#0BE58A]">Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.shape({ 
        recipe_name: PropTypes.string.isRequired,
        recipe_image: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string),
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.string.isRequired,
        
    }).isRequired,
    handleCook: PropTypes.func, // Marked as required
};
export default Recipe;
