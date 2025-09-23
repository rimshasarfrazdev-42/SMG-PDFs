//pdf 1
//page 1

export const loanStatementData = {
  // Header / address
  bankName: "YOUR BANK",
  bankAddress: "23 Friends Lane, Newtown, PA 18940",
  customerName: "John D. Doe",
  customerAddress1: "123 Main Street,",
    customerAddress2: "Anytown, PA 12345-6789",
  statementDate: "8/06/23",
  loanLabel: "Loan",
  loanNumber: "XXXXXXXX1234",

  // Amount Due
  paymentDueDate: "2/19/23",
  principalDue: "$645.66",
  interestDue: "$547.89",
  escrowDue: "$0.00",
  lateChargesDue: "$0.00",
  pastDueAmount: "$7,519.38",
  totalAmountDue: "$8,712.93",

  // Summary of Loan Info
  sampleCustomerLabel: "Sample Customer",
  accountNumber: "XXXXXXXXXXXX1234",
  interestRate: "6.000%",
  currentBalance: "$107,515.96",
  interestPaidYTD: "$551.16",
  escrowBalance: "$0.00",
  originalLoanDate: "10/19/12",
  maturityDate: "1/19/33",
  lineAmount: "$0.00",
  availableCredit: "$0.00",

  // Transaction Activity
  transactionActivity: [
    {
      postedDate: "8/03/23",
      effectiveDate: "8/03/23",
      description: "Late Charge Assessed",
      transactionAmount: "$59.68",
      principalBalance: "$107,515.96",
    },
  ],
};

//page 2

// src/data/pdf2Data.js
export const pdf2Data = {
  changeContactInfo: {
    streetAddress: "",
    mailingAddress: "",
    city: "",
    state: "",
    zip: "",
    homeTelephone: "",
    businessTelephone: "",
    homeCell: "",
    businessCell: "",
    email: "",
    authorizedSignature: "",
    date: "",
  },

  instructions: {
    left: "To change your contact information, please complete the form to the left and provide the additional information requested below. Tear along perforation below and mail to Loan Operations or deliver to any Your Bank Branch.",
    boxes: {
      changeThisAccountOnly: "Change address for this account only.",
      changeAllAccounts: "Change address for all accounts at your institution.",
      changeSpecificAccounts: "Change address for the following accounts only (list account numbers):",
      specificHint: "___________________________________\n___________________________________",
    },
    right: [],
  },

  perfLineText: "Tear along perforated line",

  importantInfo: {
    title: "IMPORTANT INFORMATION ABOUT YOUR LOAN PAYMENT",
    content: [
      "If you send your payment to any other location other than the PO BOX 12345 AnyTown, PA 11111 address noted on the front of this statement, including any night depository, it may cause a processing delay. Loan payments made at a night depository will be credited effective the next business day. Loan payments made in person during normal business hours will be promptly credited to your account upon receipt. A business day is considered to be Monday–Friday, excluding Federal holidays.",
    ],
  },

  billingRights: {
    title: "BILLING RIGHTS SUMMARY FOR OVERDRAFT, PERSONAL, AND HOME EQUITY LINE OF CREDIT ACCOUNTS",
    preface: "What To Do If You Think You Find A Mistake On Your Statement",
    subTitle: "If you think there is an error on your statement, write us at Your Bank Name, PO BOX 2345 AnyTown, PA 11111. In your letter, please provide the following account information:",
    content: [
      "• Your name and account number",
      "• Dollar amount: The dollar amount of the suspected error.",
      "• Description of Problem: If you think there is an error on your bill, describe what you believe is wrong and why you believe it is a mistake.",
      "You must contact us within 60 days after the error appeared on your statement. You must notify us of any potential errors in writing. You may call us, but if you do we are not required to investigate any potential errors and you may have to pay the amount in question.",
      "While we investigate whether or not there has been an error, the following are true:",
    ],
    bullets: [
      "We cannot try to collect the amount in question, or report you as delinquent on that amount.",
      "The charge in question may remain on your statement, and we may continue to charge you interest on that amount. But, if we determine that we made a mistake, you will not have to pay the amount in question or any interest or other fees related to that amount.",
      "While you do not have to pay the amount in question, you are responsible for the remainder of your balance.",
      "We can apply any unpaid amount against your credit limit.",
      "After we finish our investigation, we will tell you our decision. At that point, if we think you owe an amount and you do not pay we may report you as delinquent.",
    ],
  },

  financeCharges: {
    title: "FINANCE CHARGE CALCULATIONS FOR OVERDRAFT, PERSONAL, AND HOME EQUITY LINE OF CREDIT ACCOUNTS BASED ON AVERAGE DAILY BALANCE COMPUTATION METHOD",
    subTitle: "",
    content: [
      "We figure finance charges on your account by applying the periodic rate to the “average daily balance” of your account (including current transactions). To get the “average daily balance” we take the beginning balance of your account each day, add any new advances, and subtract any payments or credits, and unpaid finance charges. This gives us the daily balance. Then, we add up all the daily balances for the billing cycle and divide the total by the number of days in the billing cycle. This gives us the “average daily balance”.",
    ],
  },
};


//pdf2 
//page 1

// src/data/bankStatement.js
export const bankStatementData = {
  bankInfo: {
    name: "YOUR BANK",
    address: "23 Friends Lane, Newtown, PA 18940",
    contact: {
      phone: "267.555.4321",
      address: "23 Friends Lane, Newtown, PA 18940",
      website: "yourbank.com",
    },
  },
  statement: {
    page: "1 of 3",
    statementDate: "05/10/2023",
    primaryAccount: "Account Ending 4302",
  },
  customer: {
    name: "Jane D. Doe",
    address1: "123 Main Street",
    address2: "Anytown, PA 12345-6789",
  },
  notice:
    "Notice to Customers: On April 25th multiple transactions from a 2015 file posted to some customers and was reversed on April 26th. This posting error effected banks nationwide and was not isolated to Your Bank.",
  summaryOfAccounts: [
    {
      accountNo: "XXXXXX4302",
      type: "RELATIONSHIP CHECKING",
      currentBalance: "91,221.56",
      enclosures: "4",
    },
  ],
  relationshipChecking: {
    accountNumber: "XXXXXX4302",
    previousBalance: "98,095.39",
    depositsCredits: "1,353.70",
    checksDebits: "8,235.46",
    serviceCharge: "0.00",
    interestPaid: "7.93",
    endingBalance: "91,221.56",
    numberOfImages: "4",
    statementDates: "4/11/23 thru 5/10/23",
    daysInPeriod: "30",
    averageLedger: "96,398.50",
    averageCollected: "96,398.50",
    interestEarned: "7.93",
    annualPercentageYield: "0.10%",
    InterestPaid: "35.22",
  },
  transactions: [
    {
      date: "4/19",
      description:
        "XXSOC FSA TREAS 630 3650248893EFFDAT ID#: XXXXXXXXX TRACE#: 043752301895104",
      amount: "1,092.00",
    },
    {
      date: "5/01",
      description:
        "PENSION LIFE INS CO 30259856501EFFDAT ID#: 130255021 TRACE#: 053200049753201",
      amount: "35.66",
    },
    {
      date: "5/04",
      description:
        "PREMIUM TA LIFE INS - ATY 3600259875EFFDAT ID#: 720-365EC005693 TRACE#: 026985001200026",
      amount: "226.04",
    },
    {
      date: "5/10",
      description: "Interest Deposit",
      amount: "7.93",
    },
  ],
};


//page2

// data.ts
export const statementPage2 = {
  statement: {
    page: "2 of 3",
    statementDate: "05/10/2023",
    primaryAccount: "Account Ending 4302",
  },
  debitCharges: [
    {
      date: "5/05",
      description:
        "PREMIUM Healthcare 1365025889EFFDAT ID#: 3600140005 TRACE#: 023022541036999",
      amount: "157.98-",
    },
  ],
  checksReview: [
    { date: "4/18", check: "4022", amount: "632.98", date2: "5/02", check2: "4024", amount2: "15.00" },
    { date: "4/19", check: "4023", amount: "128.00", date2: "5/03", check2: "4025", amount2: "7,301.50" },
  ],
  balances: [
    { date: "4/11", balance: "98,095.39", date2: "5/01", balance2: "98,462.07" },
    { date: "4/18", balance: "97,462.41", date2: "5/02", balance2: "98,447.07" },
    { date: "4/19", balance: "98,426.41", date2: "5/03", balance2: "91,145.57" },
   
  ],
  interestSummary: [
    { date: "4/10", rate: "0.100000%" },
  ],
};
//page 3

export const headerData= {
  page: "3 of 3",
  statementDate: "05/10/2023",
  primaryAccount: "Account Ending 4302",
};

export const checksData = [
  {
    id: "1",
    number: "4022",
    date: "04/18/2023",
    amount: "$632.98",
    imageUrl: "/cheque1.png",
  },
  {
    id: "2",
    number: "4023",
    date: "04/19/2023",
    amount: "$128.00",
    imageUrl: "/cheque3.png",
  },
  {
    id: "3",
    number: "4024",
    date: "05/02/2023",
    amount: "$15.00",
    imageUrl: "/cheque2.png",
  },
  {
    id: "4",
    number: "4025",
    date: "05/03/2023",
    amount: "$7,301.50",
    imageUrl: "/cheque4.png",
  },
];


//pdf 3
//pgae 1

export const bankData = {
  bankInfo: {
    logo: "/bank-logo.png",
    name: "YOUR BANK",
    address: "23 Friends Lane, Newtown, PA 18940",
    service: "Address Service Requested",
  },
  statement: {
    title: "Statement of Account(s)",
    fromDate: "06/12/2023",
    toDate: "06/12/2023",
    page: "1 of 2",
  },
  customer: {
    name: "John D. Doe",
    address1: "123 Main Street",
    address2: "Anytown PA 12345-6789",
  },
  routingNumber: "231380104",
  accountDetailsHeaderSuffix : "xxxxxx1234",
  feeSummaryHeaderSuffix: "xxxxxx1234",

  summaryOfAccounts: [
  
    {
      
      accountNo: "xxxxxx1234",
      type: "CK",
      beginningBalance: "$0.00",
      totalDeposits: "$50.00",
      interestEarned: "$0.00",
      totalWithdrawals: "$-0.00",
      serviceCharges: "$-0.00",
      endingBalance: "$50.00",
    },
  ],
  accountDetails: [
    {
      date: "06/12/2023",
      description: "New Account Deposit",
      amount: "$50.00",
      balance: "$50.00",
    },
  ],
  overdraftFees: {
    overdraft: { period: "$0.00", yearToDate: "$0.00" },
    returnedItem: { period: "$0.00", yearToDate: "$0.00" },
  },
};



//page2 
export const leftSectionData = [
 {
    title: "ERRORS OR QUESTIONS ABOUT YOUR CHECKING OR SAVINGS ACCOUNT",
    paragraphs: [
      "If you think this statement is incorrect, or if you believe there is an error with respect to one or more transactions reflected on your statement, notify us as soon as possible. We must hear from you no later than thirty (30) days after the Ending Date of the statement on which the error or problem first appeared. For transactions that are considered electronic fund transfers, refer to the notification requirements detailed below. If you provide oral notice, we may require you to send in written confirmation of that notification within ten (10) business days from the date of the first notification."
    ]
  },
  {
    title: "INFORMATION ABOUT YOUR ELECTRONIC FUND TRANSFERS",
    paragraphs: [
      "In case of errors or questions about your electronic transfers, telephone us at 1-888-YOURBANK, or write us at Your Bank, Customer Service, P.O. Box 000, Anywhere, PA 99999. Phone or write us as soon as you can if you think your statement or receipt is wrong or if you need more information about a transfer on the statement or receipt.",
      "We must hear from you no later than sixty (60) days after we sent you the first statement on which the error or problem appeared.",
      "In your notification, give us the following information:"
    ],
    list: [
      "your name and account number",
      "the dollar amount of the suspected error",
      "the error or transfer you are unsure about, and explain as clearly as you can why you believe there is an error or why you need more information."
    ]
  },
  {
   
    paragraphs: [
      "We will investigate your complaint and will correct any error promptly. If we take more than ten (10) business days to do this, we will credit your account for the amount you think is in error, so that you will have use of the money during the time it takes us to complete our investigation. We are not required to credit your account if we ask you to put your complaint in writing and you do not do so or we do not receive your written confirmation of complaint in a timely manner."
    ]
  }
];

export const rightSectionData = {
  title: "HOW TO BALANCE YOUR CHECKBOOK WITH THIS STATEMENT",
  description: [
    "Go through your checkbook and mark off each check, deposit, withdrawal and automatic transaction listed on this statement.",
    "If there are transactions listed on this statement which you have not included in your checkbook, enter them into your register. These might include service charges, interest earned, automatic payments, etc.",
    "On this chart, enter all checks, automatic payments, charges and other withdrawals listed in your register but not on this statement."
  ],
  tableTitle: "Checks and other outstanding withdrawals",
  table: {
    rows: [
      { noDate: "", amountA: "", noDateB: "", amountB: "" },
      { noDate: "", amountA: "", noDateB: "", amountB: "" },
    ],
    subtotalA: "$",
    subtotalB: "$",
    totalAplusB: "$0.00",
    closingBalance: "$0.00",
    depositsNotShown: "$0.00",
    outstandingChecks: "$0.00",
    finalBalance: "$0.00",
  },

};
export const footer ={
  right:{
    website: "yourBank.com",
    phone:"1-888-YOURBANK"
  }
}