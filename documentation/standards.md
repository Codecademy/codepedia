# Codepedia Style Guide

## Content Types

Codepedia content will fall into two categories:

#### Encyclopedia Entries

1+ paragraph long explanations of a coding concept. Think of them like shorter Wikipedia pages.
  - For example, check out the [What is Loop?](https://codecademy.github.io/codepedia/entries/loops/) encyclopedia entry and the [Loops in JavaScript](https://codecademy.github.io/codepedia/entries/loops/JavaScript) on our demo site!

#### Glossary Entries

Short lists of key information about a specific function, keyword, tag, or other grouping. 
  - For an example of what we're going for, check out this entry on W3Schools about the abs() function in Python.
  - Notably, glossary entries will be grouped into glossaries, or tables of glossary entries on the same subject, rather than occupying pages of their own. 

## Editorial Standards

All entries should consist of two parts:

- The content itself, written in Markdown
- A set of metadata about the content, written in JSON, that appears at the top of the entry.

We'll describe the standards for the content and the metadata separately.

### Editorial Standards for Content 

- Brevity without sacrificing clarity. Make every word count.
- 90% of writing is rewriting.
- If the concept is hard, make it easy. If it's dry, make it fun. If it's simple, keep it simple.
- Avoid using first- and second-person pronouns (e.g. I, we, you).
- Avoid referencing information that isn't strictly related to the topic of the entry. As a rule, you want to assume as little pre-existing knowledge as possible. 
- Encyclopedia entry titles should follow the format <Subject Name> in <Language Name> (Loops in Python).
- All text should be written in Markdown
- The content should begin with a brief title of size H1 (i.e. preceded by "# ")
- This title should not exceed 30 characters unless absolutely necessary
- Each subsection should begin with a title of size H2 (i.e. preceded by "## ")
- All in-line code should be delineated by single backticks (`)
- All code blocks should be delineated by triple backticks (```)
  - C#: ```cs
  - CSS: ```css
  - HTML: ```html
  - Java: ```java
  - JavaScript: ```js
  - PHP: ```php
  - Python: ```py
  - R: ```r
  - Ruby: ```rb
  - Sass: ```scss
  - Shell/Program Output/Unhighlighted: ```
  - SQL: ```sql

For more details on Markdown, see Codecademy's [Curriculum Markdown Style Guide](http://curriculum-documentation.codecademy.com/Resources/markdown-style-guide/).
