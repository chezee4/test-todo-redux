import { Outlet } from 'react-router-dom'
import Header from 'src/feature/header/header'
import Wrapper from 'src/layout/wrapper/wrapper'

const App = () => {
  return (
    <div className='App'>
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
    </div>
  )
}

export default App
