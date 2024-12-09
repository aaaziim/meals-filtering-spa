import { useLoaderData, useNavigate } from "react-router";
const FilteredMeals = () => {
    const navigate = useNavigate()
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const handleAlphabetClick = (letter) => {
        navigate(`/meals/${letter}`);
    }
    return (
        <div>

        </div>
    );
};

export default FilteredMeals;