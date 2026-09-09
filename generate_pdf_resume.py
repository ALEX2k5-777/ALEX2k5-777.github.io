import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

pdf_filename = "Alex_C_Varghese_Resume.pdf"
doc = SimpleDocTemplate(pdf_filename, pagesize=letter, rightMargin=36, leftMargin=36, topMargin=36, bottomMargin=36)
story = []

styles = getSampleStyleSheet()
normal = styles['Normal']

title_style = ParagraphStyle('TitleStyle', parent=normal, fontName='Helvetica-Bold', fontSize=22, leading=26, textColor=colors.HexColor('#0f172a'))
subtitle_style = ParagraphStyle('SubTitleStyle', parent=normal, fontName='Helvetica-Bold', fontSize=12, leading=16, textColor=colors.HexColor('#0284c7'))
contact_style = ParagraphStyle('ContactStyle', parent=normal, fontName='Helvetica', fontSize=8.5, leading=12, textColor=colors.HexColor('#475569'))
heading_style = ParagraphStyle('HeadingStyle', parent=normal, fontName='Helvetica-Bold', fontSize=11.5, leading=15, textColor=colors.HexColor('#0f172a'))
body_style = ParagraphStyle('BodyStyle', parent=normal, fontName='Helvetica', fontSize=8.5, leading=12, textColor=colors.HexColor('#334155'))
bold_style = ParagraphStyle('BoldStyle', parent=normal, fontName='Helvetica-Bold', fontSize=8.5, leading=12, textColor=colors.HexColor('#0f172a'))

story.append(Paragraph("ALEX C VARGHESE", title_style))
story.append(Paragraph("MCA STUDENT | SOFTWARE & APPLICATION DEVELOPER", subtitle_style))
story.append(Paragraph("Email: <a href='mailto:alexcvarghese777@gmail.com' color='#0284c7'>alexcvarghese777@gmail.com</a> | Phone: +91 9747315186 | Location: Alappuzha, Kuttanad, Kerala<br/>LinkedIn: <a href='https://www.linkedin.com/in/alex-c-varghese-038581358/' color='#0284c7'>linkedin.com/in/alex-c-varghese-038581358</a> | GitHub: <a href='https://github.com/ALEX2k5-777' color='#0284c7'>github.com/ALEX2k5-777</a> | Portfolio: <a href='https://alex2k5-777.github.io' color='#0284c7'>alex2k5-777.github.io</a>", contact_style))
story.append(Spacer(1, 4))

story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=4))
story.append(Paragraph("SUMMARY", heading_style))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=3))
story.append(Paragraph("Motivated MCA student at Amal Jyothi College of Engineering (BCA Graduate from Saintgits College of Applied Science). Winner of i_hack 4.0 Hackathon at Saintgits College. Experienced in software & mobile game development, ML web applications, audio media tools, and predictive data models.", body_style))
story.append(Spacer(1, 4))

story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=4))
story.append(Paragraph("EDUCATION", heading_style))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=3))

edu_data = [
    [Paragraph("<b>Master of Computer Applications (MCA)</b><br/>Amal Jyothi College of Engineering, Kanjirappally", body_style), Paragraph("<b>2026 – Present</b>", ParagraphStyle('R', parent=body_style, alignment=2))],
    [Paragraph("<b>Bachelor of Computer Application (BCA)</b> – CGPA: 7.07<br/>Saintgits College of Applied Science, Kottayam<br/>🏆 <i>Winner / 1st Rank Champion — i_hack 4.0 Hackathon</i>", body_style), Paragraph("<b>2023 – 2026</b>", ParagraphStyle('R', parent=body_style, alignment=2))],
    [Paragraph("<b>Higher Secondary Education</b> – Score: 83.9%<br/>St George HSS, Muttar", body_style), Paragraph("<b>2021 – 2023</b>", ParagraphStyle('R', parent=body_style, alignment=2))],
    [Paragraph("<b>10th Standard (SSLC)</b> – Score: Full A+<br/>St George HSS, Muttar", body_style), Paragraph("<b>2020 – 2021</b>", ParagraphStyle('R', parent=body_style, alignment=2))]
]
edu_table = Table(edu_data, colWidths=[400, 140])
edu_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 2),
]))
story.append(edu_table)
story.append(Spacer(1, 4))

story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=4))
story.append(Paragraph("PROJECTS", heading_style))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=3))

story.append(Paragraph("<b>1. Alexa Player — Smart Audio Analyzer & Keyboard Guide</b> (<a href='https://github.com/ALEX2k5-777/alexa-player' color='#0284c7'><u>github.com/ALEX2k5-777/alexa-player</u></a>)", bold_style))
story.append(Paragraph("&nbsp;&nbsp;&nbsp;&nbsp;Developed an intelligent audio MIR web app that extracts song BPM, time signature, and chord progressions with a 3D interactive virtual piano keyboard visualizer.", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>2. VibePlayer — Media & Audio Player Application</b> (<a href='https://github.com/ALEX2k5-777/vibeplayer' color='#0284c7'><u>github.com/ALEX2k5-777/vibeplayer</u></a>)", bold_style))
story.append(Paragraph("&nbsp;&nbsp;&nbsp;&nbsp;Developed a modern audio player with playlist management, custom audio visualizer, and multi-format playback controls.", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>3. Air Quality Index (AQI) Prediction Web App</b> — <i>Akira Software Solutions</i> (<a href='https://github.com/ALEX2k5-777/Air-Quality-Model-' color='#0284c7'><u>github.com/ALEX2k5-777/Air-Quality-Model-</u></a>)", bold_style))
story.append(Paragraph("&nbsp;&nbsp;&nbsp;&nbsp;Developed an ML web application to predict AQI using Python, data preprocessing, and Streamlit UI.", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>4. AGRIGO — Agricultural Management Web App</b>", bold_style))
story.append(Paragraph("&nbsp;&nbsp;&nbsp;&nbsp;Developed a dynamic agricultural management platform with real-time weather APIs and multi-role authentication.", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>5. Fly-Vezhambal — Android 2D Arcade Game App</b> (<a href='https://github.com/ALEX2k5-777/fly-vezhambal' color='#0284c7'><u>github.com/ALEX2k5-777/fly-vezhambal</u></a>)", bold_style))
story.append(Paragraph("&nbsp;&nbsp;&nbsp;&nbsp;Developed an Android 2D arcade game application inspired by Flappy Bird, featuring custom player physics, collision detection, and high score system.", body_style))
story.append(Spacer(1, 4))

story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=4))
story.append(Paragraph("TECHNICAL SKILLS & ACHIEVEMENTS", heading_style))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=3))

story.append(Paragraph("<b>• Programming Languages:</b> Python, Java, C++, JavaScript, HTML5/CSS3", body_style))
story.append(Paragraph("<b>• Software & Game Dev:</b> Audio MIR & DSP (Librosa, Web Audio API), Android 2D Game Dev, Streamlit, Predictive Modeling", body_style))
story.append(Paragraph("<b>• Soft Skills:</b> Teamwork & Collaboration, Responsibility, Self Learner, Problem Solving", body_style))
story.append(Paragraph("<b>• Hackathon Achievement:</b> 🏆 <b>Winner of i_hack 4.0</b> @ Saintgits College", body_style))
story.append(Spacer(1, 4))

story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=4))
story.append(Paragraph("CERTIFICATIONS", heading_style))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=3))

story.append(Paragraph("• <b>Build a Machine Learning Web App with Streamlit & Python</b> — <i>Coursera</i>", body_style))
story.append(Paragraph("• <b>Introduction to Artificial Intelligence (AI)</b> — <i>IBM</i>", body_style))
story.append(Paragraph("• <b>Basics of Python</b> — <i>Infosys Springboard</i>", body_style))

doc.build(story)
print(f"Regenerated {pdf_filename} with Alexa Player added!")
