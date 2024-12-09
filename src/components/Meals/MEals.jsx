import { useLoaderData, useNavigate } from "react-router";

const MEals = () => {
    const { meals } = useLoaderData()
    const navigate = useNavigate()
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const handleAlphabetClick = (letter) => {
        navigate(`/meals/${letter}`);
    }

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
                {alphabets.map((letter) => (
                    <button
                        key={letter}
                        onClick={() => handleAlphabetClick(letter)}
                        style={{ padding: '10px', fontSize: '18px' }}
                    >
                        {letter}
                    </button>
                ))}
            </div>

            <h3>Meals : {meals.length}</h3>
            <hr></hr>
            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px'
            }}>
                {meals.map(meal => (
                    <div style={{
                        borderRadius: '20px',
                        backgroundColor: '#f0f0f0',
                        padding: "20px"
                    }} key={meal.idMeal}>
                        <img style={{
                            width: '300px',
                            borderRadius: '20px',
                        }} src={meal.strMealThumb} alt="" />
                        <h3 >{meal.strMeal}</h3>

                    </div>
                ))}
            </div>

        </div >
    );
};

export default MEals;