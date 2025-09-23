import StatementBalancePage from "./Pdf3Page2";
import { leftSectionData, rightSectionData } from "../data/Data";
import BankStatement2 from "./Pdf3Page1";

const Pdf3Main = () => {
  return (
    <div>
      {/* === Page 1 === */}

      <BankStatement2 />
       <div className="bg-white">
      <StatementBalancePage
        leftSection={leftSectionData}
        rightSection={rightSectionData}
      />
       
      </div>
    </div>
  );
};

export default Pdf3Main;
