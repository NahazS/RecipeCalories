import PropTypes from 'prop-types';
const Cook = ({cook,cookNumber, handleCooking}) => {
    const {recipe_name, preparing_time, calories} = cook
    return (
        <tr className="bg-[#f9f9f9]">
            <td className="pr-[23px] pl-6">{cookNumber}</td>
            <td className="pr-[23px]">{recipe_name}</td>
            <td className="pr-[23px]">{preparing_time} minutes</td>
            <td className="pr-[23px]">{calories} calories</td>
            <td className="py-4">
              <button onClick={()=> handleCooking(cook)} className="py-[9px] px-[18px] bg-[#0BE58A] rounded-[50px] text-black font-medium">Preparing</button>
            </td>
        </tr>
    );
};

Cook.propTypes = {
    cook: PropTypes.shape({ 
        recipe_name: PropTypes.string.isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.string.isRequired,
    }).isRequired,
    cookNumber: PropTypes.number,
    handleCooking: PropTypes.func 
};
export default Cook;
