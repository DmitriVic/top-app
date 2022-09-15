

import {   useState } from 'react'
import { Button, Htag, P, Rating, Tag } from '../components'



export default function Home (): JSX.Element  {
	const [rating, setRating] = useState<number>(4);

	


	
	

  return (
    < >
   <div className='container'>
		<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down' >Кнопка</Button>
			<P size='s' >Lorem, ipsum dolor.</P>
			<P size='m' >Lorem, ipsum dolor.</P>
			<P size='l' >Lorem, ipsum dolor.</P>
			<Tag color='primary' >Tag</Tag>
			<Tag size='m' color='red' >Tag</Tag>
			<Tag size='m' color='green'>Tag</Tag>
			<Tag size='s' >Tag</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
	</div>
    </>
  )
}


