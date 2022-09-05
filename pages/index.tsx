

import { Button, Htag, P } from '../components'






export default function Home (): JSX.Element  {

  return (
    < >
   <Htag tag='h1'>Текст</Htag>
	<Button appearance='primary' arrow='right'>Кнопка</Button>
	<Button appearance='ghost' arrow='down' >Кнопка</Button>
	<P size='s' >Lorem, ipsum dolor.</P>
	<P size='m' >Lorem, ipsum dolor.</P>
	<P size='l' >Lorem, ipsum dolor.</P>
    </>
  )
}


