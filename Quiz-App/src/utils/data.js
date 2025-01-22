export const quizes = [
  {
    quizId: "abcd",
    title: "General Knowledge Quiz",
    description: "A basic quiz to test your general knowledge.",
    category: "General Knowledge",
    language: "en",
    tags: ["geography", "history", "science"],
    questions: [
      {
        questionId: "q1",
        question: "What is the capital of France?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Berlin",
            explanation: "Capital of Germany",
          },
          { optionId: "b", answer: "Madrid", explanation: "Capital of Spain" },
          { optionId: "c", answer: "Paris", explanation: "Capital of France" },
          { optionId: "d", answer: "Rome", explanation: "Capital of Italy" },
        ],
        correctAnswer: "c",
        feedback: {
          correct: "Great job! Paris is the capital of France.",
          incorrect: "Oops! The correct answer is Paris.",
        },
        hint: "It’s a European city.",
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "Which planet is known as the Red Planet?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Venus",
            explanation: "Known for its thick atmosphere.",
          },
          {
            optionId: "b",
            answer: "Mars",
            explanation: "Known as the Red Planet.",
          },
          {
            optionId: "c",
            answer: "Jupiter",
            explanation: "Largest planet in the solar system.",
          },
          {
            optionId: "d",
            answer: "Saturn",
            explanation: "Famous for its rings.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Mars is known as the Red Planet.",
          incorrect: "Oops! The correct answer is Mars.",
        },
        hint: "It has a reddish appearance.",
      },
    ],
  },
  {
    quizId: "efgh",
    title: "Science Quiz",
    description: "Test your knowledge on basic science concepts.",
    category: "Science",
    language: "en",
    tags: ["physics", "biology", "chemistry"],
    questions: [
      {
        questionId: "q1",
        question: "What is the smallest planet in our solar system?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Mercury",
            explanation: "The smallest and closest planet to the Sun.",
          },
          {
            optionId: "b",
            answer: "Venus",
            explanation: "Second planet from the Sun.",
          },
          {
            optionId: "c",
            answer: "Earth",
            explanation: "Third planet from the Sun.",
          },
          {
            optionId: "d",
            answer: "Mars",
            explanation: "Fourth planet from the Sun.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! Mercury is the smallest planet.",
          incorrect: "Oops! The correct answer is Mercury.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q2",
        question: "Who developed the theory of relativity?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Isaac Newton",
            explanation: "Known for laws of motion and gravity.",
          },
          {
            optionId: "b",
            answer: "Galileo Galilei",
            explanation: "Pioneered the use of the telescope.",
          },
          {
            optionId: "c",
            answer: "Albert Einstein",
            explanation: "Developed the theory of relativity.",
          },
          {
            optionId: "d",
            answer: "Nikola Tesla",
            explanation: "Known for his work on alternating current.",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct:
            "Correct! Albert Einstein developed the theory of relativity.",
          incorrect: "Oops! The correct answer is Albert Einstein.",
        },
        difficulty: "hard",
      },
    ],
  },
  {
    quizId: "ijkl",
    title: "World History Quiz",
    description: "Test your knowledge of world history.",
    category: "History",
    language: "en",
    tags: ["ancient", "medieval", "modern"],
    questions: [
      {
        questionId: "q1",
        question: "Who was the first president of the United States?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "George Washington",
            explanation: "He served as the first president from 1789 to 1797.",
          },
          {
            optionId: "b",
            answer: "Thomas Jefferson",
            explanation:
              "Third president of the U.S., known for writing the Declaration of Independence.",
          },
          {
            optionId: "c",
            answer: "Abraham Lincoln",
            explanation:
              "Sixteenth president, known for the Emancipation Proclamation.",
          },
          {
            optionId: "d",
            answer: "James Madison",
            explanation: "Fourth president, known for the War of 1812.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! George Washington was the first president.",
          incorrect: "Oops! The correct answer is George Washington.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "What year did World War II end?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "1941",
            explanation:
              "U.S. entered World War II in 1941, but the war continued.",
          },
          {
            optionId: "b",
            answer: "1945",
            explanation:
              "World War II ended in 1945 after the defeat of Germany and Japan.",
          },
          {
            optionId: "c",
            answer: "1950",
            explanation:
              "The Korean War started in 1950, but World War II ended in 1945.",
          },
          {
            optionId: "d",
            answer: "1939",
            explanation:
              "World War II began in 1939, but did not end until 1945.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! World War II ended in 1945.",
          incorrect: "Oops! The correct answer is 1945.",
        },
        difficulty: "medium",
      },
    ],
  },
  {
    quizId: "mnop",
    title: "Geography Quiz",
    description: "How well do you know the world’s geography?",
    category: "Geography",
    language: "en",
    tags: ["countries", "capitals", "landmarks"],
    questions: [
      {
        questionId: "q1",
        question: "Which is the largest country in the world by area?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "China",
            explanation:
              "China is the most populous country, but not the largest by area.",
          },
          {
            optionId: "b",
            answer: "Canada",
            explanation: "Canada is the second-largest country by area.",
          },
          {
            optionId: "c",
            answer: "Russia",
            explanation:
              "Russia is the largest country in the world by land area.",
          },
          {
            optionId: "d",
            answer: "United States",
            explanation: "The U.S. is large, but not the largest by area.",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct: "Correct! Russia is the largest country by area.",
          incorrect: "Oops! The correct answer is Russia.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "What is the capital of Australia?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Sydney",
            explanation: "Sydney is the most famous city, but not the capital.",
          },
          {
            optionId: "b",
            answer: "Melbourne",
            explanation: "Melbourne is a major city, but not the capital.",
          },
          {
            optionId: "c",
            answer: "Canberra",
            explanation: "Canberra is the capital city of Australia.",
          },
          {
            optionId: "d",
            answer: "Brisbane",
            explanation:
              "Brisbane is a large city in Australia, but not the capital.",
          },
        ],
        correctAnswer: "c",
        feedback: {
          correct: "Correct! Canberra is the capital of Australia.",
          incorrect: "Oops! The correct answer is Canberra.",
        },
        difficulty: "medium",
      },
    ],
  },
  {
    quizId: "qrst",
    title: "Famous People Quiz",
    description: "How well do you know the famous personalities from history?",
    category: "Famous People",
    language: "en",
    tags: ["history", "celebrities", "leaders"],
    questions: [
      {
        questionId: "q1",
        question:
          "Who was the first woman to fly solo across the Atlantic Ocean?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Amelia Earhart",
            explanation: "Amelia Earhart made history with her solo flight.",
          },
          {
            optionId: "b",
            answer: "Marie Curie",
            explanation: "Marie Curie was a pioneering scientist, not a pilot.",
          },
          {
            optionId: "c",
            answer: "Harriet Tubman",
            explanation:
              "Harriet Tubman was a key figure in the abolition movement.",
          },
          {
            optionId: "d",
            answer: "Rosie the Riveter",
            explanation:
              "Rosie the Riveter is an iconic symbol, not a historical person.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct:
            "Correct! Amelia Earhart was the first woman to fly solo across the Atlantic.",
          incorrect: "Oops! The correct answer is Amelia Earhart.",
        },
        difficulty: "medium",
      },
      {
        questionId: "q2",
        question: "Who is known as the 'Father of India'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Jawaharlal Nehru",
            explanation:
              "Nehru was India's first Prime Minister, but not the 'Father of India'.",
          },
          {
            optionId: "b",
            answer: "Mahatma Gandhi",
            explanation:
              "Mahatma Gandhi is known as the 'Father of India' for his role in the independence movement.",
          },
          {
            optionId: "c",
            answer: "Subhas Chandra Bose",
            explanation:
              "Bose was a prominent leader but not referred to as the 'Father of India'.",
          },
          {
            optionId: "d",
            answer: "Bhagat Singh",
            explanation:
              "Bhagat Singh was a revolutionary, but not known as the 'Father of India'.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Mahatma Gandhi is known as the 'Father of India'.",
          incorrect: "Oops! The correct answer is Mahatma Gandhi.",
        },
        difficulty: "medium",
      },
    ],
  },
  {
    quizId: "uvwx",
    title: "Music Quiz",
    description: "Test your knowledge about famous musicians and songs.",
    category: "Music",
    language: "en",
    tags: ["artists", "albums", "songs"],
    questions: [
      {
        questionId: "q1",
        question: "Who is known as the 'King of Pop'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "Elvis Presley",
            explanation: "Elvis was known as the 'King of Rock and Roll'.",
          },
          {
            optionId: "b",
            answer: "Michael Jackson",
            explanation:
              "Michael Jackson is widely known as the 'King of Pop'.",
          },
          {
            optionId: "c",
            answer: "Prince",
            explanation:
              "Prince was a music icon but known as 'The Artist Formerly Known As'.",
          },
          {
            optionId: "d",
            answer: "Whitney Houston",
            explanation:
              "Whitney was a legendary singer but not known as the 'King of Pop'.",
          },
        ],
        correctAnswer: "b",
        feedback: {
          correct: "Correct! Michael Jackson is the 'King of Pop'.",
          incorrect: "Oops! The correct answer is Michael Jackson.",
        },
        difficulty: "easy",
      },
      {
        questionId: "q2",
        question: "Which band wrote the hit song 'Hey Jude'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "The Beatles",
            explanation:
              "The Beatles wrote 'Hey Jude', one of their most famous songs.",
          },
          {
            optionId: "b",
            answer: "The Rolling Stones",
            explanation:
              "The Rolling Stones are famous, but they did not write 'Hey Jude'.",
          },
          {
            optionId: "c",
            answer: "Led Zeppelin",
            explanation:
              "Led Zeppelin is known for classic rock, but not for 'Hey Jude'.",
          },
          {
            optionId: "d",
            answer: "Queen",
            explanation:
              "Queen is a legendary band, but 'Hey Jude' was written by The Beatles.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! 'Hey Jude' was written by The Beatles.",
          incorrect: "Oops! The correct answer is The Beatles.",
        },
        difficulty: "medium",
      },
    ],
  },
  {
    quizId: "yzab",
    title: "Literature Quiz",
    description:
      "Test your knowledge on famous authors and works of literature.",
    category: "Literature",
    language: "en",
    tags: ["authors", "novels", "poetry"],
    questions: [
      {
        questionId: "q1",
        question: "Who wrote the novel '1984'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "George Orwell",
            explanation:
              "Orwell is famous for writing '1984', a dystopian novel.",
          },
          {
            optionId: "b",
            answer: "Aldous Huxley",
            explanation: "Huxley wrote 'Brave New World', not '1984'.",
          },
          {
            optionId: "c",
            answer: "Ray Bradbury",
            explanation: "Bradbury wrote 'Fahrenheit 451', not '1984'.",
          },
          {
            optionId: "d",
            answer: "J.R.R. Tolkien",
            explanation:
              "Tolkien is famous for 'The Lord of the Rings', not '1984'.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct: "Correct! '1984' was written by George Orwell.",
          incorrect: "Oops! The correct answer is George Orwell.",
        },
        difficulty: "hard",
      },
      {
        questionId: "q2",
        question: "Which novel features the character 'Atticus Finch'?",
        questionType: "multiple-choice",
        options: [
          {
            optionId: "a",
            answer: "To Kill a Mockingbird",
            explanation:
              "Atticus Finch is a central character in 'To Kill a Mockingbird'.",
          },
          {
            optionId: "b",
            answer: "Pride and Prejudice",
            explanation: "Atticus Finch is not a character in this novel.",
          },
          {
            optionId: "c",
            answer: "The Great Gatsby",
            explanation:
              "Atticus Finch is not a character in 'The Great Gatsby'.",
          },
          {
            optionId: "d",
            answer: "Moby-Dick",
            explanation: "Atticus Finch is not in 'Moby-Dick'.",
          },
        ],
        correctAnswer: "a",
        feedback: {
          correct:
            "Correct! Atticus Finch is a character in 'To Kill a Mockingbird'.",
          incorrect: "Oops! The correct answer is 'To Kill a Mockingbird'.",
        },
        difficulty: "medium",
      },
    ],
  },
];