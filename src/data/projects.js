import lecture1 from "../assets/img/intro-img.png";
import lecture2 from "../assets/img/cv-img.png";
import lecture3 from "../assets/img/portfolio-img.png";
import lecture4 from "../assets/img/survival-img.png";
import lecture5 from "../assets/img/arcscu-img.png";
import lecture6 from "../assets/img/research-img.png";
import lecture7 from "../assets/img/foodfest-img.png";
import lecture8 from "../assets/img/interview-img.png";
import lecture9 from "../assets/img/email-img.png";
import lecture10 from "../assets/img/eq-img.png";
import lecture11 from "../assets/img/etiquette-img.png";
import lecture12 from "../assets/img/negotiation-img.png";

import my_cv from "../assets/img/myCv-img.png";


import survival1 from "../assets/img/survival-img1.jpg";
import survival2 from "../assets/img/survival-img2.jpg";
import survival3 from "../assets/img/survival-img3.jpg";
import survival4 from "../assets/img/survival-img4.jpg";

import food1 from "../assets/img/food-img1.jpg";
import food2 from "../assets/img/food-img2.jpg";
import food3 from "../assets/img/food-img3.jpg";
import food4 from "../assets/img/food-img4.jpg";
import food5 from "../assets/img/food-img5.jpg";
import food6 from "../assets/img/food-img6.jpg";
import budget from "../assets/img/ps-budget-img.png";

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const base = [
  { title: "Lecture 1", description: "Introduction to Professional Skiils", imgUrl: lecture1 },
  { title: "Lecture 2", description: "CV Writing", imgUrl: lecture2 },
  { title: "Lecture 3", description: "Portfolio Management", imgUrl: lecture3 },
  { title: "Lecture 4", description: "Surviving Skills", imgUrl: lecture4 },
  { title: "Lecture 5", description: "ARCSCU - Keynote Speeches", imgUrl: lecture5 },
  { title: "Lecture 6", description: "Research Writing", imgUrl: lecture6 },
  { title: "Lecture 7", description: "Food Festival", imgUrl: lecture7 },
  { title: "Lecture 8", description: "Interview Skills", imgUrl: lecture8 },
  { title: "Lecture 9", description: "Email Writing", imgUrl: lecture9 },
  { title: "Lecture 10", description: "Emotional Intelligence", imgUrl: lecture10 },
  { title: "Lecture 11", description: "Professional, Telephone and Dining Etiquette ", imgUrl: lecture11 },
  { title: "Lecture 12", description: "Negotiation Skills", imgUrl: lecture12 },
];

const dummyContent = {
  "Lecture 1": [
    "Key Points",

"Professional/Employability Skills: Non-technical, transferable skills like communication, teamwork, flexibility, and leadership.",

"Difference: Technical skills = industry-specific; soft skills = valuable across industries.",

"Core Soft Skills: Communication, critical thinking, problem-solving, teamwork, flexibility, time management, leadership.",

"Values, Beliefs, Attitudes, Character:",

"Values = guiding principles (e.g., honesty, integrity, respect).",

"Beliefs = personal convictions (e.g., optimism, growth mindset).",

"Attitudes = positive or negative dispositions (e.g., confidence, empathy).",

"Character = moral and ethical virtues (e.g., trustworthiness, fairness, courage).",

"Johari Window: A model of self-awareness in open, blind, hidden, and unknown areas. It develops through feedback and self-disclosure.",

"Continuous Development: Life-long learning, practice, feedback, and embracing challenges enhance employability and career success.",

"Takeaways:",

"Soft skills are as important as technical skills in achieving workplace success.",

"Attitudes, beliefs, and values influence behavior, teamwork, and career growth.",

"Self-awareness with the help of tools like Johari Window helps to reveal strengths and blind spots.",

"Building character traits fosters trust and respect within the workplace.",

"Long-term professional skill development leads to career advancement and leadership positions.",

"Summary",

"It presented employability skills as a set of key non-technical skills. The basic skills are communication, teamwork, flexibility, and leadership. It emphasized the role of values, beliefs, attitudes, and character in defining personal and professional behavior. Techniques like the Johari Window enhance self-awareness by revealing blind spots and hidden strengths. The session also emphasized lifelong learning, constructive criticism , and practice to achieve employability, workplace success, and long-term career growth.",

"What I Learned:",

"I understood from this lecture that being professionally successful is more than possessing technical skills. Learning employability skills like communication, teamwork, problem-solving, and leadership is essential for any job. I understood the significance of values, beliefs, attitudes, and character . The Johari Window revealed to me how self-awareness and feedback can reveal strengths. Most of all, I understood that continuous learning, practicing skills, and embracing challenges are important for professional and personal development."
  ],
  "Lecture 2": [
    "Key Points",

"Purpose of a CV: To summarize education, work experience, skills, and achievements, and emphasize suitability for a specific job.",
"First Impression: A CV is usually the first contact with employers; it must be clear, error-free, and professional.",
"Structure & Format:",

"Personal Information",
"Professional Summary",
"Work Experience (reverse chronological)",
"Education",
"Skills (hard & soft)",
"Achievements/Awards",
,
"Tailoring a CV: Adjust content to match the job description, emphasizing required skills and experiences. Use keywords to pass ATS (Applicant Tracking Systems).",
,
"Format Tips: Simple headings, bullet points, white space, consistent style, correct fonts.",

"Traditional Pitfalls to Avoid: Spelling/grammar errors, irrelevant details, bad formatting, no direction, or too long/too short.",

"Takeaways:",

"A focused CV is better than a general one.",

"CVs must demonstrate achievements."
,
"Peer review and feedback are helpful to refine content.",

"Summary",

"This lecture pointed out the importance of a good CV as a key tool for job application. A good CV needs to be brief, well-structured, and job-focused, highlighting relevant qualifications, skills, and achievements. Action verbs and keywords enhance the visibility and effectiveness of the CV. Mistakes to avoid and practice through peer review to enhance CV writing skills were also suggested in the session.",
"What I Learned",

"I understood through this lecture that a CV is not a simple list of qualifications but a promotional document that introduces me to employers. I understood the importance of tailoring my CV to each job application, aligning my skills and achievements with those required by the job. I also understood that formatting, readability, and error-free writing go a long way in creating a positive impression. Most significantly, I gained knowledge on how to properly format my CV and what to avoid, so that it becomes a better tool for my career advancement.",
  ],
  "Lecture 3": [
    "Key Points",

"Uses of Portfolios:",

"Job applications - emphasizing skills, projects, and achievements.",

"Career development -  demonstrating achievements for promotions or raises.",

"Creative industries - artists, designers, writers, photographers use portfolios to demonstrate style and talent.",

"Education - students/teachers use portfolios for proof of learning, assessment, and admission.",

"Freelancing & consulting - emphasizing services, projects, and references.",

"Entrepreneurship - emphasizing business plans, products, and ideas.",

"Networking & personal branding - promoting achievements, establishing credibility.",

"Types of Portfolios:",

"Personal Portfolio - creative works and self-expression.",

"Career/Dossier Portfolio - professional documents like CVs, references, certifications.",

"Employment Portfolio - work-related evidence, evaluations, and certificates."
,
"Assessment Portfolio - developmental or academic growth over time.",

"Steps to Create an Assessment Portfolio:",

"Define purpose and audience.",

"Choose format (physical/digital).",

"Collect relevant materials (transcripts, work samples, certifications).",

"Organize with clear headings and sections.",
,
"Provide context and emphasize achievements.",

"Make it professional, updated, and purpose-driven.",
"Include reflection and self-assessment.",

"Rehearse presentation and seek feedback.",
"Digital Portfolio Platforms: LinkedIn, Behance, Google Sites, WordPress, Wix, Weebly, Squarespace, Adobe Portfolio, GitHub Pages, Cargo, Portfoliobox, Journo Portfolio, Pathbrite.",
"Takeaways",

"Portfolios are multipurpose tools used in careers, education, freelancing, and personal branding.",

"Different types of portfolios serve different purposes (personal creativity vs. professional credibility).",
"Effective portfolios are organized, contextualized, and updated periodically.",
"Choosing the right platform is essential, depending on your profession (e.g., GitHub for developers, Behance for designers).",
"Reflection and self-assessment render portfolios not only a display but a vehicle for personal growth as well.",

"Summary",

"The lecture dealt with the importance and uses of portfolios in various contexts such as job searching, creative professions, freelancing, education, and personal branding. It discussed types of portfolios—personal, career/dossier, employment, and assessment—and provided steps in creating an effective assessment portfolio. The lecture also focused on tailoring, organization, professional presentation, and continuous updating. Finally, it introduced some websites where one can develop digital portfolios for various professions.",
"What I Learned",
"I certainly learned from this lecture that portfolios are good ways of showing my abilities, achievements, and growth more than a CV can convey. I have learned about the different types of portfolios and their purposes, for example, career portfolios for job hunting or assessment portfolios for monitoring academic growth. I also grasped the step-by-step process of portfolio development, from the collection of materials to the organization of content and reflection on personal development. Most importantly, I realized that the choice of the correct digital platform is crucial in the effective presentation of my work to the right audience and the development of my personal brand."
  ],
  "Lecture 4": [
    <img src={survival1} alt="Group photo"/>,
    <img src={survival4} alt="Activity"/>,
"    In this session, our group of 11 members participated in a survival-based team activity. The scenario required us to imagine being stranded in a jungle after a flash flood, with the challenge of selecting 7 out of 15 essential items to support survival, communication, and morale.",
"We began by assigning group roles and conducting a group discussion. We all brought together our ideas about the utility and team value of the items. We collaborated, prioritizing survival equipment such as safety, navigation, and communication thoughtfully, but also considering how to maintain team morale. We then filled out a justification table to provide our reasons for each item that we selected.",
"The exercise allowed us to practice strategic thinking, decision-making, group communication, delegation, and crisis leadership. In order to finish the exercise, we were required to take a group photograph to mark attendance and show that we participated in the activity.",
    <img src={survival2} alt="sid and roles"/>,
    <img src={survival3} alt="Filled table"/>,

  ],
  "Lecture 5": [
    "Overview: ARCSCU keynote insights and takeaways.",
    "Themes: leadership, community impact, continuous learning.",
    "My Notes: Quotes and lessons that resonated with me."
  ],
  "Lecture 6": [
"1. Background of the Study",
"Background is the setting of your study. It informs readers the broader context or problem that your study addresses. It lets readers know why the topic matters and sets the stage for determining the research problem.",
"A brief background provides motivation for the study and guides readers to the research problem.",

"2. Research Problem",
"Problem of research articulates the specific problem or issue the research is going to solve. It has to be specific, focused, and researchable.",
"The problem clearly defined is important to direct research aims and method.",

"3. Research Objectives",
"Objectives indicate what the research is going to achieve. They guide the methodology and analysis. Objectives are usually classified into general and specific objectives.",


"4. Literature Review",
"The literature review summarizes previous research relevant to your topic. It identifies gaps, supports your methodology, and positions your study within existing knowledge.",
"A good literature review will make your research more relevant and credible.",

"5. Significance of the Study",
"This explains why the study is significant. It indicates whom the study will benefit and how.",

"Demonstrating significance highlights what makes your study significant.",

"6. Research Design Overview",
"Research design dictates the research approach and method used to conduct the research. It outlines research type, data generation processes, and analysis processes.",
"articulated objectives help maintain focus and evaluate the success of the studyA specific research design renders the study systematic, credible, and reproducible.",
"Summary",

"Research writing begins with a description of the background (context), a definition of the problem, and precise goals. A literature review establishes what is known, significance demonstrates the value of the study, and finally, a proper research design ensures valid and useful findings.",
"Key Takeaways:",

"⦁	Clearly define the research problem at all times.",
"⦁	Objectives must be specific, measurable, and problem-oriented.",
"⦁	Utilize the literature review to justify your study.",
"⦁	Stress the significance to show practical and theoretical importance.",
"⦁	A particular research design increases reliability and replicability."
  ],
  "Lecture 7": [
"    The food festival was organized as part of a university project aimed at fundraising for charity while allowing students to showcase their culinary creativity and teamwork. Our group set up a ",
"stall named “Weirdo's Spot” with the theme of weird foods. Although the stalls faced several challenges, including a delay in food preparation and issues with teamwork, the experience ",
"provided valuable lessons in planning, execution, and event management. While the stall incurred a financial loss, the Black Mojito drink received highly positive feedback, and the team ",
"retained LKR 5,000 from collected funds. Overall, the project was more successful as a learning experience than as a profit-making activity. ",    
"BUDGET",
<img src={budget} alt="budget" />,
"PLANNING",
"Planning for the food stall began one month prior to the event. Several meetings were held to decide the menu, assign responsibilities, and coordinate logistics. A total of 13 members were in the team: ",
"• 5 members - Responsible for cooking and food preparation. ",
"• 3 members - In charge of creative tasks such as stall design and decoration. ",
"• 5 members - Assisted in marketing, shopping for supplies, and setting up the stall. ",
"Funds were raised by collecting LKR 2,500 from 10 members, while the remaining 3 contributed through other forms of support such as providing resources and labor. Promotional posters were created and shared to attract customers."
,
"CHALLENGES",
"Several challenges were encountered during the project: ",
"• Time management issues – Delay in preparing a key food item reduced potential sales. ",
"• Teamwork difficulties – Coordination problems among members affected efficiency. ",
"• Pricing strategy – Some products were not competitively priced compared to other stalls. ",
"• Competitive market – With many food options available, it was difficult to stand out." ,
"• Space and equipment problems – Limited resources made preparation and service less smooth. ",

"Key lessons learned include the importance of proper market research before finalizing menu items, starting preparations well in advance, and ensuring stronger communication within the team.",

<img src={food2} alt="budget" />,
<img src={food6} alt="budget" />,
<img src={food1} alt="budget" />,
<img src={food3} alt="budget" />,
<img src={food5} alt="budget" />,
<img src={food4} alt="budget" />



],
  "Lecture 8": [
    "Key Points",

"Purpose of Job Interview: Two-way information exchange—job applicant explores job and workplace, employer explores ability.",
"Effective Interview Strategy: Figure out what you should highlight, play down your weak points, and make up your mind about what you need to find out about the company.",

"Role of Communication:",

"Non-verbal (physical attitude, tone, body language, eye contact, interest) - accountable for 93% of face-to-face communication.",

"Verbal (accurate, concise, specific responses, utilizing jargon and illustrations).",

"Listening - active listening for better understanding and interest.",

"Successful Candidates: Provided detailed, researched answers, used names/jargon, were enthusiastic, asked questions, provided examples to support answers.",
"Unsuccessful Candidates: Provided vague answers, minimal research, no enthusiasm, avoided eye contact, short answers, no interest.",
"6 C's of Communication: Clear, Concise, Correct, Complete, Concrete, Courteous (+ Confident).",
"Answer Structuring (STAR): Situation → Target → Action → Result.",
"Language for Interviews: How to describe personality, strengths, education, work experience, future plans, and opinions.",
"Interview Preparation: Research company, get familiar with job role, rehearse questions, dress up, notepad/document, plan logistics.",
"Takeaways",
"Preparation reduces nervousness and boosts confidence for interviews.",
"Body language (posture, eye contact, smile) is as important as verbal answers.",
"Active listening and proper response build rapport with interviewer.",
"Using STAR method helps in giving well-structured, effective answers.",
"Adapting language (goals, strengths, experiences) helps in giving more professional and credible answers.",
"Investigating the company demonstrates real interest and enhances chances of success.",
"Summary",
"This lecture emphasized the importance of communication in job interviews. It explained how verbal as well as non-verbal communications play a role in determining interview outcomes. The candidates need to research the company, prepare tailor-made answers, and use tools like STAR to convey achievements. Good performers also demonstrate energy, ask the right questions, and present themselves clearly with confidence. The session also emphasized active listening, 6 C's of communication, and realities like looks, preparation, and framing answers.",
"What I Learned",
"From this lecture, I learned that an interview is not merely about responding to questions—it is about verbal and non-verbal communication. I now understand that tone, body language, and attitude can count a lot. The STAR method gives me a clear-cut guideline of how to design my answers, and the 6 C's remind me to have professional and effective communication. I also understood the importance of research, preparation, and asking questions to show interest. In short, I acquired helpful tips on how to prepare for job interviews with confidence and success."
  ],
  "Lecture 9": [
   
"Email writing is an important skill in professional life. Good emails are clear, well-structured, and easy to read, with the recipient having the ability to read and reply suitably. Emails are used for business, educational, and even personal use; therefore, professionalism and courtesy are called for.",
"Key Points for Email Writing:",

"Subject Line:",

"⦁	Make it short and directly relevant to the subject matter.",
"⦁	Use a formal greeting: \"Dear Mr. Silva,\" or \"Hello Dr. Perera,\".",
"⦁	Avoid very informal greetings in business emails.",

"Body of the Email:",

"⦁	Be Concise and Clear: Simply state the point and don't include unnecessary details.",
"⦁	Use Proper Structure: Start with context, outline the purpose, provide details, and end with a call to action if required.",
"⦁	Professional Tone: Be respectful, considerate, and polite.",

"Closing/Sign-off:",

"⦁	Use formal closings such as \"Best regards,\" \"Sincerely,\" or \"Thank you.\"",
"⦁	Include your complete name, position, and contact information if necessary.",

"Attachments and Links:",

"⦁	Explicitly state any attachments or links in the email body.",
"⦁	Ensure proper naming of files and accessibility.",

"Proofreading:",

"⦁	Proofread for spelling, grammar, and readability before sending.",
"⦁	Make sure the email address of the recipient is correct.",

"Email Etiquette:",

"⦁	Reply as soon as possible, preferably in 24 hours.",
"⦁	Do not write in all caps (it appears as shouting) or too many exclamation points.",
"⦁	Use CC and BCC judiciously.",

"Takeaways:",

"⦁	Maintain professionalism and brevity in emails.",
"⦁	Arrange emails in a coherent order: Subject → Greeting → Body → Closing.",
"⦁	Proofread to avoid misconceptions."
  ],
  "Lecture 10": [
    "Key Points",

"Emotions:",

"Three components: subjective experience (feeling), physiological response, behavioral response.",

"Purposive (drive behavior, coping, survival), Social-expressive (communication of body language, gestures, tone).",

"Functions: adaptive, give meaning to life, assist in conundrums, permit social interaction.",

"Some emotions are hard-wired (sadness, happiness, fear, etc.) and others are learned/told (empathy, patience, gratitude, etc.).",

"Brain & Emotions:",

"Limbic system & amygdala control emotions.",

"Prefrontal cortex regulates and decides.",

"Adolescents rely more and more on the amygdala, thus the mood swings and impulsiveness; pruning and myelination continue to age 25.",

"Emotional Intelligence (EI/EQ):",

"Ability to recognize, understand, and manage emotions in self and others to achieve outcomes.",

"EQ is a better predictor of long-term achievement, especially in difficult professions and management.",

"Link to Work & Success:",

"IQ (technical skills) will land you the job, but EQ is used for promotions and leadership.",

"Customer satisfaction, teamwork, and communication are based mostly on EQ.",

"Brain & Decision Making:",

"Conscious mind processes only ~5% of decisions; subconscious mind processes much faster (millions of bits/sec).",

"Gut feelings are subconscious conclusions based on experience and emotional memory.",

"Emotions and Health:",

"Negative emotions lower immunity and cardiovascular well-being.",

"Positive emotions boost immunity, resilience, and sense of safety.",

"Using and Managing Emotions:",

"Recognize triggers, blends, and sequence of emotions."
,
"Use emotions to inform decision-making, creativity, and problem-solving.",

"Emotional contagion—our moods affect others, so infecting with optimism is vital.",

"Takeaways:",


"⦁	Emotions are essential to survival, relationships, and decision-making.",
"⦁	EQ is dynamic and can be developed, as opposed to IQ.",
"⦁	High EQ improves career growth, leadership, and working relationships.",
"⦁	Adolescents' reliance on the amygdala explain wild emotional responses.",
"⦁	Emotions influence physical health; positive moods boost immunity and general health.",
"⦁	Subconscious choice-making is more responsible for our decisions than we know.",
"⦁	Emotional management and integrating it with rational thinking creates better choices.",

"Summary",

"This lecture discussed emotions and emotional intelligence (EQ) as they relate to psychology, social and career relationships, and biological functions. Emotions dictate behavior, communication, and existence, while EQ establishes the effectiveness of people in dealing with and utilizing emotions at work and in personal life. Whereas IQ can't be enhanced, EQ can be learned and has a strong connection to professional success, leadership, and all other relationships. The talk also underscored how development of the brain at adolescence ages affects emotional control. Finally, it illustrated the importance of emotions in health, implicit decision, and why successful management of emotions leads to professional and personal success.",
"What I Learned",

"I understood from this lecture that emotions are not just feelings but also tools of survival, communication, and decision-making. I was aware of the difference between IQ and EQ, and how emotional intelligence is necessary for success in the modern workplace, especially in management and collaboration. I was aware that emotions influence physical well-being and that positive emotional states develop resilience. I also learned how much of our choices happen automatically, and how \"gut feelings\" are rooted in emotional memory. More importantly, I learned that EQ is trainable through awareness, reflection, and practice, rendering me more empathetic, resilient, and successful in life and at work."
  ],
  "Lecture 11": [
    "Key Points",

"⦁	Telephone as a Business Tool",
"⦁	A must for contact with clients, colleagues, and external stakeholders.",
"⦁	Abuse can send the wrong message and cause harm to professional reputation.",

"Basic Rules of Telephone Etiquette",

"⦁	Talk into the mouthpiece or headset.",
"⦁	Avoid eating, chewing gum, or putting the receiver against your mouth.",
"⦁	Use the HOLD function responsibly to maintain privacy.",
"⦁	Always be courteous.",
"⦁	Answering Calls",
"⦁	Answer on 2–3 rings.",
"⦁	Use a polite and professional greeting according to the size of the organization.",
"⦁	Tone takes precedence over time-of-day greetings (\"Good morning/afternoon\").",

"Placing a Caller on Hold",
"⦁	Ask permission first: \"May I put you on hold?\"",
"⦁	Check back every 30–45 seconds, thank them upon return.",
"⦁	If they can't hold, give alternatives (message, transfer, or callback).",

"Transferring Calls",
"⦁	Give reason for transfer.",
"⦁	Check with both the caller and recipient before transferring.",
"⦁	Provide caller name, department, and contact information.",


"The \"In Conference\" Trap",

"⦁	Avoid using too many or too vague words.",
"⦁	Be specific about availability (\"She'll be back at 3 PM\").",
"⦁	Avoid unprofessional reason-giving (\"out for coffee\").",

"Taking Messages",

"⦁	Take messages in a formal message format: caller name, contact, time, message, action needed.",
"⦁	Maintain confidentiality when giving the message.",

"Returning Calls",

"⦁	Avoid phone tag through rescheduling return calls.",
"⦁	Ask caller for best time to call.",
"⦁	Prepare objectives and expect questions.",
"⦁	Take notes and detail follow-up actions.",

"Leaving Voicemails",

"Provide name (and spelling if necessary), department, number, date/time, and availability.",

"Closing a Call",

"⦁	Utilize professional closing sentences.",
"⦁	Reaffirm actions and express gratitude to the caller.",
"⦁	Avoid informal expressions or slang.",
"⦁	Professional Language",
"⦁	Substitute harsh or negative words with nice ones.",

"Takeaways:",

"⦁	Professionalism on the phone determines the company's reputation.",
"⦁	Courtesy, clarity, and tone of voice are as important as the message.",
"⦁	Proper handling of holds, transfers, and messages shows consideration of the caller's time.",
"⦁	Positive language avoids conflict and builds trust.",
"⦁	Being prepared and communicating in an organized manner enhances the effectiveness of outbound calls.",

"Summary",

"This lecture focused on telephone etiquette as a major component of business communication. The lecture covered best practices in answering, holding, transferring, screening, and closing calls with specific focus on how tone and language determine professionalism. Students were introduced to systematic ways of taking messages, returning calls, and leaving voicemails. The lecture also highlighted avoiding derogatory language and replacing it with friendly, helpful phrasing.",
"What I Learned",
"I acquired from this lecture that proper telephone etiquette is not merely answering calls—it displays professionalism, respect, and the organizational reputation. I acquired the skills of putting callers on hold, transferring them, or taking a message without leaving them feeling abandoned. I acquired the importance of word usage since slight changes in wording may make a good customer experience. This lecture provided me with effective communication skills that I can use in any working environment in an effort to establish better client relationships and sustain workplace professionalism."
  ],
  "Lecture 12": [
    "Key Points",

"⦁	Negotiation's Significance",
"⦁	Critical in business, relationships, and conflict resolution.",
"⦁	Enables win-win outcomes, preserves relationships, and resolves conflicts.",
"⦁	Creates trust, adaptability, and competitiveness.",
"⦁	Negotiation Basics",
"⦁	BATNA (Best Alternative to a Negotiated Agreement): The backup plan if there is no deal. Provides leverage and assurance.",
"⦁	ZOPA (Zone of Possible Agreement): The overlap of the two sides' acceptable ranges; where a deal can be made.",
"Preparation",

"⦁	Learn the other party's history and interests.",
"⦁	Identify priorities, walk-away point, and goals.",
"⦁	Reflect. Consider alternatives. Consider concessions.",
"⦁	Scenario Analysis (Resource Allocation Case)",
"Negotiation Strategies & Techniques",
"⦁ Establish rapport (seek commonality, mirror manner of communication).",
"⦁ Active listening (ask open-ended questions, clarify).",
"⦁ Remain calm and patient.",
"⦁ Provide creative solutions and incremental concessions.",
"⦁ Employ silence strategically.",
"⦁ Read non-verbal signals.",

"Takeaways",

"⦁	Negotiation is not coercing agreement but achieving a balanced result.",
"⦁	Understanding your BATNA provides confidence and avoids accepting less.",
"⦁	Identifying the ZOPA ensures that agreements are mutually advantageous.",
"⦁	Effective negotiators prepare, listen carefully, and modify approaches.",
"⦁	Professionalism, patience, and ethics are no less vital than strategy.",
"Summary",

"This lecture discussed negotiation strategies and principles with a focus on real-world applications. It focused on the application of BATNA and ZOPA in establishing boundaries and ascertaining potential agreements. Preparation, communication, and flexibility were highlighted, along with cultural, economic, and ethical considerations influencing negotiations. Students were trained through scenario analysis and role plays to implement methods such as active listening, incremental negotiation, and creative problem-solving.",
"What I Learned",

"I have learned that negotiation is a structured skill and not a word exchange. BATNA and ZOPA principles taught me to learn how to establish my limits and meet in the middle. I also realized how important preparation, building rapport, and empathy for the other side are. Effective techniques like employing silence, incremental offers, and observing body language assist in making negotiation more effective. Above all, I realized that successful negotiation is not just about achieving deals that are mutually beneficial but also maintaining trust and relations."
  ]
};

export const projects = base.map(p => ({
  ...p,
  slug: slugify(p.title),
  content: dummyContent[p.title] || [
    `Detailed content for ${p.title}.`,
    `Topic: ${p.description}.`,
    "Replace these paragraphs with your own notes and media."
  ]
}));
