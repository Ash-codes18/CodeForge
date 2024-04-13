// Initialize CodeMirror instance
var solutionEditor = CodeMirror.fromTextArea(document.getElementById("solution"), {
    lineNumbers: true,
    mode: "javascript", 
    lint: true, 
    gutters: ["CodeMirror-lint-markers"] 
});

// Language Dropdown Change Event
document.getElementById("language").addEventListener("change", function() {
    var selectedLanguage = this.value;
    solutionEditor.setOption("mode", selectedLanguage);
    solutionEditor.setOption("lint", selectedLanguage === "javascript"); 
});


document.getElementById("submitBtn").addEventListener("click", function() {
    var solutionCode = solutionEditor.getValue();

    console.log("Submitting solution code:", solutionCode);
});