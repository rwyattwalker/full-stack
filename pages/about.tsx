import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Navbar from '../components/navbar'

const Container = styled.div`
  display:flex;
  justify-content:center;
  min-height: 100vh;
  min-width: 100vw;
 
`
const Flex = styled.div`
  display: flex;
  margin-top:1em;
  gap:1em;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px){
    flex-direction: column-reverse;
  }
`
const ImageContainer = styled.div`
  display:flex;
  justify-content:center;
`
const Col = styled.div` 
  display:flex;
  flex-direction: column;
  color:white;
  justify-content: center;
  max-width: 50%;
  @media (max-width: 800px){
    max-width:400px;
  }
`


function about() {
  return (
    <Container>
        <div className='flex flex-col w-[800px] my-auto'>
          <div className='hidden sm:inline'>
            <Navbar hamburger={false} about/>
          </div>
          <div className='sm:hidden'>
            <Navbar hamburger={true} about/>
          </div>
          <Flex>
            <Col>
              <h1 className='font-bold text-2xl'>Wyatt Walker | Founder & Lead Developer</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis illo inventore ad distinctio, saepe incidunt sunt animi blanditiis accusamus magnam eos aperiam earum nesciunt delectus numquam consequatur repellendus eligendi. Totam.</p>
            </Col>      
            <Col>
              
              <ImageContainer>
                <Image
                  src="/headshot.jpeg"
                  width={400}
                  height={800}
                  alt="Headshot"
                  objectFit='contain'
                  className='border-2 border-green-200 rounded my-auto'
                  />
              </ImageContainer>
            </Col>
          
          </Flex>
        </div> </Container>
  )
}

export default about