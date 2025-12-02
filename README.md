# 🎓 MCA Practice Hub

A comprehensive, web-based study companion designed for MCA (Master of Computer Applications) students. This platform provides an interactive way to view syllabi, study module-wise topics, and practice with timed MCQ quizzes.

🔗 **[Live Demo](https://sanjib-d.github.io/CU_MCQ_Practice/)**

## ✨ Key Features

* **📱 Responsive Design:** Optimized for both mobile and desktop views.
* **🌙 Dark/Light Mode:** Built-in theme toggler for comfortable reading at any time.
* **⏱️ Interactive Quiz Engine:**
    * **Timed Tests:** Simulate exam conditions.
    * **Immediate Feedback:** Option to see results question-by-question or at the end.
    * **Detailed Analysis:** Review correct answers and explanations after the test.
* **📖 Study Mode:** Browse questions, answers, and explanations without the pressure of a timer.
* **🔗 Deep Linking:** Share direct links to specific semesters, subjects, or specializations (e.g., `?subject=24ONMCH604`).
* **📂 Organized Content:** Hierarchical navigation (Stream → Semester → Specialization → Subject).

## 🛠️ Tech Stack

* **HTML5** - Semantic structure.
* **CSS3** - Custom styling with CSS Variables for theming.
* **JavaScript (ES6+)** - Vanilla JS for routing, quiz logic, and DOM manipulation.
* **JSON** - Data storage for questions and syllabus.
---

## 📂 Project Structure

```text
├── data/                  # JSON files containing questions for each subject
│   ├── 24ONMCH706.json    # Subject Data
│   └── ...
├── js/
│   ├── app.js             # Main routing and UI logic
│   ├── quiz-engine.js     # Quiz logic, timer, and score calculation
│   └── syllabus-data.js   # Navigation hierarchy (Semesters/Subjects)
├── style.css              # Main stylesheet and themes
├── index.html             # Entry point
└── README.md              # Project documentation
```
---
## 📝 How to Add New Questions

To add a new subject or new questions, follow these steps:

1.  **Update Navigation:**
    Open `js/syllabus-data.js` and add the new subject code and name under the relevant semester.

2.  **Create Data File:**
    Create a new `.json` file in the `data/` folder matching the subject code (e.g., `DATA101.json`).

3.  **Add Questions:**
    Use the following format for the JSON file:

    ```json
    [
      {
        "id": 1,
        "chapter": 1,
        "question": "What does HTML stand for?",
        "options": [
          "Hyper Text Preprocessor",
          "Hyper Text Markup Language",
          "Hyper Tool Multi Language",
          "Hyper Text Multiple Language"
        ],
        "answerIndex": 1,
        "explanation": "HTML stands for Hyper Text Markup Language. It is the standard markup language for documents designed to be displayed in a web browser."
      }
    ]
    ```

## 👤 Author

Made with ❤️ by **Sanjib**

* **GitHub:** [Sanjib Das](https://github.com/sanjib-d)
