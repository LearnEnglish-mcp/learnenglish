// ===== communication01 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Gerund phrase as subject",
    "formula": "V-ing phrase + be + complement",
    "desc": "Dùng cụm V-ing làm chủ ngữ để nói về một hoạt động.",
    "example": "Talking with friends is an important part of daily life.",
    "vi": "Trò chuyện với bạn bè là một phần quan trọng của cuộc sống hằng ngày.",
    "extra": [
      {
        "en": "Talking politely builds trust.",
        "vi": "Nói chuyện lịch sự xây dựng niềm tin."
      },
      {
        "en": "Listening carefully improves communication.",
        "vi": "Lắng nghe cẩn thận cải thiện giao tiếp."
      }
    ]
  },
  {
    "title": "2. Help + object + bare infinitive",
    "formula": "S + help + O + V",
    "desc": "Dùng help + tân ngữ + động từ nguyên mẫu để nói giúp ai làm gì.",
    "example": "Good conversations help people understand each other better and build strong friendships.",
    "vi": "Những cuộc trò chuyện tốt giúp mọi người hiểu nhau hơn và xây dựng tình bạn bền chặt.",
    "extra": [
      {
        "en": "Good questions help people understand each other.",
        "vi": "Những câu hỏi hay giúp mọi người hiểu nhau."
      },
      {
        "en": "Clear words help visitors find the right place.",
        "vi": "Lời nói rõ ràng giúp du khách tìm đúng nơi."
      }
    ]
  },
  {
    "title": "3. Can + bare infinitive",
    "formula": "S + can + V",
    "desc": "Dùng can để diễn tả khả năng hoặc lựa chọn.",
    "example": "Friends can meet at school, in a park, at a café, or online.",
    "vi": "Bạn bè có thể gặp nhau ở trường, trong công viên, tại quán cà phê hoặc trực tuyến.",
    "extra": [
      {
        "en": "Friends can share ideas online.",
        "vi": "Bạn bè có thể chia sẻ ý tưởng trực tuyến."
      },
      {
        "en": "People can ask for help politely.",
        "vi": "Mọi người có thể nhờ giúp đỡ một cách lịch sự."
      }
    ]
  },
  {
    "title": "4. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên.",
    "example": "People should speak politely, listen without interrupting, and support each other.",
    "vi": "Mọi người nên nói chuyện lịch sự, lắng nghe mà không ngắt lời và hỗ trợ nhau.",
    "extra": [
      {
        "en": "People should listen carefully.",
        "vi": "Mọi người nên lắng nghe cẩn thận."
      },
      {
        "en": "Customers should speak politely.",
        "vi": "Khách hàng nên nói chuyện lịch sự."
      }
    ]
  },
  {
    "title": "5. Can lead to + noun",
    "formula": "S + can lead to + N",
    "desc": "Dùng can lead to để nói một điều có thể dẫn đến kết quả nào đó.",
    "example": "Good first impressions can lead to new friendships and useful connections.",
    "vi": "Ấn tượng đầu tiên tốt có thể dẫn đến những tình bạn mới và những mối liên hệ hữu ích.",
    "extra": [
      {
        "en": "Kindness can lead to stronger friendships.",
        "vi": "Lòng tốt có thể dẫn đến tình bạn bền chặt hơn."
      },
      {
        "en": "Clear communication can lead to better teamwork.",
        "vi": "Giao tiếp rõ ràng có thể dẫn đến làm việc nhóm tốt hơn."
      }
    ]
  },
  {
    "title": "6. When + V-ing clause",
    "formula": "When + V-ing, S + V",
    "desc": "Dùng when + V-ing để nói khi đang thực hiện một hoạt động.",
    "example": "When meeting someone new, people usually introduce themselves first.",
    "vi": "Khi gặp một người mới, mọi người thường tự giới thiệu trước.",
    "extra": [
      {
        "en": "When meeting new people, smile politely.",
        "vi": "Khi gặp người mới, hãy mỉm cười lịch sự."
      },
      {
        "en": "When asking for help, explain the problem clearly.",
        "vi": "Khi nhờ giúp đỡ, hãy giải thích vấn đề rõ ràng."
      }
    ]
  },
  {
    "title": "7. V-ing phrase as subject",
    "formula": "V-ing + O + V",
    "desc": "Dùng cụm V-ing làm chủ ngữ của câu.",
    "example": "Asking simple questions keeps the conversation interesting.",
    "vi": "Đặt những câu hỏi đơn giản giúp cuộc trò chuyện luôn thú vị.",
    "extra": [
      {
        "en": "Asking questions keeps a conversation active.",
        "vi": "Đặt câu hỏi giúp cuộc trò chuyện tiếp tục."
      },
      {
        "en": "Sharing ideas builds strong relationships.",
        "vi": "Chia sẻ ý tưởng xây dựng các mối quan hệ bền chặt."
      }
    ]
  },
  {
    "title": "8. Make + object + adjective",
    "formula": "S + make + O + Adj",
    "desc": "Dùng make + tân ngữ + tính từ để nói làm cho điều gì trở nên thế nào.",
    "example": "Being polite and confident makes communication easier.",
    "vi": "Lịch sự và tự tin giúp việc giao tiếp trở nên dễ dàng hơn.",
    "extra": [
      {
        "en": "Kind words make people comfortable.",
        "vi": "Lời nói tử tế khiến mọi người thoải mái."
      },
      {
        "en": "Clear directions make travel easier.",
        "vi": "Chỉ dẫn rõ ràng làm việc đi lại dễ dàng hơn."
      }
    ]
  },
  {
    "title": "9. Allow + object + to-infinitive",
    "formula": "S + allow + O + to V",
    "desc": "Dùng allow + tân ngữ + to V để nói cho phép ai làm gì.",
    "example": "Phone calls save time and allow people to share important information quickly, even when they are far apart.",
    "vi": "Các cuộc gọi điện thoại giúp tiết kiệm thời gian và cho phép mọi người chia sẻ thông tin quan trọng nhanh chóng, ngay cả khi họ ở xa nhau.",
    "extra": [
      {
        "en": "Phones allow people to communicate quickly.",
        "vi": "Điện thoại cho phép mọi người giao tiếp nhanh chóng."
      },
      {
        "en": "Messages allow friends to stay connected.",
        "vi": "Tin nhắn cho phép bạn bè giữ liên lạc."
      }
    ]
  },
  {
    "title": "10. Before + V-ing",
    "formula": "Before + V-ing, S + V",
    "desc": "Dùng before + V-ing để nói một hành động xảy ra trước hành động khác.",
    "example": "Before speaking, people usually greet each other politely.",
    "vi": "Trước khi nói chuyện, mọi người thường chào nhau một cách lịch sự.",
    "extra": [
      {
        "en": "Check the message before sending it.",
        "vi": "Hãy kiểm tra tin nhắn trước khi gửi."
      },
      {
        "en": "Read the menu before ordering food.",
        "vi": "Hãy đọc thực đơn trước khi gọi món."
      }
    ]
  }
];
