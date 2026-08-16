// ===== communication02 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. To-infinitive of purpose",
    "formula": "S + be + N + to V",
    "desc": "Dùng to V để nêu mục đích hoặc chức năng.",
    "example": "Sending messages is a fast and easy way to communicate today.",
    "vi": "Gửi tin nhắn là một cách giao tiếp nhanh chóng và dễ dàng ngày nay.",
    "extra": [
      {
        "en": "People use messages to share information.",
        "vi": "Mọi người dùng tin nhắn để chia sẻ thông tin."
      },
      {
        "en": "Visitors ask questions to find places.",
        "vi": "Du khách đặt câu hỏi để tìm địa điểm."
      }
    ]
  },
  {
    "title": "2. Can + bare infinitive",
    "formula": "S + can + V",
    "desc": "Dùng can để diễn tả khả năng hoặc tác dụng có thể xảy ra.",
    "example": "Using polite words and checking spelling before sending can prevent confusion and improve communication between people.",
    "vi": "Sử dụng lời lẽ lịch sự và kiểm tra chính tả trước khi gửi có thể ngăn sự nhầm lẫn và cải thiện giao tiếp giữa mọi người.",
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
    "title": "3. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên.",
    "example": "Good messages should be friendly, respectful, and easy to read.",
    "vi": "Tin nhắn tốt nên thân thiện, tôn trọng và dễ đọc.",
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
    "title": "4. When + adjective",
    "formula": "S + V + when + Adj",
    "desc": "Dùng when để nêu điều kiện hoặc thời điểm phù hợp.",
    "example": "People should reply on time when possible and avoid sending unnecessary messages.",
    "vi": "Mọi người nên trả lời đúng lúc khi có thể và tránh gửi những tin nhắn không cần thiết.",
    "extra": [
      {
        "en": "Reply when possible.",
        "vi": "Hãy trả lời khi có thể."
      },
      {
        "en": "Ask for help when necessary.",
        "vi": "Hãy nhờ giúp đỡ khi cần."
      }
    ]
  },
  {
    "title": "5. Make + object + adjective",
    "formula": "S + make + O + Adj",
    "desc": "Dùng make + tân ngữ + tính từ để diễn tả tác động.",
    "example": "Asking politely makes others feel respected and more willing to offer useful assistance when needed.",
    "vi": "Nhờ một cách lịch sự khiến người khác cảm thấy được tôn trọng và sẵn lòng hỗ trợ hữu ích hơn khi cần.",
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
    "title": "6. Coordinated gerunds as subject",
    "formula": "V-ing + and + V-ing + singular verb",
    "desc": "Dùng hai hoạt động dạng V-ing nối bằng and làm cụm chủ ngữ.",
    "example": "Saying please and thank you shows good manners and appreciation for another person's time.",
    "vi": "Nói “làm ơn” và “cảm ơn” thể hiện cách cư xử tốt và sự trân trọng thời gian của người khác.",
    "extra": [
      {
        "en": "Saying please and smiling politely shows good manners.",
        "vi": "Nói làm ơn và mỉm cười lịch sự thể hiện cách cư xử tốt."
      },
      {
        "en": "Listening carefully and speaking clearly improves communication.",
        "vi": "Lắng nghe cẩn thận và nói rõ ràng cải thiện giao tiếp."
      }
    ]
  },
  {
    "title": "7. Should never + bare infinitive",
    "formula": "S + should never + V",
    "desc": "Dùng should never để khuyên không nên làm điều gì.",
    "example": "People should never feel embarrassed about asking questions or requesting support.",
    "vi": "Mọi người không bao giờ nên cảm thấy xấu hổ khi đặt câu hỏi hoặc yêu cầu hỗ trợ.",
    "extra": [
      {
        "en": "People should never interrupt rudely.",
        "vi": "Mọi người không bao giờ nên ngắt lời một cách thô lỗ."
      },
      {
        "en": "Visitors should never ignore clear safety directions.",
        "vi": "Du khách không bao giờ nên bỏ qua chỉ dẫn an toàn rõ ràng."
      }
    ]
  },
  {
    "title": "8. Gerund phrase as subject",
    "formula": "V-ing + N + be + complement",
    "desc": "Dùng cụm V-ing làm chủ ngữ.",
    "example": "Giving directions is an important communication skill in daily life.",
    "vi": "Chỉ đường là một kỹ năng giao tiếp quan trọng trong cuộc sống hằng ngày.",
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
    "title": "9. May + also + bare infinitive",
    "formula": "S + may also + V",
    "desc": "Dùng may để diễn tả khả năng.",
    "example": "They may also mention traffic lights, bridges, or large buildings as landmarks.",
    "vi": "Họ cũng có thể nhắc đến đèn giao thông, cầu hoặc các tòa nhà lớn làm mốc.",
    "extra": [
      {
        "en": "People may also draw a map.",
        "vi": "Mọi người cũng có thể vẽ bản đồ."
      },
      {
        "en": "Customers may also ask about prices.",
        "vi": "Khách hàng cũng có thể hỏi về giá."
      }
    ]
  },
  {
    "title": "10. If + adjective clause",
    "formula": "If + Adj, S + can + V",
    "desc": "Dùng if để nêu điều kiện.",
    "example": "If possible, people can repeat the directions or draw a simple map.",
    "vi": "Nếu có thể, mọi người có thể lặp lại chỉ dẫn hoặc vẽ một bản đồ đơn giản.",
    "extra": [
      {
        "en": "If possible, repeat the directions slowly.",
        "vi": "Nếu có thể, hãy lặp lại chỉ dẫn chậm rãi."
      },
      {
        "en": "If necessary, ask another person for help.",
        "vi": "Nếu cần, hãy nhờ một người khác giúp đỡ."
      }
    ]
  }
];
