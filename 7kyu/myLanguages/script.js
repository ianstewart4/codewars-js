// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

// My solution

function myLanguages(results) {
    const passingGrades = Object.values(results).sort((a, b) => b - a).filter(grade => grade >= 60)
    const passingClasses = []
    for (let i = 0; i < passingGrades.length; i++) {
        passingClasses.push(Object.keys(results).find(key => results[key] === passingGrades[i]))
    }
    return passingClasses
}