import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

const Layout = styled.div`
  padding: 8em;
  min-height: 100vh;
  @media (max-width: 1200px){
   padding: 5em; 
  }
  @media (max-width: 800px){
    padding: 1em;
  }
`
const Flex = styled.div`
  display: flex;
  gap:1em;
  justify-content: center;
  align-items: center;
  height:100%;
  @media (max-width: 800px){
    flex-direction: column-reverse;
  }
`
const ImageContainer = styled.div`
  display:flex;
  justify-content:center;
`
const Col = styled.div` 
  height:100%;
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
      <Layout>
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
      </Layout>
  )
}

export default about