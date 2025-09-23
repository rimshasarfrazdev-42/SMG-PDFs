import BankBlankPage from './Pdf2Blank'
import BankStatement from './Pdf2Page1'
import StatementPage2 from './Pdf2Page2'
import ChecksPage from './Pdf2Page3,'

const Pdf2Main = () => {
  return (
    <div className='overflow-x-hidden'>
         <BankStatement/>
              <StatementPage2/>
              <BankBlankPage/>
              <ChecksPage/>
    </div>
  )
}

export default Pdf2Main
