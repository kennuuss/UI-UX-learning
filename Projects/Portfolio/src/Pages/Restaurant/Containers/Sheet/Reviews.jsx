import React from 'react'
import Review from '../../Components/Reviews/Review'
import Line from '../../Components/Line'

const reviewsList = [
	{
		name: 'Marko',
		rate: 5,
		description:
			'It was AWESOME, top notch service, very tasty food prepared quickly. I`ll definitely come here often.',
		id: 0,
	},
	{
		name: 'Roman',
		rate: 3,
		description:
			'Not entirely impressed, the food was served quite well and quickly, but the staff did not please me, they were all dissatisfied, and the bartender was rude to me.',
		id: 1,
	},
	{
		name: 'Sabina',
		rate: 4,
		description:
			"I didn't care where to go, the main thing is to eat quickly. the staff was polite, the interior is very comfortable and beautiful",
		id: 2,
	},
]
export default function Reviews(props) {
	return (
		<div ref={props.refReviews}>
			<h2>Feedback</h2>
			<Line showAlways={true} />

			<div className='flex flex-col pc:gap-[0.5rem] gap-[1rem]'>
				{reviewsList.map((item) => (
					<Review
						name={item.name}
						description={item.description}
						rate={item.rate}
						key={item.id}
					/>
				))}
			</div>
		</div>
	)
}
