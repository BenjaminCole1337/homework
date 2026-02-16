# Math Homework Portal 📚

A web-based platform for students to access and complete math homework assignments with LaTeX support.

## Features

- **Class Selection**: Students can choose from multiple math classes (Algebra I, Geometry, Algebra II, Pre-Calculus, Calculus, Statistics)
- **LaTeX Questions**: Teachers can write questions using LaTeX mathematical notation
- **Flexible Answers**: Students can respond using either:
  - Regular text
  - LaTeX mathematical notation (inline with `$...$` or `\(...\)`)
- **Live Preview**: Real-time rendering of LaTeX in student answers
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Usage

### For Students

1. Open `index.html` in a web browser
2. Select your class from the available options
3. Read the questions (written in LaTeX by your teacher)
4. Type your answers in the text boxes
   - Use regular text for simple answers
   - Use LaTeX notation for mathematical expressions (e.g., `$x^2 + 5x + 6$`)
5. View the live preview of your answer below each question
6. Click "Submit Homework" when finished

### For Teachers

To add or modify homework questions, edit the `homeworkData` object in `app.js`:

```javascript
const homeworkData = {
    className: {
        title: 'Class Name',
        questions: [
            {
                id: 1,
                text: 'Question text with LaTeX: \\(x^2 + y^2 = r^2\\)',
            },
            // Add more questions...
        ]
    }
};
```

### LaTeX Examples

Students can use LaTeX notation in their answers:
- Fractions: `$\frac{x}{y}$` → $\frac{x}{y}$
- Exponents: `$x^2$` → $x^2$
- Square roots: `$\sqrt{x}$` → $\sqrt{x}$
- Greek letters: `$\alpha, \beta, \gamma$` → $\alpha, \beta, \gamma$
- Integrals: `$\int x dx$` → $\int x dx$
- Sums: `$\sum_{i=1}^{n} i$` → $\sum_{i=1}^{n} i$

## Technology Stack

- **HTML5**: Structure
- **CSS3**: Styling with modern gradients and responsive design
- **JavaScript**: Interactive functionality
- **MathJax 3**: LaTeX rendering engine

## Getting Started

Simply open `index.html` in any modern web browser. No build process or server required!

For local development:
```bash
# Option 1: Use Python's built-in server
python3 -m http.server 8000

# Option 2: Use Node.js http-server
npx http-server

# Then open http://localhost:8000 in your browser
```

## Browser Compatibility

Works with all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Future Enhancements

Potential additions for production use:
- User authentication (student/teacher login)
- Database integration for storing questions and answers
- Grading system for teachers
- Assignment deadlines and scheduling
- File upload support for written work
- Collaboration features
- Analytics and progress tracking
