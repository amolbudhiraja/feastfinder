import React, { useState } from 'react';
//import './backend/recsys';


export default function App() {
	const images = [
    "https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?w=1380&t=st=1675500909~exp=1675501509~hmac=8b6b817468df585ee5ca5a5644dd52beb5daa09d9abb25e0d50cb395b51793ed",
    "https://img.freepik.com/free-vector/woman-thinking-concept-illustration_114360-7911.jpg?w=1380&t=st=1675500984~exp=1675501584~hmac=df7530cd913a6075da2409a44941b774bbeae9e80b96d23f9f3f64472baeed34",
    "https://img.freepik.com/free-vector/man-thinking-concept-illustration_114360-7920.jpg?w=1380&t=st=1675501020~exp=1675501620~hmac=45c0815e2062d73a74f1f61cf7d1880cc32e22bdd183a8e3f490f8bf3816b19c",
    "https://img.freepik.com/free-vector/italian-cuisine-abstract-illustration_335657-5238.jpg?w=1380&t=st=1675501087~exp=1675501687~hmac=d157d13313513edd5e39efeb6676eeecf53fbdd7a686fc3a9c508c0e4edb0edd"
  ]
  const questions = [
		{
			questionText: 'What is your favorite dining setting? 🍽️',
			answerOptions: [
				{ answerText: 'Casual-Dining', value: 1 },
				{ answerText: 'Restuarant', value: 2 },
				{ answerText: 'High-End', value: 3 },
			],
		},
		{
			questionText: 'What is your ideal pricepoint? 🤑',
			answerOptions: [
				{ answerText: '$', value: 1 },
				{ answerText: '$$', value: 2 },
				{ answerText: '$$$', value: 3 },
			],
		},
		{
			questionText: 'Which cuisine are you feeling? 🍝',
			answerOptions: [
				{ answerText: 'Western', value: 1 },
				{ answerText: 'Asian', value: 2 },
				{ answerText: 'Mexican', value: 3 },
				{ answerText: 'Italian', value: 4 },
        { answerText: 'Drinks', value: 5 },
			],
		},
		{
			questionText: 'Are you pet-friendly? 🐕',
			answerOptions: [
				{ answerText: 'Yes', value: 1 },
				{ answerText: 'No', value: 2 },
			],
		},
	];

  const results = [
    {
      imageLink: "",
      resultDetails: [
      {name: "Panda Express", pricePoint: "$$"}
      ]
    },
    {
      imageLink: "",
      resultDetails: [
      {name: "Panda Express", pricePoint: "$$"}
      ]
    },
    {
      imageLink: "",
      resultDetails: [
      {name: "Panda Express", pricePoint: "$$"}
      ]
    },
    {
      imageLink: "",
      resultDetails: [
      {name: "Panda Express", pricePoint: "$$"}
      ]
    }
  ]

  var dict = {};
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [value, setScore] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleAnswerOptionClick = () => {
    //changes the background image
    let nextImageIndex = currentImageIndex + 1;
    if (nextImageIndex >= images.length) {
      nextImageIndex = 0;
    }
    setCurrentImageIndex(nextImageIndex);

    //changes to the next question once clicked
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}

    // dict[choice] = value;
	};

//   function RestaurantList() {
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("./backend/recsys");
//       const data = await response.json();
//       setRestaurants(data);
//     }
//     fetchData();
//   }, []);
// }

	return (
		<div className='app'>
      <div class="foodBackground" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}></div>
      {showScore ? (
				<div className='result-section'>
          <h1 class="feastFinder2">FeastFinder🍔</h1>
					<div className = "results">Results:</div>
          {/* <ul className="restaurant-list">
            {restaurants.map(restaurant => (
              <li className="restaurant" key={restaurant.id}>
                <img className="restaurant-image" src={restaurant.image} alt={restaurant.name} />
                <div className="restaurant-info">
                  <h2 className="restaurant-name">{restaurant.name}</h2>
                  <p className="restaurant-location">Location: {restaurant.location}</p>
                  <p className="restaurant-price">Price Point: {restaurant.price}</p>
                </div>
              </li>
            ))}
          </ul> */}
				</div>
			) : (
				<>
        <h1 class="feastFinder">FeastFinder🍔</h1>
        <div className='question-card'>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span> of {questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={handleAnswerOptionClick}>{answerOption.answerText}</button>
						))}
					</div>
        </div>
				</>
			)}
		</div>
	);
}
