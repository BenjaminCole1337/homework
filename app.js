// Sample homework data structure
// In a real application, this would come from a database
const homeworkData = {
    algebra1: {
        title: 'Algebra I',
        questions: [
            {
                id: 1,
                text: 'Solve for \\(x\\): \\(2x + 5 = 13\\)',
            },
            {
                id: 2,
                text: 'Factor the expression: \\(x^2 + 5x + 6\\)',
            },
            {
                id: 3,
                text: 'Simplify: \\(\\frac{3x^2 + 6x}{3x}\\)',
            }
        ]
    },
    geometry: {
        title: 'Geometry',
        questions: [
            {
                id: 1,
                text: 'Find the area of a circle with radius \\(r = 5\\) cm. Use \\(\\pi \\approx 3.14\\)',
            },
            {
                id: 2,
                text: 'A triangle has sides of length 3 cm, 4 cm, and 5 cm. Is this a right triangle? Explain using the Pythagorean theorem: \\(a^2 + b^2 = c^2\\)',
            },
            {
                id: 3,
                text: 'Calculate the volume of a rectangular prism with dimensions: length = 6 cm, width = 4 cm, height = 3 cm',
            }
        ]
    },
    algebra2: {
        title: 'Algebra II',
        questions: [
            {
                id: 1,
                text: 'Solve the quadratic equation using the quadratic formula: \\(x^2 - 4x + 3 = 0\\). Recall: \\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)',
            },
            {
                id: 2,
                text: 'Simplify the expression: \\(\\log_2(8) + \\log_2(4)\\)',
            },
            {
                id: 3,
                text: 'Find the vertex of the parabola: \\(f(x) = 2x^2 - 8x + 5\\)',
            }
        ]
    },
    precalculus: {
        title: 'Pre-Calculus',
        questions: [
            {
                id: 1,
                text: 'Find the exact value of \\(\\sin\\left(\\frac{\\pi}{6}\\right)\\)',
            },
            {
                id: 2,
                text: 'Evaluate the limit: \\(\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}\\)',
            },
            {
                id: 3,
                text: 'Convert from polar to rectangular coordinates: \\((r, \\theta) = (5, \\frac{\\pi}{4})\\)',
            }
        ]
    },
    calculus: {
        title: 'Calculus',
        questions: [
            {
                id: 1,
                text: 'Find the derivative: \\(f(x) = 3x^3 - 2x^2 + 5x - 1\\)',
            },
            {
                id: 2,
                text: 'Evaluate the integral: \\(\\int (2x + 3) \\, dx\\)',
            },
            {
                id: 3,
                text: 'Find the area under the curve \\(y = x^2\\) from \\(x = 0\\) to \\(x = 2\\)',
            }
        ]
    },
    statistics: {
        title: 'Statistics',
        questions: [
            {
                id: 1,
                text: 'Calculate the mean of the following data set: 12, 15, 18, 20, 25, 30',
            },
            {
                id: 2,
                text: 'Find the standard deviation of the data set: 5, 10, 15, 20, 25. Use the formula: \\(\\sigma = \\sqrt{\\frac{\\sum(x_i - \\mu)^2}{n}}\\)',
            },
            {
                id: 3,
                text: 'A normal distribution has mean \\(\\mu = 100\\) and standard deviation \\(\\sigma = 15\\). What is the z-score for \\(x = 130\\)? Use: \\(z = \\frac{x - \\mu}{\\sigma}\\)',
            }
        ]
    }
};

// Load homework for a specific class
function loadHomework(className) {
    const classData = homeworkData[className];
    
    if (!classData) {
        console.error('Class not found:', className);
        return;
    }
    
    // Hide class selection, show homework section
    document.getElementById('class-selection').classList.add('hidden');
    document.getElementById('homework-section').classList.remove('hidden');
    
    // Set title
    document.getElementById('homework-title').textContent = classData.title + ' Homework';
    
    // Generate questions
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';
    
    classData.questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <div class="question-number">Question ${question.id}</div>
            <div class="question-text">${question.text}</div>
            <div class="answer-section">
                <label for="answer-${question.id}">Your Answer:</label>
                <textarea 
                    id="answer-${question.id}" 
                    class="answer-input" 
                    placeholder="Type your answer here. You can use LaTeX notation like $x^2$ or \\(x^2\\) for math expressions."
                    oninput="updatePreview(${question.id})"
                ></textarea>
                <div class="latex-hint">
                    💡 Tip: Use $ or \\( \\) for inline LaTeX. Example: $\\frac{x^2}{2}$ or \\(\\alpha + \\beta\\)
                </div>
                <span class="preview-label">Preview:</span>
                <div id="preview-${question.id}" class="latex-preview"></div>
            </div>
        `;
        questionsContainer.appendChild(questionDiv);
    });
    
    // Add submit button
    const submitBtn = document.createElement('button');
    submitBtn.className = 'submit-btn';
    submitBtn.textContent = 'Submit Homework';
    submitBtn.onclick = submitHomework;
    questionsContainer.appendChild(submitBtn);
    
    // Re-render MathJax for the questions
    if (window.MathJax) {
        MathJax.typesetPromise().catch((err) => console.log('MathJax error:', err));
    }
}

// Update LaTeX preview for an answer
function updatePreview(questionId) {
    const answerInput = document.getElementById(`answer-${questionId}`);
    const preview = document.getElementById(`preview-${questionId}`);
    
    if (!answerInput || !preview) return;
    
    const text = answerInput.value;
    
    // Convert the text to display in the preview
    // Replace single $ with \( \) for inline math
    let processedText = text;
    
    // Handle inline LaTeX
    processedText = processedText.replace(/\$([^$]+)\$/g, '\\($1\\)');
    
    preview.innerHTML = processedText || '<em>Your answer will appear here...</em>';
    
    // Re-render MathJax for the preview
    if (window.MathJax) {
        MathJax.typesetPromise([preview]).catch((err) => console.log('MathJax preview error:', err));
    }
}

// Submit homework
function submitHomework() {
    const answers = {};
    const inputs = document.querySelectorAll('.answer-input');
    
    inputs.forEach(input => {
        const questionId = input.id.replace('answer-', '');
        answers[questionId] = input.value;
    });
    
    // In a real application, this would send the answers to a server
    console.log('Submitted answers:', answers);
    
    alert('Homework submitted successfully! ✓\n\nYour answers have been recorded. In a production application, these would be sent to your teacher for grading.');
}

// Go back to class selection
function backToClassSelection() {
    document.getElementById('homework-section').classList.add('hidden');
    document.getElementById('class-selection').classList.remove('hidden');
}

// Initialize MathJax configuration
window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
    }
};
