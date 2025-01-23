export const quizes = [
  {
    quizId: "java123",
    title: "Java Programming Quiz",
    description: "A quiz to test your Java programming knowledge.",
    category: "Programming",
    image: "/images/java.svg",
    language: "en",
    tags: ["java", "programming", "basics"],
    questions: [
      {
        questionId: "q1",
        question: "What is the default value of an int variable in Java?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "0", explanation: "Default value of int in Java is 0." },
          { optionId: "b", answer: "null", explanation: "null is not valid for int, as it's a primitive type." },
          { optionId: "c", answer: "undefined", explanation: "undefined is not a valid value for int in Java." },
          { optionId: "d", answer: "NaN", explanation: "NaN is for floating-point types, not int." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The default value of an int is 0.",
          incorrect: "Oops! The correct answer is 0.",
        },
        hint: "Try looking into default values for primitive types.",
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "Which of these is the correct syntax for declaring an array in Java?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "int[] arr = new int[5];", explanation: "This is the correct syntax for declaring an array." },
          { optionId: "b", answer: "int arr[] = new int(5);", explanation: "Incorrect syntax. The size should be specified after 'new'." },
          { optionId: "c", answer: "int arr = new int[5];", explanation: "Incorrect syntax. Arrays are declared using '[]' after the type." },
          { optionId: "d", answer: "int arr[] = 5;", explanation: "This is not valid syntax for array declaration." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The syntax 'int[] arr = new int[5];' is right.",
          incorrect: "Oops! The correct answer is 'int[] arr = new int[5];'.",
        },
        hint: "Check the syntax for declaring arrays in Java.",
        difficulty: "medium",
      },
      {
        questionId: "q3",
        question: "What is the purpose of the 'static' keyword in Java?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "It makes a variable or method accessible without creating an instance of the class.", explanation: "Correct. 'static' allows access without creating an instance." },
          { optionId: "b", answer: "It creates a new instance of a class.", explanation: "This is incorrect. The 'static' keyword does not create instances." },
          { optionId: "c", answer: "It makes a variable constant.", explanation: "'static' does not make variables constant. The 'final' keyword does." },
          { optionId: "d", answer: "It allows multiple classes to be declared in one file.", explanation: "This is incorrect. The 'static' keyword is unrelated to class declarations." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'Static' allows access without an instance of the class.",
          incorrect: "Oops! The correct answer is 'It makes a variable or method accessible without creating an instance of the class.'",
        },
        hint: "Think about how methods can be accessed in a class.",
        difficulty: "medium",
      },
      {
        questionId: "q4",
        question: "Which of these methods is used to start a thread in Java?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "start()", explanation: "Correct. The 'start()' method is used to begin the execution of a thread." },
          { optionId: "b", answer: "run()", explanation: "Incorrect. 'run()' is the method that defines the code to be executed by the thread, but it doesn't start the thread." },
          { optionId: "c", answer: "execute()", explanation: "'execute()' is not a method in the Thread class." },
          { optionId: "d", answer: "begin()", explanation: "'begin()' is not a valid method in Java for threads." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'start()' is the method used to start a thread.",
          incorrect: "Oops! The correct answer is 'start()'.",
        },
        hint: "Look for the method that begins the thread's execution.",
        difficulty: "hard",
      },
      {
        questionId: "q5",
        question: "Which of these is a valid way to handle exceptions in Java?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "try-catch", explanation: "Correct. The 'try-catch' block is used to handle exceptions in Java." },
          { optionId: "b", answer: "error-catch", explanation: "This is not valid syntax. The correct term is 'try-catch'." },
          { optionId: "c", answer: "try-finally", explanation: "This is used for cleanup after 'try', but does not handle exceptions directly." },
          { optionId: "d", answer: "catch-try", explanation: "The order should be 'try' followed by 'catch'." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'try-catch' is the right way to handle exceptions.",
          incorrect: "Oops! The correct answer is 'try-catch'.",
        },
        hint: "Look for the block that begins with 'try' and handles exceptions.",
        difficulty: "hard",
      },
    ],
  },

{
    quizId: "python123",
    title: "Python Programming Quiz",
    description: "A quiz to test your Python programming knowledge.",
    category: "Programming",
    image: "/images/python.svg",
    language: "en",
    tags: ["python", "programming", "basics"],
    questions: [
      {
        questionId: "q1",
        question: "What is the correct syntax to output 'Hello World' in Python?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "print('Hello World')", explanation: "Correct. 'print()' is used to display output in Python." },
          { optionId: "b", answer: "echo 'Hello World'", explanation: "'echo' is used in shell scripting, not Python." },
          { optionId: "c", answer: "printf('Hello World')", explanation: "'printf()' is used in C, not in Python." },
          { optionId: "d", answer: "output('Hello World')", explanation: "'output' is not a built-in function in Python." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'print('Hello World')' is the correct syntax.",
          incorrect: "Oops! The correct answer is 'print('Hello World')'.",
        },
        hint: "Look for the function that prints the output in Python.",
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "How do you create a list in Python?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "list = [1, 2, 3]", explanation: "Correct. Lists are created using square brackets in Python." },
          { optionId: "b", answer: "list = (1, 2, 3)", explanation: "This creates a tuple, not a list." },
          { optionId: "c", answer: "list = {1, 2, 3}", explanation: "This creates a set, not a list." },
          { optionId: "d", answer: "list = <1, 2, 3>", explanation: "This syntax is incorrect for creating a list in Python." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Lists in Python are created using square brackets.",
          incorrect: "Oops! The correct answer is 'list = [1, 2, 3]'.",
        },
        hint: "Lists are enclosed in square brackets in Python.",
        difficulty: "easy",
      },
      {
        questionId: "q3",
        question: "What is the output of the following Python code: 'print(2 + 3 * 4)'?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "14", explanation: "Correct. The order of operations is multiplication first, then addition." },
          { optionId: "b", answer: "20", explanation: "This is incorrect. 3 * 4 is 12, and then 2 + 12 equals 14." },
          { optionId: "c", answer: "5", explanation: "This is incorrect. The multiplication happens before addition." },
          { optionId: "d", answer: "6", explanation: "This is incorrect. The multiplication happens first, not addition." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The result of 2 + 3 * 4 is 14, due to operator precedence.",
          incorrect: "Oops! The correct answer is 14.",
        },
        hint: "Remember the order of operations in Python.",
        difficulty: "medium",
      },
      {
        questionId: "q4",
        question: "Which keyword is used to define a function in Python?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "def", explanation: "Correct. The 'def' keyword is used to define a function in Python." },
          { optionId: "b", answer: "function", explanation: "This is not a valid keyword in Python." },
          { optionId: "c", answer: "func", explanation: "This is not a valid keyword in Python." },
          { optionId: "d", answer: "method", explanation: "'method' is used for instance methods in object-oriented programming." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Functions are defined using the 'def' keyword in Python.",
          incorrect: "Oops! The correct answer is 'def'.",
        },
        hint: "Look for the keyword that starts a function definition.",
        difficulty: "medium",
      },
      {
        questionId: "q5",
        question: "Which of the following is used to import a module in Python?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "import module_name", explanation: "Correct. The 'import' statement is used to bring a module into your Python script." },
          { optionId: "b", answer: "include module_name", explanation: "'include' is not used in Python for importing modules." },
          { optionId: "c", answer: "using module_name", explanation: "'using' is not valid in Python for importing modules." },
          { optionId: "d", answer: "import_from module_name", explanation: "This is not valid syntax. 'import' should be followed by the module name directly." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The 'import' keyword is used to import modules in Python.",
          incorrect: "Oops! The correct answer is 'import module_name'.",
        },
        hint: "Think about the keyword used to bring a module into your Python code.",
        difficulty: "medium",
      },
    ],
  },

{
    quizId: "js123",
    title: "JavaScript Programming Quiz",
    description: "A quiz to test your JavaScript programming knowledge.",
    category: "Programming",
    image: "/images/javascript.svg",
    language: "en",
    tags: ["javascript", "programming", "basics"],
    questions: [
      {
        questionId: "q1",
        question: "Which of these is the correct way to declare a variable in JavaScript?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "let x = 10;", explanation: "Correct. 'let' is used to declare a variable in modern JavaScript." },
          { optionId: "b", answer: "var x = 10;", explanation: "'var' is an older way to declare variables, but it works too." },
          { optionId: "c", answer: "const x = 10;", explanation: "Correct. 'const' is used to declare a constant in JavaScript." },
          { optionId: "d", answer: "x = 10;", explanation: "This is incorrect. You must use 'let', 'const', or 'var' to declare a variable." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'let' is used to declare a block-scoped variable.",
          incorrect: "Oops! The correct answer is 'let x = 10;'.",
        },
        hint: "Think about modern JavaScript variable declarations.",
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "What will be the output of the following code: 'console.log(2 + '2')'?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "'22'", explanation: "Correct. In JavaScript, the number 2 is concatenated with the string '2'." },
          { optionId: "b", answer: "4", explanation: "This is incorrect. The '+' operator is treated as string concatenation, not addition." },
          { optionId: "c", answer: "NaN", explanation: "This is incorrect. The operation results in string concatenation, not NaN." },
          { optionId: "d", answer: "undefined", explanation: "This is incorrect. The result is a string, not undefined." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! '2' + '2' results in the string '22' due to string concatenation.",
          incorrect: "Oops! The correct answer is '22'.",
        },
        hint: "Check how the '+' operator behaves with strings in JavaScript.",
        difficulty: "medium",
      },
      {
        questionId: "q3",
        question: "Which of these methods is used to add an element to the end of an array in JavaScript?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "push()", explanation: "Correct. The 'push()' method adds an element to the end of an array." },
          { optionId: "b", answer: "unshift()", explanation: "Incorrect. 'unshift()' adds an element to the beginning of an array." },
          { optionId: "c", answer: "pop()", explanation: "'pop()' removes the last element from an array." },
          { optionId: "d", answer: "shift()", explanation: "'shift()' removes the first element from an array." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'push()' adds elements to the end of an array.",
          incorrect: "Oops! The correct answer is 'push()'.",
        },
        hint: "Think about which method modifies the end of the array.",
        difficulty: "medium",
      },
      {
        questionId: "q4",
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "It refers to the current object that the function is part of.", explanation: "Correct. 'this' refers to the current object in methods." },
          { optionId: "b", answer: "It refers to the global object.", explanation: "'this' can refer to the global object in some contexts, but not always." },
          { optionId: "c", answer: "It is used to define a function.", explanation: "'this' is not used to define a function." },
          { optionId: "d", answer: "It refers to a function's argument.", explanation: "This is incorrect. 'this' does not refer to a function's argument." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'this' refers to the current object in which the method is executed.",
          incorrect: "Oops! The correct answer is 'It refers to the current object that the function is part of.'",
        },
        hint: "Consider how 'this' is used in object methods.",
        difficulty: "medium",
      },
      {
        questionId: "q5",
        question: "How do you write a comment in JavaScript?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "// This is a comment", explanation: "Correct. Single-line comments in JavaScript start with '//'." },
          { optionId: "b", answer: "# This is a comment", explanation: "'#' is used for comments in Python, not JavaScript." },
          { optionId: "c", answer: "/* This is a comment */", explanation: "This is valid for multi-line comments, but not single-line." },
          { optionId: "d", answer: "<!-- This is a comment -->", explanation: "This is used for HTML comments, not JavaScript." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Use '//' for single-line comments in JavaScript.",
          incorrect: "Oops! The correct answer is '// This is a comment'.",
        },
        hint: "Look for the symbol used for comments in JavaScript.",
        difficulty: "easy",
      },
    ],
  },


{
    quizId: "react123",
    title: "React JS Quiz",
    description: "A quiz to test your React JS knowledge.",
    category: "Programming",
    image: "/images/react.png",
    language: "en",
    tags: ["react", "javascript", "frontend"],
    questions: [
      {
        questionId: "q1",
        question: "What is JSX in React?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "JavaScript XML", explanation: "Correct. JSX stands for JavaScript XML and allows you to write HTML-like syntax in JavaScript." },
          { optionId: "b", answer: "JavaScript Extended", explanation: "This is incorrect. JSX stands for JavaScript XML, not Extended." },
          { optionId: "c", answer: "JSON Syntax Extension", explanation: "This is incorrect. JSX is not related to JSON." },
          { optionId: "d", answer: "Java Syntax Extension", explanation: "This is incorrect. JSX is specific to JavaScript." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! JSX is a syntax extension for JavaScript that allows you to write HTML-like code in JavaScript.",
          incorrect: "Oops! The correct answer is 'JavaScript XML'.",
        },
        hint: "JSX allows you to write HTML-like elements directly in your JavaScript code.",
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "What is the purpose of the 'useState' hook in React?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "To manage component state", explanation: "Correct. 'useState' is used to manage state in functional components in React." },
          { optionId: "b", answer: "To manage side effects", explanation: "This is incorrect. Side effects are managed by 'useEffect'." },
          { optionId: "c", answer: "To create a component", explanation: "This is incorrect. A component is created using a function or class in React." },
          { optionId: "d", answer: "To handle events", explanation: "This is incorrect. Event handling is done through functions, not 'useState'." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'useState' is a hook that allows you to add state to functional components in React.",
          incorrect: "Oops! The correct answer is 'To manage component state'.",
        },
        hint: "State allows you to track and update values within a component.",
        difficulty: "medium",
      },
      {
        questionId: "q3",
        question: "How do you pass data from a parent component to a child component in React?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "Using props", explanation: "Correct. Data is passed from parent to child using props in React." },
          { optionId: "b", answer: "Using state", explanation: "This is incorrect. State is local to a component and cannot directly be passed between components." },
          { optionId: "c", answer: "Using context", explanation: "While context can be used, props are the primary way to pass data between components." },
          { optionId: "d", answer: "Using hooks", explanation: "This is incorrect. Hooks are used for managing state and side effects, not for passing data between components." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Props are used to pass data from a parent component to a child component in React.",
          incorrect: "Oops! The correct answer is 'Using props'.",
        },
        hint: "Props are like function arguments and are passed from parent to child components.",
        difficulty: "medium",
      },
      {
        questionId: "q4",
        question: "What is the purpose of the 'useEffect' hook in React?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "To handle side effects", explanation: "Correct. 'useEffect' is used to perform side effects such as fetching data or manipulating the DOM." },
          { optionId: "b", answer: "To manage component state", explanation: "'useEffect' is used for side effects, not state management." },
          { optionId: "c", answer: "To update the component", explanation: "This is incorrect. 'useEffect' doesn't update the component, but runs side effects." },
          { optionId: "d", answer: "To trigger re-renders", explanation: "This is incorrect. Re-renders happen naturally in React, and 'useEffect' handles side effects, not rendering." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'useEffect' is used for side effects in functional components, such as fetching data or modifying the DOM.",
          incorrect: "Oops! The correct answer is 'To handle side effects'.",
        },
        hint: "Side effects include tasks like fetching data, subscriptions, or manual DOM updates.",
        difficulty: "medium",
      },
      {
        questionId: "q5",
        question: "Which method is used to render a React component to the DOM?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "ReactDOM.render()", explanation: "Correct. 'ReactDOM.render()' is used to render a component to the DOM." },
          { optionId: "b", answer: "React.createElement()", explanation: "'React.createElement()' is used to create elements, not to render components to the DOM." },
          { optionId: "c", answer: "render() method", explanation: "This is incorrect. The 'render()' method is used inside class components, not directly to render a component." },
          { optionId: "d", answer: "component.render()", explanation: "This is incorrect. The render method is part of class components, not for rendering to the DOM." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'ReactDOM.render()' is used to render React components into the DOM.",
          incorrect: "Oops! The correct answer is 'ReactDOM.render()'.",
        },
        hint: "Look for the method that attaches a React component to the DOM.",
        difficulty: "medium",
      },
    ],
  },


{
    quizId: "nodejs123",
    title: "Node.js Quiz",
    description: "A quiz to test your knowledge on Node.js.",
    category: "Programming",
    language: "en",
    tags: ["node.js", "backend", "javascript"],
    image: "/images/node-js.png",  
    questions: [
      {
        questionId: "q1",
        question: "What is Node.js?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "A JavaScript runtime built on Chrome's V8 engine", explanation: "Correct. Node.js is a runtime environment that allows you to run JavaScript on the server side." },
          { optionId: "b", answer: "A type of database", explanation: "This is incorrect. Node.js is not a database." },
          { optionId: "c", answer: "A framework for frontend development", explanation: "This is incorrect. Node.js is a runtime for backend development." },
          { optionId: "d", answer: "A version of JavaScript", explanation: "This is incorrect. Node.js is a runtime environment, not a new version of JavaScript." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Node.js allows you to execute JavaScript on the server side.",
          incorrect: "Oops! The correct answer is 'A JavaScript runtime built on Chrome's V8 engine'.",
        },
        hint: "Think about JavaScript running outside the browser.",
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "Which of the following is used to manage packages in Node.js?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "npm", explanation: "Correct. npm (Node Package Manager) is used to manage Node.js packages." },
          { optionId: "b", answer: "pip", explanation: "This is incorrect. pip is used for Python, not Node.js." },
          { optionId: "c", answer: "gem", explanation: "This is incorrect. gem is used for Ruby, not Node.js." },
          { optionId: "d", answer: "composer", explanation: "This is incorrect. Composer is used for PHP, not Node.js." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! npm is the most widely used package manager in the Node.js ecosystem.",
          incorrect: "Oops! The correct answer is 'npm'.",
        },
        hint: "It helps to install packages and dependencies for Node.js applications.",
        difficulty: "easy",
      },
      {
        questionId: "q3",
        question: "Which method is used to create a simple HTTP server in Node.js?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "http.createServer()", explanation: "Correct. http.createServer() is used to create an HTTP server in Node.js." },
          { optionId: "b", answer: "createServer()", explanation: "This is incorrect. You need to call it from the 'http' module." },
          { optionId: "c", answer: "server.create()", explanation: "This is incorrect. There's no such method." },
          { optionId: "d", answer: "http.server()", explanation: "This is incorrect. The correct method is 'http.createServer()'." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'http.createServer()' is used to create a simple HTTP server in Node.js.",
          incorrect: "Oops! The correct answer is 'http.createServer()'.",
        },
        hint: "Check how modules are required and used in Node.js.",
        difficulty: "medium",
      },
      {
        questionId: "q4",
        question: "What does the 'fs' module in Node.js provide?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "File system operations", explanation: "Correct. The 'fs' module provides a set of file system operations, such as reading and writing files." },
          { optionId: "b", answer: "Database connections", explanation: "This is incorrect. The 'fs' module deals with file systems, not databases." },
          { optionId: "c", answer: "Network management", explanation: "This is incorrect. Network management is handled by other modules like 'http'." },
          { optionId: "d", answer: "UI components", explanation: "This is incorrect. Node.js does not have a built-in module for UI components." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The 'fs' module is used for file system operations.",
          incorrect: "Oops! The correct answer is 'File system operations'.",
        },
        hint: "Think about reading and writing files in a backend environment.",
        difficulty: "medium",
      },
      {
        questionId: "q5",
        question: "Which of the following is true about Node.js?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "It is single-threaded and asynchronous", explanation: "Correct. Node.js is single-threaded and uses an event-driven, non-blocking I/O model." },
          { optionId: "b", answer: "It uses multiple threads for processing", explanation: "This is incorrect. Node.js operates on a single thread." },
          { optionId: "c", answer: "It is a blocking I/O environment", explanation: "This is incorrect. Node.js is non-blocking." },
          { optionId: "d", answer: "It is only for frontend development", explanation: "This is incorrect. Node.js is primarily used for backend development." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Node.js is single-threaded and asynchronous, which helps with scalability and performance.",
          incorrect: "Oops! The correct answer is 'It is single-threaded and asynchronous'.",
        },
        hint: "Think about how Node.js handles multiple I/O operations.",
        difficulty: "hard",
      },
    ],
  },


{
    quizId: "mysql123",
    title: "MySQL Quiz",
    description: "A quiz to test your MySQL knowledge.",
    category: "Database",
    image: "/images/mysql.svg",
    language: "en",
    tags: ["mysql", "database", "queries"],
    questions: [
      {
        questionId: "q1",
        question: "What is the correct MySQL statement to select all records from a table named 'Users'?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "SELECT * FROM Users;", explanation: "Correct. The '*' symbol selects all columns from the table in MySQL." },
          { optionId: "b", answer: "SELECT ALL FROM Users;", explanation: "This is incorrect. The keyword 'ALL' is not used to select all records in MySQL." },
          { optionId: "c", answer: "GET * FROM Users;", explanation: "This is incorrect. 'GET' is not a valid MySQL keyword for selecting data." },
          { optionId: "d", answer: "SELECT Users;", explanation: "This is incorrect. You need to specify the columns or use '*' to select all." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'SELECT * FROM Users;' retrieves all records from the 'Users' table in MySQL.",
          incorrect: "Oops! The correct answer is 'SELECT * FROM Users;'.",
        },
        hint: "The '*' symbol is used to select all columns from a table.",
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "Which MySQL clause is used to filter records?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "WHERE", explanation: "Correct. The 'WHERE' clause is used to filter records based on a condition in MySQL." },
          { optionId: "b", answer: "HAVING", explanation: "This is incorrect. 'HAVING' is used to filter grouped records, not individual rows." },
          { optionId: "c", answer: "FILTER", explanation: "This is incorrect. 'FILTER' is not a valid MySQL clause." },
          { optionId: "d", answer: "ORDER", explanation: "This is incorrect. 'ORDER' is used to sort records, not filter them." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The 'WHERE' clause is used to filter records based on specified conditions in MySQL.",
          incorrect: "Oops! The correct answer is 'WHERE'.",
        },
        hint: "Use this clause to filter rows before retrieving them.",
        difficulty: "medium",
      },
      {
        questionId: "q3",
        question: "Which MySQL keyword is used to sort the result set?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "ORDER BY", explanation: "Correct. The 'ORDER BY' keyword is used to sort the result set in MySQL." },
          { optionId: "b", answer: "SORT", explanation: "This is incorrect. 'SORT' is not a valid MySQL keyword." },
          { optionId: "c", answer: "GROUP BY", explanation: "This is incorrect. 'GROUP BY' is used to group records, not sort them." },
          { optionId: "d", answer: "FILTER BY", explanation: "This is incorrect. 'FILTER BY' is not a valid MySQL keyword." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'ORDER BY' sorts the result set in ascending or descending order in MySQL.",
          incorrect: "Oops! The correct answer is 'ORDER BY'.",
        },
        hint: "Use this keyword to order your query results.",
        difficulty: "medium",
      },
      {
        questionId: "q4",
        question: "Which MySQL statement is used to update data in a table?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "UPDATE", explanation: "Correct. The 'UPDATE' statement modifies existing records in a MySQL table." },
          { optionId: "b", answer: "SET", explanation: "This is incorrect. 'SET' is used within the 'UPDATE' statement but is not the statement itself." },
          { optionId: "c", answer: "MODIFY", explanation: "This is incorrect. 'MODIFY' is not used for updating records in MySQL." },
          { optionId: "d", answer: "INSERT", explanation: "This is incorrect. 'INSERT' is for adding new records, not updating them." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The 'UPDATE' statement modifies existing records in MySQL tables.",
          incorrect: "Oops! The correct answer is 'UPDATE'.",
        },
        hint: "This statement modifies existing records based on conditions.",
        difficulty: "medium",
      },
      {
        questionId: "q5",
        question: "What is the correct MySQL statement to delete a record from a table named 'Users'?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "DELETE FROM Users WHERE id = 1;", explanation: "Correct. The 'DELETE' statement removes specific records using the 'WHERE' clause in MySQL." },
          { optionId: "b", answer: "REMOVE FROM Users WHERE id = 1;", explanation: "This is incorrect. 'REMOVE' is not a valid MySQL keyword." },
          { optionId: "c", answer: "DROP FROM Users WHERE id = 1;", explanation: "This is incorrect. 'DROP' is used to delete entire tables or databases, not individual records." },
          { optionId: "d", answer: "DELETE RECORD FROM Users WHERE id = 1;", explanation: "This is incorrect. The correct syntax is 'DELETE FROM Users', not 'DELETE RECORD FROM'." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The 'DELETE FROM' statement removes records from a MySQL table based on conditions.",
          incorrect: "Oops! The correct answer is 'DELETE FROM Users WHERE id = 1;'.",
        },
        hint: "This statement deletes specific records from the table.",
        difficulty: "medium",
      },
    ],
  },



{
    quizId: "c123",
    title: "C Programming Quiz",
    description: "A quiz to test your C programming knowledge.",
    category: "Programming",
    image: "/images/c2.svg",
    language: "en",
    tags: ["c", "programming", "coding"],
    questions: [
      {
        questionId: "q1",
        question: "Which keyword is used to declare a variable in C?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "int", explanation: "Correct. 'int' is a data type used to declare an integer variable in C." },
          { optionId: "b", answer: "var", explanation: "This is incorrect. 'var' is not used in C for variable declaration." },
          { optionId: "c", answer: "declare", explanation: "This is incorrect. 'declare' is not a keyword in C." },
          { optionId: "d", answer: "define", explanation: "This is incorrect. 'define' is used for macros, not variable declaration." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'int' is used to declare an integer variable in C.",
          incorrect: "Oops! The correct answer is 'int'.",
        },
        hint: "C uses specific data types to declare variables.",
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "What is the correct syntax for printing a message in C?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "printf(\"Hello, World!\");", explanation: "Correct. 'printf' is the function used to print messages in C." },
          { optionId: "b", answer: "print(\"Hello, World!\");", explanation: "This is incorrect. 'print' is not a function in C." },
          { optionId: "c", answer: "cout << \"Hello, World!\";", explanation: "This is incorrect. 'cout' is used in C++, not C." },
          { optionId: "d", answer: "write(\"Hello, World!\");", explanation: "This is incorrect. 'write' is not a standard C function for printing messages." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'printf' is the standard function for printing in C.",
          incorrect: "Oops! The correct answer is 'printf(\"Hello, World!\");'.",
        },
        hint: "Look for a function commonly used for output in C.",
        difficulty: "easy",
      },
      {
        questionId: "q3",
        question: "Which operator is used to access the value of a pointer in C?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "*", explanation: "Correct. The '*' operator is used to dereference a pointer in C." },
          { optionId: "b", answer: "&", explanation: "This is incorrect. '&' is used to get the address of a variable, not its value." },
          { optionId: "c", answer: "->", explanation: "This is incorrect. '->' is used for accessing members of a structure via a pointer." },
          { optionId: "d", answer: ".", explanation: "This is incorrect. '.' is used for accessing members of a structure, not pointer values." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The '*' operator is used to dereference a pointer and access its value.",
          incorrect: "Oops! The correct answer is '*'.",
        },
        hint: "This operator is used to dereference pointers.",
        difficulty: "medium",
      },
      {
        questionId: "q4",
        question: "Which header file is required to use the 'printf' function in C?",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "<stdio.h>", explanation: "Correct. The 'stdio.h' header file includes the declaration of 'printf'." },
          { optionId: "b", answer: "<stdlib.h>", explanation: "This is incorrect. 'stdlib.h' is used for standard library functions, but not for 'printf'." },
          { optionId: "c", answer: "<string.h>", explanation: "This is incorrect. 'string.h' is used for string manipulation functions." },
          { optionId: "d", answer: "<math.h>", explanation: "This is incorrect. 'math.h' is used for mathematical functions." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The 'stdio.h' header file is required for 'printf'.",
          incorrect: "Oops! The correct answer is '<stdio.h>'.",
        },
        hint: "This header file contains standard input-output functions.",
        difficulty: "medium",
      },
      {
        questionId: "q5",
        question: "What is the output of the following code? \n\nint x = 5, y = 10; \nprintf(\"%d\", x + y);",
        questionType: "multiple-choice",
        options: [
          { optionId: "a", answer: "15", explanation: "Correct. 'x + y' results in 15, which is printed by 'printf'." },
          { optionId: "b", answer: "510", explanation: "This is incorrect. The '+' operator performs addition, not concatenation in C." },
          { optionId: "c", answer: "5", explanation: "This is incorrect. Only the sum is printed, not the individual variable values." },
          { optionId: "d", answer: "Compilation error", explanation: "This is incorrect. The code is valid and does not cause a compilation error." },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! The sum of 5 and 10 is 15, which is printed.",
          incorrect: "Oops! The correct answer is '15'.",
        },
        hint: "The '+' operator adds two integers.",
        difficulty: "medium",
      }
    ],
  },


  {
    quizId: "mongodb123",
    title: "MongoDB Quiz",
    description: "A quiz to test your MongoDB knowledge.",
    category: "Database",
    image: "/images/mongodb.svg",
    language: "en",
    tags: ["mongodb", "database", "NoSQL"],
    questions: [
        {
            questionId: "q1",
            question: "What type of database is MongoDB?",
            questionType: "multiple-choice",
            options: [
                { optionId: "a", answer: "NoSQL", explanation: "Correct. MongoDB is a NoSQL database." },
                { optionId: "b", answer: "Relational", explanation: "This is incorrect. MongoDB is a NoSQL, not a relational database." },
                { optionId: "c", answer: "Key-Value", explanation: "This is incorrect. MongoDB is not a key-value store." },
                { optionId: "d", answer: "Document-based", explanation: "This is correct, MongoDB is document-based but is categorized under NoSQL." }
            ],
            correctAnswer: "a",
            feedback: {
                correct: "Correct! MongoDB is a NoSQL database.",
                incorrect: "Oops! The correct answer is 'NoSQL'."
            },
            hint: "MongoDB is designed to handle large-scale, distributed, and unstructured data.",
            difficulty: "easy"
        },
        {
            questionId: "q2",
            question: "Which of the following is the default port for MongoDB?",
            questionType: "multiple-choice",
            options: [
                { optionId: "a", answer: "27017", explanation: "Correct. The default port for MongoDB is 27017." },
                { optionId: "b", answer: "3306", explanation: "This is incorrect. Port 3306 is used for MySQL." },
                { optionId: "c", answer: "5432", explanation: "This is incorrect. Port 5432 is used for PostgreSQL." },
                { optionId: "d", answer: "8080", explanation: "This is incorrect. Port 8080 is commonly used for web servers." }
            ],
            correctAnswer: "a",
            feedback: {
                correct: "Correct! The default port for MongoDB is 27017.",
                incorrect: "Oops! The correct answer is '27017'."
            },
            hint: "Check the default port MongoDB uses for connections.",
            difficulty: "easy"
        },
        {
            questionId: "q3",
            question: "Which MongoDB operation is used to insert a document into a collection?",
            questionType: "multiple-choice",
            options: [
                { optionId: "a", answer: "insertOne()", explanation: "Correct. 'insertOne()' is used to insert a single document into a collection." },
                { optionId: "b", answer: "add()", explanation: "This is incorrect. 'add()' is not a MongoDB operation." },
                { optionId: "c", answer: "insertMany()", explanation: "This is incorrect. 'insertMany()' is used for inserting multiple documents, not a single one." },
                { optionId: "d", answer: "create()", explanation: "This is incorrect. 'create()' is not a valid MongoDB operation." }
            ],
            correctAnswer: "a",
            feedback: {
                correct: "Correct! 'insertOne()' is used to insert a single document into a collection.",
                incorrect: "Oops! The correct answer is 'insertOne()'."
            },
            hint: "Look for the method that inserts a single document into the collection.",
            difficulty: "medium"
        },
        {
            questionId: "q4",
            question: "Which method is used to retrieve data from a MongoDB collection?",
            questionType: "multiple-choice",
            options: [
                { optionId: "a", answer: "find()", explanation: "Correct. 'find()' is used to retrieve data from a MongoDB collection." },
                { optionId: "b", answer: "select()", explanation: "This is incorrect. 'select()' is not a MongoDB method." },
                { optionId: "c", answer: "get()", explanation: "This is incorrect. 'get()' is not used in MongoDB to retrieve data." },
                { optionId: "d", answer: "retrieve()", explanation: "This is incorrect. 'retrieve()' is not a MongoDB method." }
            ],
            correctAnswer: "a",
            feedback: {
                correct: "Correct! 'find()' is used to retrieve data from a MongoDB collection.",
                incorrect: "Oops! The correct answer is 'find()'."
            },
            hint: "Look for the method that retrieves documents from a collection.",
            difficulty: "medium"
        },
        {
            questionId: "q5",
            question: "Which operator is used to specify a condition in MongoDB queries?",
            questionType: "multiple-choice",
            options: [
                { optionId: "a", answer: "$eq", explanation: "Correct. The '$eq' operator is used to specify a condition for equality." },
                { optionId: "b", answer: "$gt", explanation: "This is incorrect. '$gt' is used for greater than condition." },
                { optionId: "c", answer: "$lt", explanation: "This is incorrect. '$lt' is used for less than condition." },
                { optionId: "d", answer: "$ne", explanation: "This is incorrect. '$ne' is used for 'not equal' condition." }
            ],
            correctAnswer: "a",
            feedback: {
                correct: "Correct! The '$eq' operator specifies equality condition in MongoDB queries.",
                incorrect: "Oops! The correct answer is '$eq'."
            },
            hint: "Look for the operator used for equality in MongoDB queries.",
            difficulty: "hard"
        },
    ],
},

  
{
    quizId: "html123",
    title: "HTML Quiz",
    description: "A quiz to test your HTML knowledge.",
    category: "Web Development",
    image: "/images/html5.svg",
    language: "en",
    tags: ["html", "web development", "coding"],
    questions: [
        {
            questionId: "q1",
            question: "What does HTML stand for?",
            questionType: "multiple-choice",
            options: [
                { optionId: "a", answer: "Hyper Text Markup Language", explanation: "Correct. HTML stands for Hyper Text Markup Language." },
                { optionId: "b", answer: "Home Tool Markup Language", explanation: "This is incorrect. HTML stands for Hyper Text Markup Language." },
                { optionId: "c", answer: "Hyperlinks and Text Markup Language", explanation: "This is incorrect. The correct answer is 'Hyper Text Markup Language.'" },
                { optionId: "d", answer: "Hyper Text Making Language", explanation: "This is incorrect. HTML stands for Hyper Text Markup Language." }
            ],
            correctAnswer: "a",
            feedback: {
                correct: "Correct! HTML stands for Hyper Text Markup Language.",
                incorrect: "Oops! The correct answer is 'Hyper Text Markup Language'."
            },
            hint: "Think of the core purpose of HTML in web development.",
            difficulty: "easy"
        },
        {
            questionId: "q2",
            question: "Which of the following is the correct syntax to link an external CSS file to an HTML document?",
            questionType: "multiple-choice",
            options: [
                { optionId: "a", answer: "<link rel='stylesheet' href='styles.css'>", explanation: "Correct. This is the proper way to link a CSS file to an HTML document." },
                { optionId: "b", answer: "<link href='styles.css' rel='stylesheet'>", explanation: "This is incorrect. The order of attributes should be 'rel' first, then 'href'." },
                { optionId: "c", answer: "<style src='styles.css'>", explanation: "This is incorrect. 'style' is used to define internal CSS, not link to external CSS." },
                { optionId: "d", answer: "<css link='styles.css'>", explanation: "This is incorrect. 'css' is not a valid HTML tag." }
            ],
            correctAnswer: "a",
            feedback: {
                correct: "Correct! '<link rel='stylesheet' href='styles.css'>' is the correct way to link an external CSS file.",
                incorrect: "Oops! The correct answer is '<link rel='stylesheet' href='styles.css'>'"
            },
            hint: "Look for the tag that links external resources in HTML.",
            difficulty: "medium"
        },
        {
            questionId: "q3",
            question: "Which tag is used to define an ordered list in HTML?",
            questionType: "multiple-choice",
            options: [
                { optionId: "a", answer: "<ol>", explanation: "Correct. The '<ol>' tag is used to define an ordered list." },
                { optionId: "b", answer: "<ul>", explanation: "This is incorrect. The '<ul>' tag is used for unordered lists." },
                { optionId: "c", answer: "<list>", explanation: "This is incorrect. '<list>' is not a valid HTML tag." },
                { optionId: "d", answer: "<li>", explanation: "This is incorrect. The '<li>' tag is used for list items, not for the list itself." }
            ],
            correctAnswer: "a",
            feedback: {
                correct: "Correct! '<ol>' is used to define an ordered list in HTML.",
                incorrect: "Oops! The correct answer is '<ol>'."
            },
            hint: "Think about the tag used for numbering items in a list.",
            difficulty: "easy"
        },
        {
            questionId: "q4",
            question: "Which HTML tag is used to define a hyperlink?",
            questionType: "multiple-choice",
            options: [
                { optionId: "a", answer: "<a>", explanation: "Correct. The '<a>' tag is used to define a hyperlink." },
                { optionId: "b", answer: "<link>", explanation: "This is incorrect. '<link>' is used for linking external resources like CSS." },
                { optionId: "c", answer: "<url>", explanation: "This is incorrect. '<url>' is not a valid HTML tag." },
                { optionId: "d", answer: "<hyperlink>", explanation: "This is incorrect. '<hyperlink>' is not a valid HTML tag." }
            ],
            correctAnswer: "a",
            feedback: {
                correct: "Correct! The '<a>' tag is used to define a hyperlink.",
                incorrect: "Oops! The correct answer is '<a>'."
            },
            hint: "This tag is used to link to other pages or resources.",
            difficulty: "medium"
        },
        {
            questionId: "q5",
            question: "Which of the following is the correct HTML element for the largest heading?",
            questionType: "multiple-choice",
            options: [
                { optionId: "a", answer: "<h1>", explanation: "Correct. The '<h1>' tag is used for the largest heading in HTML." },
                { optionId: "b", answer: "<heading>", explanation: "This is incorrect. '<heading>' is not a valid HTML tag." },
                { optionId: "c", answer: "<h6>", explanation: "This is incorrect. '<h6>' is used for the smallest heading." },
                { optionId: "d", answer: "<head>", explanation: "This is incorrect. '<head>' is used to contain metadata, not headings." }
            ],
            correctAnswer: "a",
            feedback: {
                correct: "Correct! The '<h1>' tag defines the largest heading.",
                incorrect: "Oops! The correct answer is '<h1>'."
            },
            hint: "This tag represents the largest heading in HTML.",
            difficulty: "medium"
        },
    ],
},


];