import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

export const CustomNavbar = () => {
  return (
    <Navbar bg='dark' data-bs-theme='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='/' className='mx-auto'>
          <Image
            src='https://logo.clearbit.com/clearbit.com'
            alt='Logo de la empresa'
            className='d-inline-block align-text-top'
            title='Inicio'
            height={30}
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
