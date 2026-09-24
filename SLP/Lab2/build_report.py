from pathlib import Path
import re
from docx import Document
from docx.shared import Pt, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.section import WD_SECTION
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

root = Path(__file__).parent
source_path = root / 'src' / 'control_structures.cpp'
source = source_path.read_text()

def function(name):
    start = source.index('void ' + name)
    next_start = source.find('\nvoid ', start + 5)
    end = next_start if next_start != -1 else source.index('\nint main()', start)
    return source[start:end].strip()

def set_font(run, name='Georgia', size=11, bold=None):
    run.font.name = name
    run._element.rPr.rFonts.set(qn('w:eastAsia'), name)
    run.font.size = Pt(size)
    if bold is not None:
        run.bold = bold

def add_text(doc, text, style=None, align=None):
    p = doc.add_paragraph(style=style)
    if align is not None:
        p.alignment = align
    r = p.add_run(text)
    set_font(r)
    return p

def add_code(doc, text):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(4)
    p.paragraph_format.line_spacing = 1.0
    r = p.add_run(text)
    set_font(r, 'Courier New', 10)
    return p

doc = Document()
sec = doc.sections[0]
sec.page_width = Cm(21)
sec.page_height = Cm(29.7)
sec.top_margin = Cm(2.2)
sec.bottom_margin = Cm(2.2)
sec.left_margin = Cm(2.3)
sec.right_margin = Cm(2.3)

normal = doc.styles['Normal']
normal.font.name = 'Georgia'
normal._element.rPr.rFonts.set(qn('w:eastAsia'), 'Georgia')
normal.font.size = Pt(11)
normal.paragraph_format.space_after = Pt(6)

for title, size in [('Title', 16), ('Heading 1', 13), ('Heading 2', 11)]:
    st = doc.styles[title]
    st.font.name = 'Georgia'
    st._element.rPr.rFonts.set(qn('w:eastAsia'), 'Georgia')
    st.font.size = Pt(size)
    st.font.bold = True
    st.font.color.rgb = None

p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
r = p.add_run('Laboratory Work 2')
set_font(r, size=16, bold=True)
p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
r = p.add_run('Control Structures')
set_font(r, size=13, bold=True)
add_text(doc, 'Kazbek Assanbek\nIT2-2302', align=WD_ALIGN_PARAGRAPH.CENTER)

doc.add_heading('1. Objective', level=1)
add_text(doc, 'The objective of this lab is to practice control structures in C++. I used conditions, a switch statement, loops, and loop control statements in one program.')

sections = [
('2. Comparison Operators', 'Comparison operators compare two values and produce a true or false result. In this program, the values 7 and 4 are compared with greater-than and equal-to operators.', 'comparisonExample', 'The result shows that 7 is greater than 4, while the two values are not equal.'),
('3. If and Else', 'The if, else if, and else statements check the sign of an integer. The program prints a different message for a positive number, a negative number, or zero.', 'signExample', 'For the test input -2, the program printed "The number is negative."'),
('4. Switch', 'The switch statement selects one case from several choices. Here, the input is used to select a day from Monday to Wednesday.', 'switchExample', 'For the test input 2, the program printed "Tuesday."'),
('5. While Loop', 'A while loop repeats its body while the condition is true. This example counts down from 5 to 1.', 'whileExample', 'The output was "While countdown: 5 4 3 2 1 done".'),
('6. Do While Loop', 'A do-while loop runs its body at least once and then checks the condition. The program keeps asking until the entered number is positive.', 'doWhileExample', 'With inputs -2 and 7, the program asked twice and then printed "Accepted: 7".'),
('7. Break and Continue', 'The continue statement skips number 3, and break stops the loop when the number becomes greater than 4. Both statements are used in the same for loop.', 'breakContinueExample', 'The output was "Numbers from 1 to 5, skipping 3: 1 2 4".')]

for heading, explanation, fname, result in sections:
    doc.add_heading(heading, level=1)
    add_text(doc, explanation)
    add_text(doc, 'File: src/control_structures.cpp')
    add_code(doc, function(fname))
    add_text(doc, result)

doc.add_heading('Program Output', level=1)
add_text(doc, 'The following is the output from a compiled run with the inputs -2, 2, 0, 7, 11, and 6:')
output = '''Laboratory Work 2 - Control Structures

Comparison operators: 7 > 4 is 1, and 7 == 4 is 0
Enter an integer to check its sign: The number is negative.
Choose a day (1-3): Tuesday
While countdown: 5 4 3 2 1 done
Numbers from 1 to 5, skipping 3: 1 2 4 
Enter a positive number: Enter a positive number: Accepted: 7
Enter a number from 1 to 10 (goto example): The value is outside the range. Try again.
Enter a number from 1 to 10 (goto example): Accepted: 6

All examples finished.'''
add_code(doc, output)

doc.add_heading('Conclusion', level=1)
add_text(doc, 'In this lab I practiced control structures in C++. I used comparisons, conditions, a switch statement, and loops. I also tested break and continue and saw how they change program execution.')

doc.save(root / 'Lab2_Report_Kazbek_Assanbek.docx')
