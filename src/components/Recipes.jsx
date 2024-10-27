import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Cook from "./Cook";
import Cooking from "./Cooking";

const Recipes = () => {

    const [recipes, setRecipes] = useState([])
    useEffect(()=> {
        fetch('dist/recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    },[])
    const [cooks, setCook] = useState([])
    const [cookCount, setCookCount] = useState(0)
    const handleCook = (addCook) => {
        if(!cooks.includes(addCook))
        {
            const cookArray = [...cooks, addCook]
            const addCount = cookCount + 1
            setCook(cookArray)
            setCookCount(addCount)
        } else
            alert("already added")
    }
    
    const [cooking, setCooking] = useState([])
    const [cookingCount, setCookingCount] = useState(0)

    // total time and total cal
    const [totalTime, setTotalTime] = useState(0)
    const [totalCal, setTotalCal] = useState(0)

    const handleCooking = (addCooking) => {
        if(!cooking.includes(addCooking))
        {
            const addCookingArray = [...cooking, addCooking]
            setCooking(addCookingArray)
            // remove 1cook from cooks
            const removeCook = cooks.filter(cook => cook !== addCooking)
            setCook(removeCook)
            const removeCount = cookCount - 1
            setCookCount(removeCount)
            const addCount = cookingCount + 1
            setCookingCount(addCount)
            const newTime = JSON.parse(addCooking.preparing_time)
            const addTime = totalTime + newTime
            setTotalTime(addTime)
            const newCal = JSON.parse(addCooking.calories)
            const addCal = totalCal + newCal
            setTotalCal(addCal)
        } else
            alert("already in cooking section")
    }
    

    return (
        <div className="max-w-[1320px] mt-[100px] mx-auto">
            <div className="max-w-[823px] text-center mx-auto">
                <h2>Our Recipes</h2>
                <p className="text-[#150b2b] text-opacity-60">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="flex gap-x-6">
                <div className="grid grid-cols-2 gap-6 max-w-[782px]">
                    {
                        recipes.map((recipe, index) => <Recipe key={index} handleCook={handleCook} recipe={recipe}></Recipe>)
                    }
                </div>
                <div className="border-[1px] border-[#282828] border-opacity-20 rounded-2xl w-[514px] text-center pb-[227px] h-fit">
                    <h4 className="mb-4">Want to cook: {cookCount}</h4>
                    <hr className="mb-6" />
                    <table className="min-w-full">
                        <thead className="pb-4">
                          <tr className="">
                            <th className="pr-[23px] pl-6 pb-4"></th>
                            <th className="w-[122px] pr-[23px] pb-4">Name</th>
                            <th className="w-[68px] pr-[23px] pb-4">Time</th>
                            <th className="w-[62] pr-[23px] pb-4">Calories</th>
                            <th className="pb-4">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                                cooks.map((cook, index) => <Cook key={index} cook={cook} cookNumber={index+1} handleCooking={handleCooking}></Cook>)
                            }
                        </tbody>
                    </table>
                    <h4 className="mb-4 mt-8">Currently cooking: {cookingCount}</h4>
                    <hr className="mb-6" />
                    <table className="min-w-full table-fixed">
                        <thead>
                            <tr className="">
                                <th className="pl-6 py-5">#</th>
                                <th className="px-6 py-5">Name</th>
                                <th className="px-6 py-5">Time</th>
                                <th className="px-6 py-5">Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cooking.map((cook, index) => <Cooking key={index} cook={cook} cookNumber={index+1} ></Cooking>)
                            }
                        </tbody>
                    </table>
                    <div className={`justify-end gap-x-5 px-[19px] py-[17px] ${cooking.length > 0 ? 'flex' : 'hidden'}`}>
                        <p className="flex flex-col font-medium">Total Time = <span>{totalTime}</span></p>
                        <p className="flex flex-col font-medium">Total Calories = <span>{totalCal}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;
