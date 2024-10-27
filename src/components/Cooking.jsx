import PropTypes from 'prop-types';
const Cooking = ({cook,cookNumber}) => {
    const {recipe_name, preparing_time, calories} = cook
    return (
        <tr className="bg-[#f9f9f9]">
            <td className="pl-6 py-5">{cookNumber}</td>
            <td className="px-6 py-5">{recipe_name}</td>
            <td className="px-6 py-5">{preparing_time} minutes</td>
            <td className="px-6 py-5">{calories} calories</td>
            
        </tr>
    );
};
Cooking.propTypes = {
    cook: PropTypes.shape({ 
        recipe_name: PropTypes.string.isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.string.isRequired,
    }).isRequired,
    cookNumber: PropTypes.number, // Marked as required
};
export default Cooking;
