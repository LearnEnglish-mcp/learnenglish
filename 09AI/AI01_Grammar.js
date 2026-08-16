// ===== AI01 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Mệnh đề quan hệ với that + can",
    "formula": "S + be + N + that + can + V",
    "desc": "Dùng that để bổ nghĩa cho danh từ và can để diễn tả khả năng.",
    "example": "Chat AI is a smart computer program that can talk with people through text or voice.",
    "vi": "Chat AI là một chương trình máy tính thông minh có thể trò chuyện với con người qua văn bản hoặc giọng nói.",
    "extra": [
      {
        "en": "A chatbot is a tool that can answer simple questions.",
        "vi": "Một chatbot là công cụ có thể trả lời các câu hỏi đơn giản."
      },
      {
        "en": "This is a program that can support language practice.",
        "vi": "Đây là một chương trình có thể hỗ trợ luyện tập ngôn ngữ."
      }
    ]
  },
  {
    "title": "2. Can + chuỗi động từ nguyên mẫu",
    "formula": "S + can + V1, V2, V3, and V4",
    "desc": "Dùng can với nhiều động từ song song để liệt kê khả năng.",
    "example": "It can answer questions, explain ideas, write sentences, translate languages, and help users learn new things.",
    "vi": "Nó có thể trả lời câu hỏi, giải thích ý tưởng, viết câu, dịch ngôn ngữ và giúp người dùng học những điều mới.",
    "extra": [
      {
        "en": "AI can explain grammar, suggest ideas, and check short texts.",
        "vi": "AI có thể giải thích ngữ pháp, gợi ý ý tưởng và kiểm tra văn bản ngắn."
      },
      {
        "en": "Students can read, write, listen, and practice with AI.",
        "vi": "Học sinh có thể đọc, viết, nghe và luyện tập với AI."
      }
    ]
  },
  {
    "title": "3. Because + mệnh đề nguyên nhân",
    "formula": "S + V + because + S + V",
    "desc": "Dùng because để nêu lý do.",
    "example": "Many people use Chat AI because it is fast, friendly, and easy to use.",
    "vi": "Nhiều người sử dụng Chat AI vì nó nhanh, thân thiện và dễ sử dụng.",
    "extra": [
      {
        "en": "Students use AI because it gives quick explanations.",
        "vi": "Học sinh dùng AI vì nó đưa ra lời giải thích nhanh."
      },
      {
        "en": "Workers like the tool because it saves time.",
        "vi": "Người lao động thích công cụ này vì nó tiết kiệm thời gian."
      }
    ]
  },
  {
    "title": "4. Hiện tại đơn phủ định + but",
    "formula": "S + do/does not + V, but + S + can + V",
    "desc": "Dùng hiện tại đơn phủ định và but để tạo sự tương phản.",
    "example": "Chat AI does not think like a human, but it can understand many questions and give useful answers.",
    "vi": "Chat AI không suy nghĩ giống con người, nhưng nó có thể hiểu nhiều câu hỏi và đưa ra câu trả lời hữu ích.",
    "extra": [
      {
        "en": "AI does not feel emotions, but it can process language.",
        "vi": "AI không cảm nhận cảm xúc, nhưng nó có thể xử lý ngôn ngữ."
      },
      {
        "en": "The tool does not replace teachers, but it can support them.",
        "vi": "Công cụ không thay thế giáo viên, nhưng nó có thể hỗ trợ họ."
      }
    ]
  },
  {
    "title": "5. Động từ song song + to-infinitive",
    "formula": "S + V1 + and + V2 + O + to + V",
    "desc": "Dùng hai động từ song song và to-infinitive để nêu mục đích.",
    "example": "It learns from a large amount of information and uses patterns to respond.",
    "vi": "Nó học từ một lượng lớn thông tin và sử dụng các mẫu để phản hồi.",
    "extra": [
      {
        "en": "The system uses examples to explain a difficult idea.",
        "vi": "Hệ thống sử dụng ví dụ để giải thích một ý khó."
      },
      {
        "en": "A learner reads answers to understand new vocabulary.",
        "vi": "Người học đọc câu trả lời để hiểu từ vựng mới."
      }
    ]
  },
  {
    "title": "6. Câu bị động hiện tại đơn",
    "formula": "S + am/is/are + V3",
    "desc": "Dùng câu bị động khi nhấn mạnh đối tượng được sử dụng.",
    "example": "Today, Chat AI is used in education, work, business, and daily life.",
    "vi": "Ngày nay, Chat AI được sử dụng trong giáo dục, công việc, kinh doanh và cuộc sống hằng ngày.",
    "extra": [
      {
        "en": "AI is used in many classrooms today.",
        "vi": "AI được sử dụng trong nhiều lớp học ngày nay."
      },
      {
        "en": "Online tools are used for daily communication.",
        "vi": "Các công cụ trực tuyến được dùng cho giao tiếp hằng ngày."
      }
    ]
  },
  {
    "title": "7. Can + use + object + to-infinitive",
    "formula": "S + can + use + O + to + V",
    "desc": "Dùng use + tân ngữ + to-infinitive để nói dùng một công cụ nhằm làm gì.",
    "example": "Students can use it to study English, write essays, or review lessons.",
    "vi": "Học sinh có thể dùng nó để học tiếng Anh, viết bài luận hoặc ôn lại bài học.",
    "extra": [
      {
        "en": "Students can use AI to check short sentences.",
        "vi": "Học sinh có thể dùng AI để kiểm tra các câu ngắn."
      },
      {
        "en": "Workers can use the tool to prepare simple emails.",
        "vi": "Người lao động có thể dùng công cụ để chuẩn bị email đơn giản."
      }
    ]
  },
  {
    "title": "8. V-ing làm chủ ngữ",
    "formula": "V-ing phrase + can + V",
    "desc": "Dùng cụm V-ing ở đầu câu làm chủ ngữ.",
    "example": "Using Chat AI every day can save time and make learning easier.",
    "vi": "Sử dụng Chat AI mỗi ngày có thể tiết kiệm thời gian và làm cho việc học dễ dàng hơn.",
    "extra": [
      {
        "en": "Practicing English daily can build confidence.",
        "vi": "Luyện tiếng Anh hằng ngày có thể xây dựng sự tự tin."
      },
      {
        "en": "Checking important facts can prevent simple mistakes.",
        "vi": "Kiểm tra các sự thật quan trọng có thể ngăn lỗi đơn giản."
      }
    ]
  },
  {
    "title": "9. So + mệnh đề kết quả + whenever",
    "formula": "Clause, so + clause + whenever-clause",
    "desc": "Dùng so để nêu kết quả và whenever để nói bất cứ khi nào.",
    "example": "It is available anytime, so users can ask questions whenever they need help.",
    "vi": "Nó luôn sẵn có, vì vậy người dùng có thể đặt câu hỏi bất cứ khi nào họ cần trợ giúp.",
    "extra": [
      {
        "en": "The tool is online, so students can practice whenever they want.",
        "vi": "Công cụ trực tuyến, vì vậy học sinh có thể luyện tập bất cứ khi nào họ muốn."
      },
      {
        "en": "Answers arrive quickly, so users can continue whenever they are ready.",
        "vi": "Câu trả lời đến nhanh, vì vậy người dùng có thể tiếp tục bất cứ khi nào sẵn sàng."
      }
    ]
  },
  {
    "title": "10. Should + các động từ song song",
    "formula": "S + should + V1, V2, and V3",
    "desc": "Dùng should để đưa ra lời khuyên với nhiều hành động.",
    "example": "Students should practice with other people, listen to English often, and keep studying every day for better results.",
    "vi": "Học sinh nên luyện tập với người khác, thường xuyên nghe tiếng Anh và tiếp tục học mỗi ngày để có kết quả tốt hơn.",
    "extra": [
      {
        "en": "Students should read carefully and check important answers.",
        "vi": "Học sinh nên đọc cẩn thận và kiểm tra các câu trả lời quan trọng."
      },
      {
        "en": "Users should think independently and keep practicing every day.",
        "vi": "Người dùng nên suy nghĩ độc lập và tiếp tục luyện tập mỗi ngày."
      }
    ]
  }
];
