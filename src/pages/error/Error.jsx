import React from 'react'
import Image from '../../components/utilities/Image'
import { Button, Empty } from 'keep-react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();

  return (
    <Empty>
      <Empty.Image>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/aa469681-b2d1-4384-a990-91906711a24d_Property+1%3DNight+sky_+Property+2%3DSm.svg"
          className= 'h-[250px] w-[500px]'
          alt="404"
        />
      </Empty.Image>
      <Empty.Title>404 Not Found</Empty.Title>
      <Empty.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </Empty.Description>
      <Button onClick={()=>navigate(-1)} variant="outline">Go to home</Button>
    </Empty>
  )
}

export default Error