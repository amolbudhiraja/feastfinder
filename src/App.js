import React, { useEffect, useState } from 'react';
import {getReccomendation} from './backend/recsys.js';
import getRouteInformation from "./backend/googleRoute.js";
import getInfo from './backend/getinfo.js';

export default function App() {
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
			questionText: 'Which cuisine are you feeling today? 🍝',
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
			questionText: 'What are your seating preferences? 🪑',
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
		return getReccomendation(data);
	};

	function similarityCalculator(val) {
		let percentDifference = 0;
		percentDifference = (1 - val)/val * 100;
		console.log(percentDifference);
		return Math.trunc(100 - Math.abs(percentDifference));
	}

	function renderDollarSign(val) {
		if (val === 1) {
			return "$";
		}
		else if (val === 2) {
			return "$$";
		}
		
		else if (val === 3) {
			return "$$$";
		}
	}

	function renderCuisines(val) {
		console.log("val" + val);
		const answerOptions = ['Western', 'Asian', 'Mexican', 'Italian', 'Drinks']
		return answerOptions[val-1];
	}

	return (
		<div className='app'>
      		{showScore ? (
			<div className='result-section'>
          	<h1 className="feastFinder2">FeastFinder🍔</h1>
				<div className = "results">Results:</div>
				<div className = "cards">
					<view className = "question-card2">
						<img className="image" src={recList[0][3]} />
						<p><a className="restaurant1-name" href={recList[0][2]}>{recList[0][0]} </a></p>
						<div className="flexRow">
							<p className="restaurant1-percentSimilarity">{similarityCalculator(recList[0][1])}% similarity </p>
							<p className='restaurant1-percentSimilarity'>{renderDollarSign(recList[0][4])}</p>
							<p className='restaurant1-percentSimilarity'>{renderCuisines(recList[0][5])}</p>
						</div>
					</view>
					<view className = "question-card2">
						<img className="image" src={recList[1][3]} />
						<p><a className="restaurant1-name" href={recList[1][2]}>{recList[1][0]} </a></p>
						<div className="flexRow">
							<p className="restaurant2-percentSimilarity">{similarityCalculator(recList[1][1])}% similarity </p>
							<p className='restaurant1-percentSimilarity'>{renderDollarSign(recList[1][4])}</p>
							<p className='restaurant1-percentSimilarity'>{renderCuisines(recList[1][5])}</p>
						</div>
					</view>
					<view className = "question-card2">
						<img className="image" src={recList[2][3]} />
						<p><a className="restaurant1-name" href={recList[2][2]}>{recList[2][0]} </a></p>
						<div className="flexRow">
							<p className="restaurant3-percentSimilarity">{similarityCalculator(recList[2][1])}% similarity </p> 
							<p className='restaurant1-percentSimilarity'>{renderDollarSign(recList[2][4])}</p>
							<p className='restaurant1-percentSimilarity'>{renderCuisines(recList[2][5])}</p>
						</div>
					</view>
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



