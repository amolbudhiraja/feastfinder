import React, { useEffect, useState } from 'react';
import {getReccomendation} from './backend/recsys.js';

export default function App() {
	const images = [
    "https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?w=1380&t=st=1675500909~exp=1675501509~hmac=8b6b817468df585ee5ca5a5644dd52beb5daa09d9abb25e0d50cb395b51793ed",
    "https://img.freepik.com/free-vector/woman-thinking-concept-illustration_114360-7911.jpg?w=1380&t=st=1675500984~exp=1675501584~hmac=df7530cd913a6075da2409a44941b774bbeae9e80b96d23f9f3f64472baeed34",
    "https://img.freepik.com/free-vector/man-thinking-concept-illustration_114360-7920.jpg?w=1380&t=st=1675501020~exp=1675501620~hmac=45c0815e2062d73a74f1f61cf7d1880cc32e22bdd183a8e3f490f8bf3816b19c",
    "https://img.freepik.com/free-vector/italian-cuisine-abstract-illustration_335657-5238.jpg?w=1380&t=st=1675501087~exp=1675501687~hmac=d157d13313513edd5e39efeb6676eeecf53fbdd7a686fc3a9c508c0e4edb0edd"
  ]
  /* List of questions for initial onboarding poll */
  const questions = [
		{
			questionText: 'What is your favorite dining setting? 🍽️',
			answerOptions: [
				{ answerType: "setting", answerText: 'Casual-Dining', value: 1 },
				{ answerType: "setting", answerText: 'Restuarant', value: 2 },
				{ answerType: "setting", answerText: 'High-End', value: 3 },
			],
		},
		{
			questionText: 'What is your ideal pricepoint? 🤑',
			answerOptions: [
				{ answerType: "price", answerText: '$', value: 1 },
				{ answerType: "price", answerText: '$$', value: 2 },
				{ answerType: "price", answerText: '$$$', value: 3 },
			],
		},
		{
			questionText: 'Which cuisine are you feeling? 🍝',
			answerOptions: [
				{ answerType: "cuisine", answerText: 'Western', value: 1 },
				{ answerType: "cuisine", answerText: 'Asian', value: 2 },
				{ answerType: "cuisine", answerText: 'Mexican', value: 3 },
				{ answerType: "cuisine", answerText: 'Italian', value: 4 },
        { answerType: "cuisine", answerText: 'Drinks', value: 5 },
			],
		},
		{
			questionText: 'Are you pet-friendly? 🐕',
			answerOptions: [
				{ answerType: "petFriendly", answerText: 'Yes', value: 1 },
				{ answerType: "petFriendly", answerText: 'No', value: 2 },
			],
		},
    {
			questionText: 'What are your seating preferences?',
			answerOptions: [
				{ answerType: "seating", answerText: 'Seating', value: 1 },
				{ answerType: "seating", answerText: 'No seating', value: 2 },
			],
		},
	];

  const [data, setData] = useState({});
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
  const [recList, setRecList] = useState([]);
	// const [value, setScore] = useState(0);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /* Changes background image, adds chosen values to dictionary, and changes to the next question once choice is clicked */
	const handleAnswerOptionClick = (choice, value) => {
    console.log(choice + " " + value);

    //sets dictionary value to choice and value
    setData({...data, [choice]: value});
    console.log(data);

    //changes to the next question once clicked
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
      setRecList(getResults());
		}
	};
  
  /* Passes in the user's choices through backend restaurant recommender function to get best results */
  let getResults = () => {
    console.log(data["seating"]);
    return getReccomendation(data);
  };

  function similarityCalculator(val) {
    console.log("val " + val);
    let percentDifference = 0;
    percentDifference = (1 - val)/val * 100;
    console.log(percentDifference);
    return Math.trunc(100 - Math.abs(percentDifference));
  }

	return (
		<div className='app'>
      {showScore ? (
				<div className='result-section'>
          <h1 className="feastFinder2">FeastFinder🍔</h1>
					<div className = "results">Results:</div>
              {/* <div className="images">
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png"} />
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png"} />
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/White_box_55x90.png/1280px-White_box_55x90.png"} />
              </div> */}
              <div className="restaurant-list">
                  <button className="restaurant-1" >
                    <div className="restaurant-info">
                      <p className="restaurant1-name">{recList[0][0]} </p>
                      <p className="restaurant1-percentSimilarity">{similarityCalculator(recList[0][1])}% similarity </p>
                    </div>
                  </button>
                  <button className="restaurant-2">
                    <div className="restaurant2-info">
                      <p className="restaurant2-name">{recList[1][0]}</p>
                      <p className="restaurant2-percentSimilarity">{similarityCalculator(recList[1][1])}% similarity </p>
                    </div>
                  </button>
                  <button className="restaurant-3">
                    <div className="restaurant3-info">
                      <p className="restaurant3-name">{recList[2][0]}</p>
                      <p className="restaurant3-percentSimilarity">{similarityCalculator(recList[2][1])}% similarity </p>
                    </div>
                  </button>
              </div>
				</div>
			) : (
				<>
        <h1 className="feastFinder">FeastFinder🍔</h1>
        <div className='question-card'>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span> of {questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => {handleAnswerOptionClick(answerOption.answerType, answerOption.value)}}>{answerOption.answerText}</button>
						))}
					</div>
        </div>
				</>
			)}
		</div>
	);
}
