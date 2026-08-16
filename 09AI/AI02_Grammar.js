// ===== AI02 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Because + mệnh đề nguyên nhân",
    "formula": "S + be + adj + because + S + can + V",
    "desc": "Dùng because để giải thích lý do.",
    "example": "Chat AI is helpful for students because it can explain lessons in a simple way.",
    "vi": "Chat AI hữu ích cho học sinh vì nó có thể giải thích bài học theo cách đơn giản.",
    "extra": [
      {
        "en": "AI is useful because it can explain difficult ideas simply.",
        "vi": "AI hữu ích vì nó có thể giải thích các ý khó một cách đơn giản."
      },
      {
        "en": "Students like the tool because it offers quick practice.",
        "vi": "Học sinh thích công cụ vì nó cung cấp bài luyện tập nhanh."
      }
    ]
  },
  {
    "title": "2. When + mệnh đề thời gian/điều kiện",
    "formula": "When + S + V, S + can + V",
    "desc": "Dùng when để nói điều xảy ra khi một tình huống xuất hiện.",
    "example": "When students do not understand a topic, they can ask Chat AI for examples, summaries, or practice questions.",
    "vi": "Khi học sinh không hiểu một chủ đề, các em có thể hỏi Chat AI để lấy ví dụ, bản tóm tắt hoặc câu hỏi luyện tập.",
    "extra": [
      {
        "en": "When learners need help, they can ask clear questions.",
        "vi": "Khi người học cần trợ giúp, họ có thể đặt câu hỏi rõ ràng."
      },
      {
        "en": "When a topic is difficult, students can request examples.",
        "vi": "Khi một chủ đề khó, học sinh có thể yêu cầu ví dụ."
      }
    ]
  },
  {
    "title": "3. Make + object + adjective",
    "formula": "S + make(s) + O + adjective",
    "desc": "Dùng make + tân ngữ + tính từ để diễn tả làm cho điều gì trở nên thế nào.",
    "example": "This makes learning faster and more interesting.",
    "vi": "Điều này làm cho việc học nhanh hơn và thú vị hơn.",
    "extra": [
      {
        "en": "Clear examples make grammar easier to understand.",
        "vi": "Ví dụ rõ ràng làm cho ngữ pháp dễ hiểu hơn."
      },
      {
        "en": "Useful feedback makes writing more accurate.",
        "vi": "Phản hồi hữu ích làm cho bài viết chính xác hơn."
      }
    ]
  },
  {
    "title": "4. Can + use + object + to-infinitive",
    "formula": "S + can + use + O + to + V",
    "desc": "Dùng cấu trúc này để nói dùng công cụ nhằm thực hiện một mục đích.",
    "example": "Students can use Chat AI to prepare presentations, check grammar, improve writing, and review before exams.",
    "vi": "Học sinh có thể dùng Chat AI để chuẩn bị bài thuyết trình, kiểm tra ngữ pháp, cải thiện bài viết và ôn tập trước kỳ thi.",
    "extra": [
      {
        "en": "Students can use AI to plan a short presentation.",
        "vi": "Học sinh có thể dùng AI để lập kế hoạch cho một bài thuyết trình ngắn."
      },
      {
        "en": "Workers can use AI to review a simple report.",
        "vi": "Người lao động có thể dùng AI để xem lại một báo cáo đơn giản."
      }
    ]
  },
  {
    "title": "5. Should not + V + without + V-ing",
    "formula": "S + should not + V + O + without + V-ing",
    "desc": "Dùng should not để khuyên không làm việc gì và without + V-ing để nói thiếu một hành động.",
    "example": "However, students should not copy answers without thinking.",
    "vi": "Tuy nhiên, học sinh không nên sao chép câu trả lời mà không suy nghĩ.",
    "extra": [
      {
        "en": "Students should not submit work without checking it.",
        "vi": "Học sinh không nên nộp bài mà không kiểm tra."
      },
      {
        "en": "Users should not share private data without thinking carefully.",
        "vi": "Người dùng không nên chia sẻ dữ liệu riêng tư mà không suy nghĩ cẩn thận."
      }
    ]
  },
  {
    "title": "6. Hiện tại tiếp diễn với become",
    "formula": "S + am/is/are + becoming + adjective",
    "desc": "Dùng hiện tại tiếp diễn để nói một xu hướng đang phát triển.",
    "example": "Chat AI is becoming popular in many workplaces.",
    "vi": "Chat AI đang trở nên phổ biến tại nhiều nơi làm việc.",
    "extra": [
      {
        "en": "AI tools are becoming common in modern offices.",
        "vi": "Các công cụ AI đang trở nên phổ biến trong văn phòng hiện đại."
      },
      {
        "en": "Online learning is becoming more flexible for students.",
        "vi": "Học trực tuyến đang trở nên linh hoạt hơn đối với học sinh."
      }
    ]
  },
  {
    "title": "7. Bị động với should",
    "formula": "S + should + adverb + be + V3 + by + agent",
    "desc": "Dùng should ở dạng bị động để nói điều nên được thực hiện.",
    "example": "Important decisions should still be checked by humans.",
    "vi": "Các quyết định quan trọng vẫn nên được con người kiểm tra.",
    "extra": [
      {
        "en": "Private information should always be checked before sharing.",
        "vi": "Thông tin riêng tư luôn nên được kiểm tra trước khi chia sẻ."
      },
      {
        "en": "Final reports should be reviewed by responsible workers.",
        "vi": "Báo cáo cuối cùng nên được nhân viên có trách nhiệm xem lại."
      }
    ]
  },
  {
    "title": "8. Can + V + danh sách tân ngữ",
    "formula": "S + can + V + O1 + O2 + additional objects",
    "desc": "Dùng can với một động từ và nhiều tân ngữ để liệt kê những nội dung có thể tạo.",
    "example": "It can write social media posts, short stories, advertisements, video scripts, study notes, and product descriptions.",
    "vi": "Nó có thể viết bài đăng mạng xã hội, truyện ngắn, quảng cáo, kịch bản video, ghi chú học tập và mô tả sản phẩm.",
    "extra": [
      {
        "en": "AI can draft emails, notes, and short descriptions.",
        "vi": "AI có thể soạn email, ghi chú và mô tả ngắn."
      },
      {
        "en": "The tool can create plans, summaries, and practice questions.",
        "vi": "Công cụ có thể tạo kế hoạch, bản tóm tắt và câu hỏi luyện tập."
      }
    ]
  },
  {
    "title": "9. Ask + object + to-infinitive",
    "formula": "S + can + ask + O + to + V",
    "desc": "Dùng ask + tân ngữ + to-infinitive để yêu cầu ai hoặc công cụ làm gì.",
    "example": "They can ask it to make content more interesting, shorter, longer, simpler, or more professional.",
    "vi": "Họ có thể yêu cầu nó làm cho nội dung thú vị hơn, ngắn hơn, dài hơn, đơn giản hơn hoặc chuyên nghiệp hơn.",
    "extra": [
      {
        "en": "Users can ask AI to make a paragraph shorter.",
        "vi": "Người dùng có thể yêu cầu AI làm một đoạn văn ngắn hơn."
      },
      {
        "en": "Teachers can ask the tool to create simpler examples.",
        "vi": "Giáo viên có thể yêu cầu công cụ tạo các ví dụ đơn giản hơn."
      }
    ]
  },
  {
    "title": "10. So sánh nhất + come from + V-ing",
    "formula": "The best + N + comes from + V-ing",
    "desc": "Dùng so sánh nhất và come from + V-ing để nói nguồn gốc của kết quả tốt nhất.",
    "example": "The best content comes from combining AI support with personal ideas.",
    "vi": "Nội dung tốt nhất đến từ việc kết hợp sự hỗ trợ của AI với ý tưởng cá nhân.",
    "extra": [
      {
        "en": "The best results come from checking AI answers carefully.",
        "vi": "Kết quả tốt nhất đến từ việc kiểm tra câu trả lời AI cẩn thận."
      },
      {
        "en": "Good learning comes from combining technology with practice.",
        "vi": "Việc học tốt đến từ việc kết hợp công nghệ với luyện tập."
      }
    ]
  }
];
