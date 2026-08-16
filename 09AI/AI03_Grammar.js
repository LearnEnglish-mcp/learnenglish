// ===== AI03 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Câu điều kiện loại 1",
    "formula": "If + S + present simple, S + will + V",
    "desc": "Dùng câu điều kiện loại 1 cho một kết quả có thể xảy ra trong tương lai.",
    "example": "If the prompt is clear, the answer will usually be better.",
    "vi": "Nếu câu lệnh rõ ràng, câu trả lời thường sẽ tốt hơn.",
    "extra": [
      {
        "en": "If users give clear details, AI will respond more accurately.",
        "vi": "Nếu người dùng cung cấp chi tiết rõ ràng, AI sẽ phản hồi chính xác hơn."
      },
      {
        "en": "If the question is specific, the answer will be easier to use.",
        "vi": "Nếu câu hỏi cụ thể, câu trả lời sẽ dễ sử dụng hơn."
      }
    ]
  },
  {
    "title": "2. To-infinitive chỉ mục đích + should",
    "formula": "To + V, S + should + V",
    "desc": "Dùng to-infinitive đầu câu để nêu mục đích và should để đưa ra lời khuyên.",
    "example": "To write a good prompt, we should give enough details.",
    "vi": "Để viết một câu lệnh tốt, chúng ta nên cung cấp đủ chi tiết.",
    "extra": [
      {
        "en": "To get a useful answer, users should explain the task clearly.",
        "vi": "Để nhận câu trả lời hữu ích, người dùng nên giải thích nhiệm vụ rõ ràng."
      },
      {
        "en": "To protect privacy, people should avoid sharing private data.",
        "vi": "Để bảo vệ quyền riêng tư, mọi người nên tránh chia sẻ dữ liệu riêng tư."
      }
    ]
  },
  {
    "title": "3. Instead of + V-ing",
    "formula": "Instead of + V-ing, S + can + V",
    "desc": "Dùng instead of + V-ing để nói thay vì làm một việc thì làm việc khác.",
    "example": "Instead of writing “Write about English,” we can write “Write a 100-word passage about learning English, using simple words.”",
    "vi": "Thay vì viết “Viết về tiếng Anh”, chúng ta có thể viết “Hãy viết một đoạn văn 100 từ về việc học tiếng Anh, sử dụng từ ngữ đơn giản.”",
    "extra": [
      {
        "en": "Instead of copying an answer, students can explain it themselves.",
        "vi": "Thay vì sao chép câu trả lời, học sinh có thể tự giải thích nó."
      },
      {
        "en": "Instead of sharing private data, users can give general details.",
        "vi": "Thay vì chia sẻ dữ liệu riêng tư, người dùng có thể cung cấp chi tiết chung."
      }
    ]
  },
  {
    "title": "4. When + mệnh đề + ask + object + to-infinitive",
    "formula": "When + S + V, S + can + ask + O + to + V",
    "desc": "Dùng when để nêu tình huống và ask + object + to-infinitive để đưa ra yêu cầu.",
    "example": "When the first answer is not perfect, we can ask Chat AI to rewrite, shorten, explain, or make it easier.",
    "vi": "Khi câu trả lời đầu tiên chưa hoàn hảo, chúng ta có thể yêu cầu Chat AI viết lại, rút ngắn, giải thích hoặc làm cho nó dễ hơn.",
    "extra": [
      {
        "en": "When an answer is too long, users can ask AI to shorten it.",
        "vi": "Khi câu trả lời quá dài, người dùng có thể yêu cầu AI rút ngắn."
      },
      {
        "en": "When a sentence is unclear, students can ask AI to explain it.",
        "vi": "Khi một câu chưa rõ, học sinh có thể yêu cầu AI giải thích."
      }
    ]
  },
  {
    "title": "5. Because + mệnh đề nguyên nhân",
    "formula": "S + be + adj + because + S + can + V",
    "desc": "Dùng because để giải thích lý do một điều hữu ích.",
    "example": "It is useful because people can use it anytime and anywhere.",
    "vi": "Nó hữu ích vì mọi người có thể sử dụng nó bất cứ lúc nào và ở bất cứ đâu.",
    "extra": [
      {
        "en": "AI is convenient because users can access it anytime.",
        "vi": "AI tiện lợi vì người dùng có thể truy cập bất cứ lúc nào."
      },
      {
        "en": "The tool is helpful because people can practice anywhere.",
        "vi": "Công cụ hữu ích vì mọi người có thể luyện tập ở bất cứ đâu."
      }
    ]
  },
  {
    "title": "6. There are + danh từ số nhiều + if",
    "formula": "There are + plural N + if + S + V",
    "desc": "Dùng there are để nói sự tồn tại và if để nêu điều kiện.",
    "example": "There are also privacy risks if people share personal or company information.",
    "vi": "Cũng có những rủi ro về quyền riêng tư nếu mọi người chia sẻ thông tin cá nhân hoặc thông tin công ty.",
    "extra": [
      {
        "en": "There are problems if users trust every answer immediately.",
        "vi": "Có những vấn đề nếu người dùng tin mọi câu trả lời ngay lập tức."
      },
      {
        "en": "There are fewer risks if people protect private information.",
        "vi": "Có ít rủi ro hơn nếu mọi người bảo vệ thông tin riêng tư."
      }
    ]
  },
  {
    "title": "7. Help + V và must + V",
    "formula": "S + can + help + V, but + S + must + V",
    "desc": "Dùng help + động từ nguyên mẫu và must để diễn tả sự hỗ trợ cùng nghĩa vụ bắt buộc.",
    "example": "In healthcare, it can help explain general health information, but doctors must make final decisions.",
    "vi": "Trong chăm sóc sức khỏe, nó có thể giúp giải thích thông tin sức khỏe nói chung, nhưng bác sĩ phải đưa ra quyết định cuối cùng.",
    "extra": [
      {
        "en": "AI can help explain terms, but doctors must make medical decisions.",
        "vi": "AI có thể giúp giải thích thuật ngữ, nhưng bác sĩ phải đưa ra quyết định y khoa."
      },
      {
        "en": "Technology can help organize data, but humans must check important results.",
        "vi": "Công nghệ có thể giúp sắp xếp dữ liệu, nhưng con người phải kiểm tra kết quả quan trọng."
      }
    ]
  },
  {
    "title": "8. Tương lai đơn với will",
    "formula": "S + will + be + adjective",
    "desc": "Dùng will để nói về dự đoán trong tương lai.",
    "example": "The future of Chat AI will be very exciting.",
    "vi": "Tương lai của Chat AI sẽ rất thú vị.",
    "extra": [
      {
        "en": "AI tools will be more useful in the future.",
        "vi": "Các công cụ AI sẽ hữu ích hơn trong tương lai."
      },
      {
        "en": "Digital assistants will be easier to use over time.",
        "vi": "Trợ lý kỹ thuật số sẽ dễ sử dụng hơn theo thời gian."
      }
    ]
  },
  {
    "title": "9. May + become + tính từ so sánh hơn",
    "formula": "S + may + become + comparative adjectives",
    "desc": "Dùng may để nói khả năng và become với tính từ so sánh hơn để nói sự thay đổi.",
    "example": "In the coming years, Chat AI may become faster, smarter, and easier to use.",
    "vi": "Trong những năm tới, Chat AI có thể trở nên nhanh hơn, thông minh hơn và dễ sử dụng hơn.",
    "extra": [
      {
        "en": "AI may become safer and more accurate over time.",
        "vi": "AI có thể trở nên an toàn hơn và chính xác hơn theo thời gian."
      },
      {
        "en": "Digital tools may become simpler for new users.",
        "vi": "Các công cụ số có thể trở nên đơn giản hơn cho người dùng mới."
      }
    ]
  },
  {
    "title": "10. Should + V, not + V",
    "formula": "S + should + V + O, not + V + O",
    "desc": "Dùng should để nói điều nên làm và not để đối lập với điều không nên làm.",
    "example": "Chat AI should help people, not replace them.",
    "vi": "Chat AI nên giúp con người chứ không thay thế họ.",
    "extra": [
      {
        "en": "AI should support teachers, not replace their judgment.",
        "vi": "AI nên hỗ trợ giáo viên, không thay thế phán đoán của họ."
      },
      {
        "en": "Technology should help workers, not remove human responsibility.",
        "vi": "Công nghệ nên giúp người lao động, không loại bỏ trách nhiệm của con người."
      }
    ]
  }
];
